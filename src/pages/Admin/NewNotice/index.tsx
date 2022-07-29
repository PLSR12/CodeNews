import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import api from '../../../services/api'

import { ErrorMessage } from '../../../components'

import { Container, Label, Input, ButtonStyle, LabelUpload } from './styles'

function NewCar() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

  const onSubmit = async (data: any) => {
    const noticeDataFormData = new FormData()

    noticeDataFormData.append('title', data.title)
    noticeDataFormData.append('preview', data.preview)
    noticeDataFormData.append('content', data.content)
    noticeDataFormData.append('category_id', data.category.id)
    noticeDataFormData.append('file', data.file[0])

    await toast.promise(api.post('notices', noticeDataFormData), {
      success: 'Noticia criado com sucesso',
      error: 'Falha ao criar o noticia',
    })

    setTimeout(() => {
      push('/admin-noticias')
    }, 2000)
  }

  const schema = Yup.object().shape({
    title: Yup.string().required('O nome é obrigatório'),
    preview: Yup.string().required('O campo é obrigatória'),
    content: Yup.string().required('O campo é obrigatório'),
    category: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed().test('required', 'Carregue uma imagem', (value: any) => {
      return value && value.length > 0
    }),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(() => {
    async function loadCategories() {
      const { data: CategoryNews }: any = await api.get('category')

      const newCategories: any = [...CategoryNews]

      setCategories(newCategories)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Titulo:</Label>
          <Input type="text" {...register('title')} />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preview:</Label>
          <textarea {...register('preview')} />
          <ErrorMessage>{errors.preview?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Contéudo:</Label>
          <textarea {...register('content')} />
          <ErrorMessage>{errors.content?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Caregue a imagem do noticia
              </>
            )}
            <input
              type="file"
              {...register('file')}
              onChange={(value: any): void => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(ctg: { id: any; name: string }) => ctg.name}
                  getOptionValue={(ctg: { id: any }) => ctg.id}
                  placeholder="Escolha uma categoria"
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ButtonStyle type="submit"> Adicionar Noticia </ButtonStyle>
      </form>
    </Container>
  )
}

export default NewCar

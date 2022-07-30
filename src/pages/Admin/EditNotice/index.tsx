import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'

import {
  ErrorMessage,
  Box,
  InputComponent,
  TextAreaComponent,
} from './../../../components'
import {
  Container,
  ButtonStyle,
  LabelUpload,
  CloudUploadIconStyle,
} from './styles'

function EditCar() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const {
    push,
    location: {
      state: { notice },
    },
  }: any = useHistory()

  const onSubmited = async (data: any) => {
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
    setValue,
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

  useEffect(() => {
    setValue('title', notice?.title)
    setValue('preview', notice?.preview)
    setValue('content', notice?.content)
  }, [notice])

  return (
    <Container>
      <Box>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmited)}>
          <InputComponent
            text="Titúlo:"
            register={register}
            htmlFor="title"
            error={errors.title}
          />
          <TextAreaComponent
            text="Preview:"
            register={register}
            htmlFor="preview"
            error={errors.preview}
          />
          <TextAreaComponent
            text="Contéudo:"
            register={register}
            htmlFor="content"
            error={errors.content}
          />
          <div>
            <LabelUpload>
              {fileName || (
                <>
                  <CloudUploadIconStyle />
                  Caregue a imagem da notícia
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
                    getOptionLabel={(ctg: { id: any; name: string }) =>
                      ctg.name
                    }
                    getOptionValue={(ctg: { id: any }) => ctg.id}
                    placeholder="Escolha uma categoria"
                    defaultValue={notice.category}
                  />
                )
              }}
            ></Controller>
            <ErrorMessage>{errors.category?.message}</ErrorMessage>
          </div>
          <ButtonStyle type="submit"> Adicionar Noticia </ButtonStyle>
        </form>
      </Box>
    </Container>
  )
}

export default EditCar

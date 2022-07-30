import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import paths from '../../../common/constants/paths'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { Container, EditIconStyles } from './styles'
import api from '../../../services/api'

function ListNotices() {
  const [notices, setNotices] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    async function loadNotices() {
      const { data }: any = await api.get('notices')
      setNotices(data)
    }
    loadNotices()
  }, [])

  function editNotice(notice: any) {
    push(paths.EditNotice, { notice })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Titulo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notices &&
              notices.map((notice: any) => (
                <TableRow
                  key={notice.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {notice.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {notice.title}
                  </TableCell>

                  <TableCell>
                    <EditIconStyles onClick={() => editNotice(notice)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>{' '}
    </Container>
  )
}

export default ListNotices

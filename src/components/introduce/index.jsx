import Main from './main'
import QnA from './qna'
import api from '../../util/api/index'
import * as S from './index.style'
import axios from 'axios'
import { useEffect, useState } from 'react'
import dummy from './pushup.json'
import { useLocation, useNavigate } from 'react-router-dom'

const Render = () => {
  const [getInfo, setInfo] = useState(dummy)
  const [comments, setComments] = useState([])
  const navigate = useNavigate()

  const name = window.location.href.split('/')[4]
  useEffect(() => {
    api.get(`exercise/${name}`).then(
      (res) => {
        const d = res.data.data
        d.muscle = d.muscle.split('/')
        setInfo(d)
      },
      (err) => {
        console.log(err)
        navigate('/')
      }
    )
  }, [])

  useEffect(() => {
    api.get(`exercise/${name}/board`).then(
      (res) => {
        setComments(res)
        console.log(res.data.data)
      },
      (err) => {
        console.log(err)
      }
    )
  }, [])

  return (
    <S.Root>
      <S.Container>
        <Main info={getInfo} comment={comments} />
      </S.Container>
    </S.Root>
  )
}
export default Render

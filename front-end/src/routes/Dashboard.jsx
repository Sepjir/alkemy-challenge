import React from 'react'
import IncomeForm from '../components/IncomeForm'
import axios from 'axios'

const Dashboard = () => {

  React.useEffect(async () => {
    const user = localStorage.getItem("usuario")
    const parseUser = JSON.parse(user)
    const {data} = await axios.get("https://ignacio-finanzas-app.herokuapp.com/api/v1/users")
    const filtrandoData =  data.filter((u) => parseUser.mail === u.map((mail) => mail.mail))
    if (!user) {
      window.location.href = "/"
    } if (filtrandoData) {
      console.log("Bienvenido")
    }
  }, [])

  return (
    <>
        <IncomeForm/>
    </>
  )
}

export default Dashboard
import React, { useEffect } from 'react'
import AxiosConfig from '../../config/AxiosConfig'
import { useState } from 'react';

export const Home = () => {

  const [msj, setMsj] = useState()

  const getData = async()=> {
    const axiosRef =  AxiosConfig({token: ''});
    const resp = await axiosRef.get("test")
    setMsj(resp.data)
  }

  useEffect(() => {
    getData();
  })

  return (
    <div> {msj} </div>
  )
}
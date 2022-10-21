import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Login } from '../containers/Login'

const Home: NextPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');     

      if(token) {
        setAccessToken(token);        
      }
    }
  }, []);

  return (
    <div>
      {!accessToken ? <Login setAccessToken={setAccessToken} /> : "Bem vindo!"}     
    </div>
  )
}

export default Home

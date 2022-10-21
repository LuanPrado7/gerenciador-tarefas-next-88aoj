import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Login } from '../containers/Login'
import { Principal } from '../containers/Principal';

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
    <>
      {
        !accessToken ? 
          <Login setAccessToken={setAccessToken} /> :
          <Principal setAccessToken={setAccessToken} />
      }     
    </>
  )
}

export default Home

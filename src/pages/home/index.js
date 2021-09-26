import React, {useEffect} from "react";
import { Redirect } from "react-router-dom";

const Home = () => {
  useEffect(() => {
      const token = localStorage.getItem("app-token");
      console.log(token, 'token')
      if (!token) {
        <Redirect to='/login'/>
      }
  }, [])


  return (
    <h1>Home</h1>
  )
}

export default Home;
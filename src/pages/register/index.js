import React, { useState } from "react";

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Redirect } from "react-router-dom";

import '../login/Login.css'

const Register = () => {
  const [isLogged, setIsLogged] = useState(false);
  const handleSubmit = values => {
    axios.post('http://localhost:8080/v1/api/user', values)
      .then(resp => {
        const { data } = resp
        if (data) {
          const { result } = data;
          console.log('result', result);
          localStorage.setItem('app-token', result)
          setIsLogged(true)
        }
      })
  }

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })
  return (
    <>
      {!isLogged ?
    <>
      <h1>Register</h1>
      <p>Fill the fields to create a new user</p>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Login">
          <div className="Login-Group">
            <Field
              name="firstName"
              className="Login-Field"
            />
            <ErrorMessage
              component="span"
              name="firstName"
              className="Login-Error"
            />
          </div>
          <div className="Login-Group">
            <Field
              name="lastName"
              className="Login-Field"
            />
            <ErrorMessage
              component="span"
              name="lastName"
              className="Login-Error"
            />
          </div>
          <div className="Login-Group">
            <Field
              name="email"
              className="Login-Field"
            />
            <ErrorMessage
              component="span"
              name="email"
              className="Login-Error"
            />
          </div>
          <div className="Login-Group">
            <Field
              name="password"
              className="Login-Field"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="Login-Error"
            />
          </div>
          <button className="Login-Btn" type="submit">Register</button>
        </Form>
      </Formik>
      </>
        : <Redirect to='/login' />
      }
    </>
  )
}

export default Register

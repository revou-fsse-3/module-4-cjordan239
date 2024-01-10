import React, { useState } from 'react';
import { useFormik, Form, Field, ErrorMessage,Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

interface LoginFormValues {
  [key: string]: string;
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<LoginFormValues>({
      email: '',
      password: '',
  });

  const handleLogin = async (values: LoginFormValues) => {
      try {
      const requestOptions = {
          method: 'POST',
          body: JSON.stringify({
              email: values.email,
              password: values.password,
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      };

      const response = await fetch('https://mock-api.arikmpt.com/api/user/login', requestOptions);
      if (response.ok) {
          const responseData = await response.json();
          console.log('Login berhasil:', responseData);
          navigate('/editlist');
      } else {
          const errorData = await response.json();
          console.error('Login gagal:', errorData);
      }
      } catch (error) {
          console.error('Error:', error);
      }
  };

  return (
    <Formik
    initialValues={formData}
    validationSchema={Yup.object().shape({
        email: Yup.string().email('Email tidak valid').required('Email harus diisi'),
        password: Yup.string().required('Password harus diisi'),
    })}
    onSubmit={(values, { setSubmitting }) => {
        if (Object.keys(values).some((key) => values[key] === '')) {
            setSubmitting(false);
        } else {
            setFormData({ ...formData, ...values });
            handleLogin(values);
        }
    }}


    >
        <Form className='flex flex-col justify-center items-center m-60 bg-gray-800 p-4 rounded-md'>
          <h1 className='mb-5 text-white'>Login Page</h1>
          <label htmlFor='email' className='text-white'>
            Email :
          </label>
          <Field as={Input} className="border border-black p-2 w-full mb-4 bg-gray-700 text-white" type="email" id="email" name="email"     placeholder="email" />
          <ErrorMessage name="email" component="span" className="error text-xs text-red-600" />

          <label htmlFor='password' className='text-white'>
            Password:
          </label>

          <Field as={Input} className="border border-black p-2 w-full mb-4 bg-gray-700 text-white" type="password" id="password" name="password"    placeholder="password" />
          <ErrorMessage name="password" component="span" className="error text-xs text-red-600" />

          <button
           type='submit' className='border border-black p-2 mt-5 bg-gray-700 text-white rounded'>
            Login
          </button>

          <span className='text-white'> or </span>

          <button
            type='button'

            className='border border-black p-2 mt-5 bg-gray-700 text-white rounded'
          >
            Register
          </button>
          <span className='text-white' >Forgot Your Password </span>
        </Form>
    </Formik>
  );
};

export default LoginForm;
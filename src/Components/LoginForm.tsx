import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = ({}) => {
  const navigate = useNavigate();

  const handleLoginCLick = () => {
    navigate('/editlist') // navigate to edit list after login
  }

  const handleRegisterClick = () => {
    navigate('/home'); // Use the navigate function to navigate to '/home'
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Input valid email'),
      password: Yup.string().required('Input valid password'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center m-60 bg-gray-800 p-4 rounded-md'>
      <h1 className='mb-5 text-white'>Login Page</h1>
      <label htmlFor='email' className='text-white'>
        Email:
      </label>
      <input
        className='border border-black p-2 w-full mb-4 bg-gray-700 text-white'
        id='usernameID'
        name='email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (
        <div className='text-red-500'>{formik.errors.email}</div>
      ) : null}
      <h1> </h1>
      <label htmlFor='password' className='text-white'>
        Password:
      </label>
      <input
        className='border border-black p-2 w-full mb-4 bg-gray-700 text-white'
        id='passwordID'
        name='password'
        type='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />

      {formik.touched.password && formik.errors.password ? (
        <div className='text-red-500'>{formik.errors.password}</div>
      ) : null}

      <button
      onClick={handleLoginCLick}
       type='submit' className='border border-black p-2 mt-5 bg-gray-700 text-white rounded'>
        Login
      </button>
      <span className='text-white'> or </span>
      <button
        type='button'
        onClick={handleRegisterClick}
        className='border border-black p-2 mt-5 bg-gray-700 text-white rounded'
      >
        Register
      </button>
      <span className='text-white' >Forgot Your Password </span>
    </form>
  );
};

export default LoginForm;

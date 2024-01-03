import React, { useState } from 'react';
import { Formik, Form, useFormik} from 'formik';
import * as Yup from 'yup';
import App from '../App';

interface NewFormProps {
  onNextStep: () => void;
  updateFormValues: (values: any) => void;
}

export const NewForm : React.FC<NewFormProps>  = ({onNextStep,updateFormValues}) => {
  const formik = useFormik ({
    initialValues: {
      fullName: '',
      email: '',
      dateOfBirth: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(10, 'Must be 15 character min').required('This is required'),
      email: Yup.string().email('Invalid email adress').required('required'),
      dateOfBirth: Yup.string().required('required'),

    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      onNextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center m-60 border border-black padding p-20'>
      <label htmlFor="fullName"> Full Name :</label>
      <input className='border border-black' 
      id='fullNameID'
      name='fullName'
      type='text'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.fullName}
      />

    {formik.touched.fullName && formik.errors.fullName ? (
      <div>{formik.errors.fullName}</div>
    ): null}


      <label htmlFor='email'> Email :</label>
      <input  className='border border-black'
      id='emailID'
      name='email'
      type="text" 
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (
      <div>{formik.errors.email}</div>
    ): null}

      <label htmlFor='dateOfBirth'> Date Of Birth :</label>
      <input 
      id='dobID'
      name='dateOfBirth'
      type='date'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.dateOfBirth}
      />

      {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
      <div>{formik.errors.dateOfBirth}</div>
    ): null}
    <button type="submit" className='border border-black padding mt-5 p-2'> Next </button>
    </form>
  );
  
};

export default NewForm

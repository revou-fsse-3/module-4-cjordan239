import React, { useState } from 'react';
import { Formik, Form, useFormik} from 'formik';
import * as Yup from 'yup';
import NewForm from './NewForm';
import App from '../App';


interface NewFormProps {
  onNextStep: () => void;
  onPrevStep: () => void;
  updateFormValues: (values: any) => void;
}



const NewForm2 : React.FC<NewFormProps> = ({onNextStep, onPrevStep,updateFormValues}) => {
    const formik = useFormik ({
        initialValues: {
      
          streetAdress:'',
          city:'',
          state:'',
          zipCode:'',
          
        },
        validationSchema: Yup.object({

          streetAdress: Yup.string().required('input valid adress'),
          city: Yup.string().required('input valid city'),
          state: Yup.string().required('input valid state'),
          zipCode: Yup.number().required('input valid code'),
    
    
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          onNextStep();
          
        },
      });
      
    return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center m-60 border border-black padding p-20'>
      <label htmlFor="streetAdress"> Street Adress :</label>
      <input  className='border border-black'
      id='streetAdressID'
      name='streetAdress'
      type='text'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.streetAdress}
      />

    {formik.touched.streetAdress && formik.errors.streetAdress ? (
      <div>{formik.errors.streetAdress}</div>
    ): null}

      <label htmlFor="city"> City :</label>
      <input  className='border border-black'
      id='cityID'
      name='city'
      type='text'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.city}
      />

    {formik.touched.city && formik.errors.city ? (
      <div>{formik.errors.city}</div>
    ): null}

      <label htmlFor="state"> State :</label>
      <input  className='border border-black'
      id='stateID'
      name='state'
      type='text'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.state}
      />

    {formik.touched.state && formik.errors.state ? (
      <div>{formik.errors.state}</div>
    ): null}

      <label htmlFor="zipCode"> Zipcode :</label>
      <input  className='border border-black'
      id='zipcodeID'
      name='zipCode'
      type='number'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.zipCode}
      />

    {formik.touched.zipCode && formik.errors.zipCode ? (
      <div>{formik.errors.zipCode}</div>
    ): null}
    <button type="submit" className='border border-black padding mt-5 p-2'> Next </button>
    <button type='button' onClick = {onPrevStep} className='border border-black padding mt-5 p-2'> Previous</button>
    
    </ form>
    )
}


export default NewForm2
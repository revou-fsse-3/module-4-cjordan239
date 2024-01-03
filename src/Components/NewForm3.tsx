import React, { useState } from 'react';
import { Formik, Form, useFormik} from 'formik';
import * as Yup from 'yup';
import NewForm from './NewForm';
import NewForm2 from './NewForm2';
import App from '../App';


interface NewFormProps {
  onNextStep: () => void;
  onPrevStep: () => void;
  updateFormValues: (values: any) => void;
}

const NewForm3 : React.FC<NewFormProps> = ({onNextStep,onPrevStep,updateFormValues}) => {
    const formik = useFormik ({
        initialValues: {

          userName:'',
          password:'',
        },
        validationSchema: Yup.object({
          userName: Yup.string().required('input valid username'),
          password: Yup.string().required('input valid password'),
    
    
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center m-60 border border-black padding p-20'>
        <label htmlFor="userName"> Username :</label>
        <input  className='border border-black'
         id='usernameID'
         name='userName'
         type='text'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.userName}
         />

         {formik.touched.userName && formik.errors.userName ? (
         <div>{formik.errors.userName}</div>
         ): null}

        <label htmlFor="password"> Password :  </label>
        <input  className='border border-black'
         id='passwordID'
         name='password'
         type='password'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
          />

         {formik.touched.password && formik.errors.password ? (
           <div>{formik.errors.password}</div>
         ): null}

        <button type="submit" className='border border-black padding mt-5 p-2'> Submit</button>
        <button type='button' onClick = {onPrevStep} className='border border-black padding mt-5 p-2'> Previous</button>
        </form>
        )
    }

    export default NewForm3
    
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface NewFormProps {
  onNextStep: () => void;
}

const NewForm: React.FC<NewFormProps> = ({ onNextStep }) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      dateOfBirth: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(10, 'Must be 15 characters minimum').required('This is required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      dateOfBirth: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      onNextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center m-60 bg-gray-800 p-4 rounded-md'>
      <label htmlFor="fullName" className='block mb-2 text-white'>
        Full Name :
      </label>
      <input
        className='border border-white p-2 w-full mb-4 bg-gray-700 text-white'
        id='fullNameID'
        name='fullName'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fullName}
      />

      {formik.touched.fullName && formik.errors.fullName ? (
        <div className='text-red-500'>{formik.errors.fullName}</div>
      ) : null}

      <label htmlFor='email' className='block mb-2 text-white'>
        Email :
      </label>
      <input
        className='border border-white p-2 w-full mb-4 bg-gray-700 text-white'
        id='emailID'
        name='email'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (
        <div className='text-red-500'>{formik.errors.email}</div>
      ) : null}

      <label htmlFor='dateOfBirth' className='block mb-2 text-white'>
        Date Of Birth :
      </label>
      <input
        className='border border-white p-2 w-full mb-4 bg-gray-700 text-white'
        id='dobID'
        name='dateOfBirth'
        type='date'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.dateOfBirth}
      />

      {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
        <div className='text-red-500'>{formik.errors.dateOfBirth}</div>
      ) : null}

      <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600' type='submit'>
        Next
      </button>
    </form>
  );
};

export default NewForm;

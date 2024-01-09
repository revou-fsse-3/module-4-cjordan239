import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface NewFormProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const NewForm2: React.FC<NewFormProps> = ({ onNextStep, onPrevStep }) => {
  const formik = useFormik({
    initialValues: {
      streetAdress: '',
      city: '',
      state: '',
      zipCode: '',
    },
    validationSchema: Yup.object({
      streetAdress: Yup.string().required('Input valid address'),
      city: Yup.string().required('Input valid city'),
      state: Yup.string().required('Input valid state'),
      zipCode: Yup.number().required('Input valid code'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      onNextStep();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='flex flex-col justify-center items-center m-60 bg-gray-800 p-4 rounded-md'
    >
      <label htmlFor='streetAdress' className="block mb-2 text-white">
        Street Address:
      </label>
      <input
        className='border border-black p-2 w-full mb-4 bg-gray-700 text-white'
        id='streetAdressID'
        name='streetAdress'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.streetAdress}
      />

      {formik.touched.streetAdress && formik.errors.streetAdress ? (
        <div className='text-red-500'>{formik.errors.streetAdress}</div>
      ) : null}

      <label htmlFor='city' className="block mb-2 text-white">
        City:
      </label>
      <input
        className='border border-black p-2 w-full mb-4 bg-gray-700 text-white'
        id='cityID'
        name='city'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
      />

      {formik.touched.city && formik.errors.city ? (
        <div className='text-red-500'>{formik.errors.city}</div>
      ) : null}

      <label htmlFor='state' className="block mb-2 text-white">
        State:
      </label>
      <input
        className='border border-black p-2 w-full mb-4 bg-gray-700 text-white'
        id='stateID'
        name='state'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.state}
      />

      {formik.touched.state && formik.errors.state ? (
        <div className='text-red-500'>{formik.errors.state}</div>
      ) : null}

      <label htmlFor='zipCode' className="block mb-2 text-white">
        Zipcode:
      </label>
      <input
        className='border border-black p-2 w-full mb-4 bg-gray-700 text-white'
        id='zipcodeID'
        name='zipCode'
        type='number'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.zipCode}
      />

      {formik.touched.zipCode && formik.errors.zipCode ? (
        <div className='text-red-500'>{formik.errors.zipCode}</div>
      ) : null}
      
      <button
        type='submit'
        className='border border-blue-500 p-2 mt-5 bg-blue-500 text-white rounded'
      >
        Next
      </button>

      <button
        type='button'
        onClick={onPrevStep}
        className='border border-gray-500 p-2 mt-2 bg-gray-500 text-white rounded'
      >
        Previous
      </button>
    </form>
  );
};

export default NewForm2;

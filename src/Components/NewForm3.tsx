import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface NewFormProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const NewForm3: React.FC<NewFormProps> = ({ onNextStep, onPrevStep }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Input valid username'),
      password: Yup.string().required('Input valid password'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate('/login');
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='flex flex-col justify-center items-center m-60 bg-gray-800 p-4'
    >
      <label htmlFor='userName' className="block mb-2 text-white">
        Username :
      </label>
      <input
        className='border border-black p-2 w-full mb-4 bg-gray-700 text-white'
        id='usernameID'
        name='userName'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
      />

      {formik.touched.userName && formik.errors.userName ? (
        <div className='text-red-500'>{formik.errors.userName}</div>
      ) : null}

      <label htmlFor='password' className="block mb-2 text-white">
        Password :
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
        type='submit'
        className='border border-black p-2 mt-5 bg-gray-700 text-white rounded'
      >
        Submit
      </button>

      <button
        type='button'
        onClick={onPrevStep}
        className='border border-black p-2 mt-5 bg-gray-700 text-white rounded'
      >
        Previous
      </button>
    </form>
  );
};

export default NewForm3;


import { useState } from 'react';
import  Input  from './Input';
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface RegisterFormValues {
    [key: string]: string;
    fullName: string;
    email: string;
    password: string;
}

const RegisterForm = () => {
    const navigate = useNavigate();
    const [formData] = useState<RegisterFormValues>({
        fullName: '',
        email: '',
        password: '',
    });

    return (
        <div className="register-page">
            <Formik
                initialValues={formData}
                validationSchema={Yup.object().shape({
                    fullName: Yup.string().required('Full Name is required'),
                    email: Yup.string().email('Invalid email address').required('Email Address is required'),
                    password: Yup.string().required('Password is required').matches(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/, 'Password must be at least 8 characters and alphanumeric'),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    if (Object.keys(values).some((key) => values[key] === '')) {
                        setSubmitting(false);
                    } else {
                        try {
                            const requestOptions = {
                                method: 'POST',
                                body: JSON.stringify({
                                    name: values.fullName,
                                    email: values.email,
                                    password: values.password,
                                }), 
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                               
                            };

                            const response = await fetch('https://mock-api.arikmpt.com/api/user/register', requestOptions);

                            if (response.ok) {
                                const responseData = await response.json();
                                console.log('Registration successful:', responseData);
                                navigate('/login');
                            } else {
                                const errorData = await response.json();
                                console.error('Registration failed:', errorData);
                            }
                        } catch (error) {
                            console.error('Error:', error);
                        }
                    }
                }}

            >
                <Form className='flex flex-col justify-center items-center m-60 bg-gray-800 p-4 rounded-md'>
                    <h1 className='mb-5 text-white'>Register Page</h1>
                    <label htmlFor='name' className='text-white'>
                        Name :
                    </label>
                    <Field as={Input} className="border border-black p-2 w-full mb-4 bg-gray-700 text-white" type="text" id="fullName" name="fullName" placeholder="Fullname" />
                    <ErrorMessage name="fullName" component="span" className="error text-xs text-red-600" />
                    <label htmlFor='email' className='text-white'>
                        Email:
                    </label>
                    <Field as={Input} className="border border-black p-2 w-full mb-4 bg-gray-700 text-white" type="email" id="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="span" className="error text-xs text-red-600" />
                    <label htmlFor='password' className='text-white'>
                        Password:
                    </label>
                    <Field as={Input} className="border border-black p-2 w-full mb-4 bg-gray-700 text-white" type="password" id="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" component="span" className="error text-xs text-red-600" />
                    
                    <button
                    type='submit' className='border border-black p-2 mt-5 bg-gray-700 text-white rounded'>
                        Register
                    </button>
                </Form> 

            </Formik>
               
        </div>
    )
}

export default RegisterForm

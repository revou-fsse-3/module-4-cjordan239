import React, { useState } from 'react';
import { Formik, Form, useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm';


const LoginContainer = () => {

    return (
        <div>

        <LoginForm />

        </div>
    )
}

export default LoginContainer
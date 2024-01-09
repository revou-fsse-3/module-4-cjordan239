import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import NewForm from '../../Components/NewForm';
import NewForm2 from '../../Components/NewForm2';
import NewForm3 from '../../Components/NewForm3';

function HomeContainer() {
    const [currentPage, setNextPage] = useState<number>(0);
    const [formValues, setFormValues] = useState({
      fullName: '',
      email: '',
      dateOfBirth: '',
      streetAdress:'',
      city:'',
      state:'',
      zipCode:'',
      userName:'',
      password:'',
    })
     function handleNextPage() {
      console.log("NEXT BUTTON IS CLICKED")
      setNextPage((currentPage) => {
        if (currentPage === 2) return 2;
        return currentPage + 1;
      });
    }
    function handlePrevPage() {
      console.log("PREVIOUS BUTTON IS CLICKED")
      setNextPage((currentPage) => {
        if (currentPage === 0) return 0;
        return currentPage - 1;
      });
    }

    return (
        <div className="App">
    
          {currentPage === 0 && <NewForm onNextStep={handleNextPage}  />}
          {currentPage === 1 && <NewForm2 onNextStep={handleNextPage} onPrevStep={handlePrevPage} />}
         {currentPage === 2 && <NewForm3 onNextStep={handleNextPage} onPrevStep={handlePrevPage} />}
        </div>
        
      );
    }
    
    export default HomeContainer
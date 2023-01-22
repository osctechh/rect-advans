import { Form, Formik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  
  

  return (
    <div>

      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
            name: '',
            email: '',
            password1: '',
            password2: ''
        }}  
        onSubmit={ (values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
                          .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                          .required('Requerido'),
            email: Yup.string()
                        .email('Revise el formato del correo')
                        .required('Requerido'),
            password1: Yup.string()
                          .min(6, 'minimo 6 caracteres')
                          .required(),
            password2: Yup.string()
                            .oneOf([ Yup.ref('password1')], 'Las contraseñas deben de coincidir')
                            .required()


          })
        }
      >
        { ({handleReset}) => (
          <Form>

            <MyTextInput
              label='Nombre'
              name='name'
              placeholder='Oscar'
            />
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='oscar@algo.com'
            />
            <MyTextInput
              label='Password'
              name='password1'
              type='password'
              placeholder='*****'
            />
            <MyTextInput
              label='Password'
              name='password2'
              type='password'
              placeholder='*****'
            />


            <button type="submit"> Create </button>
            <button type="button" onClick={handleReset}>Reset Form</button>
            
          </Form>
        )}
        
      </Formik>

      


    
    </div>
  )
};

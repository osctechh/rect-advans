import '../styles/styles.css';
import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

  const { formData, onChange, name, email, password1, password2, resetForm } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input type="text"
          placeholder="Name"
          name='name'
          value={name}
          className={`${name.trim().length <= 0 && 'has-error'}`}
          onChange={onChange} />

        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input type="email"
          placeholder="Email"
          name='email'
          value={email}
          onChange={onChange} />

        <input type="password"
          placeholder="Password"
          name='password1'
          value={password1}
          onChange={onChange} />

        <input type="password"
          placeholder="Repeat Password"
          name='password2'
          value={password2}
          onChange={onChange} />

        <button type="submit"> Create </button>
        <button type="button" onClick={resetForm}>Reset Form</button>


      </form>
    </div>
  )
}


import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TLoginFormValues, loginFormSchema } from './loginFormSchema';

import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { UserContext } from '../../../providers/UserContext';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({ resolver: zodResolver(loginFormSchema) });

  const onSubmit: SubmitHandler<TLoginFormValues> = (data) => {
    userLogin(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register('email')}
        label='E-mail'
        id='name'
        error={errors.email}
        type='text'
      />
      <Input
        register={register('password')}
        label='Senha'
        id='password'
        error={errors.password}
        type='password'
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;

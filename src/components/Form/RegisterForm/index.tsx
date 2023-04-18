import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TRegisterFormValues, registerSchema } from './registerSchema';

import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

import { kenzieApi } from '../../../services/api';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({ resolver: zodResolver(registerSchema) });

  const navigate = useNavigate();

  const registerUser = async (data: TRegisterFormValues) => {
    try {
      await kenzieApi.post('/users', data);
      toast.success(
        'Usuário registrado com sucesso, aguarde o redirecionamento!'
      );
      setTimeout(() => {
        navigate('/');
      }, 2600);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const onSubmit: SubmitHandler<TRegisterFormValues> = (data) => {
    registerUser(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register('name')}
        label='Nome'
        id='name'
        error={errors.name}
        type='text'
      />
      <Input
        register={register('email')}
        label='Email'
        id='email'
        error={errors.email}
        type='text'
      />
      <Input
        register={register('password')}
        label='Senha'
        id='passwors'
        error={errors.password}
        type='password'
      />
      <Input
        register={register('confirmPassword')}
        label='Confirme a sua senha'
        id='confirmPassword'
        error={errors.confirmPassword}
        type='password'
      />

      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;

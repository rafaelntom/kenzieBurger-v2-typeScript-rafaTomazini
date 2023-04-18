import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInput {
  id?: string;
  label?: string;
  error?: any;
  register?: any;
  type?: string;
  login?: string;
  password?: string;
}

const Input = ({ id, label, error, register, type }: IInput) => (
  <div>
    <StyledInputContainer>
      <input id={id} {...register} type={type} />
      {label ? <label htmlFor={id}>{label}</label> : null}
    </StyledInputContainer>
    {error ? (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    ) : null}
  </div>
);

export default Input;

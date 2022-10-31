import { ButtonStyled } from './Button.styled';

export default function Button({ labelName, handleClick }) {
  return <ButtonStyled onClick={handleClick}>{labelName}</ButtonStyled>;
}

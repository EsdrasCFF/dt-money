import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0,0,0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({theme}) => theme.COLORS.GRAY_800};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${({theme}) => theme.COLORS.GRAY_900};
      color: ${({theme}) => theme.COLORS.GRAY_300};
      padding: 1rem;

      &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_500};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${({theme}) => theme.COLORS.GREEN_500};
      color: ${({theme}) => theme.COLORS.WHITE};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:hover {
        background: ${({theme}) => theme.COLORS.GREEN_700};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface ITransactionTypeButtonProps { 
  variant: "income" | "outcome"
}

export const TransactionTypeButton = styled(RadioGroup.Item)<ITransactionTypeButtonProps>`
  background: ${({theme}) => theme.COLORS.GRAY_700};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  border: 0;
  color: ${({theme}) => theme.COLORS.GRAY_300};
  cursor: pointer;

  svg {
    color: ${props => props.variant === "income" ? props.theme.COLORS.GREEN_300 : props.theme.COLORS.RED_300}
  }

  &[data-state="unchecked"]:hover {
    background: ${({theme}) => theme.COLORS.GRAY_600};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${({theme}) => theme.COLORS.WHITE};
    background: ${props => props.variant === "income" ? props.theme.COLORS.GREEN_500 : props.theme.COLORS.RED_500};

    svg {
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;
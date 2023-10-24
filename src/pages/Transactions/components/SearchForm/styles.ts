import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({theme}) => theme.COLORS.GRAY_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    padding: 1rem;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_500};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    background: transparent;
    border: 1px solid ${({theme}) => theme.COLORS.GREEN_300};
    color: ${({theme}) => theme.COLORS.GREEN_300};
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: ${({theme}) => theme.COLORS.GREEN_500};
      border: 1px solid ${({theme}) => theme.COLORS.GREEN_500};
      color: ${({theme}) => theme.COLORS.WHITE};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      cursor: pointer;
    }
  }
`;
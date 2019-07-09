import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;

  display: flex;
  flex-direction: row;

  > input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #eee;
    border-radius: 4px;

    font-size: 16px;
  }
`;

const rotate = keyframes`
  from  { transform: rotate(0deg) }
  to  { transform: rotate(360deg) }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #7159c1;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 30px;

  > li {
    padding: 15px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }

    > a {
      color: #7159c1;
    }
  }
`;

import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  border: 2px solid #000;

  label {
    display: flex;
    flex-direction: column;

    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }

  input {
    margin-top: 4px;
    width: 160px;

    &:focus {
      border: 2px solid #286fe0;
      outline: none;
    }
  }
`;

export default Form;

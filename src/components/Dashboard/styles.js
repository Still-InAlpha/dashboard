import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  margin-left: 20px;
  margin-top: 20px;
`

export const Form = styled.form`
  input {
    background: #021114;
    border: 2px solid #26dafd;
    border-radius: 6px;
    color: #26dafd;
    width: 360px;

    margin-left: 10px;
    margin-bottom: 20px;

    ::placeholder {
      opacity: 0.5;
    }
  }

  .label {
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
  }

  #submit {
    margin-left: 150px;
    margin-bottom: 10px;
  }
`

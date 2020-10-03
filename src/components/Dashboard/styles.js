import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 20px;
`

export const Form = styled.form`
  div {
    label:nth-child(3) {
      margin-left: 30px;
    }

    input {
      background: #021114;
      border: 2px solid #26dafd;
      border-radius: 6px;
      color: #26dafd;

      margin-left: 10px;

      ::placeholder {
        opacity: 0.5;
      }
    }
  }
`

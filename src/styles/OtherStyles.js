import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 1% 2%;
  height: 55px;
  background: #312450;
  background-repeat: no-repeat;
  background-attachment: fixed;
  div {
    display: flex;
    justify-content: space-between;
    width: 20rem;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
  }
`;

export const ListingStyle = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  `;

export const CardStyle = styled.div`
  width: 500px;
  height: 700px;
  margin-top: 3%;
  padding: 40px;
  margin-bottom: 5%;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: black;
  text-align: center;
  background: #7D84B2;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 20vh;
    margin-right: 3%;
  }
  h2 {
    text-decoration: underline;
  }
  input {
    margin: 1.5%;
  }
  button {
    margin: 1.5%;
  }
`

export const Button1 = styled.button`
  border-radius: 10px;
  width: 11rem;
`

export const Button2 = styled.button`
  border-radius: 10px;
`

export const Errors = styled.div`
  color: red;
`



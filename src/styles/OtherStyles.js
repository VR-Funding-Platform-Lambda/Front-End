import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 1% 2%;
  height: 55px;
  background: #342450;
  background-repeat: no-repeat;
  background-attachment: fixed;
  a {
    text-decoration: none;
    color: #fff;
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
  height: 600px;
  margin: 2%2rem;
  padding: 40px;
  margin-bottom: 2%;
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
    margin: 1%;
  }
  button {
    margin: 1%;
  }
`
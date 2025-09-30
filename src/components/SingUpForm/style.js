import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f6fa;
`;

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr; /* duas colunas */
  gap: 1rem;
  width: 600px;
  padding: 2rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* em telas pequenas, fica uma coluna só */
    width: 90%;
  }
`;

export const Title = styled.h2`
  grid-column: span 2; /* título ocupa duas colunas */
  margin-bottom: 1rem;
  text-align: center;
  color: #2f3640;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #2f3640;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #dcdde1;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #40739e;
  }
`;

export const Button = styled.button`
  grid-column: span 2; /* botão ocupa duas colunas */
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background: #40739e;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #273c75;
  }
`;

export const LinkForgot = styled.div`
    text-decoration: none;
    cursor: grab;
    font-size: 16px;
    margin-top: 20px;
    color: #555;
    font-weight: 600;
    padding-top: 7px;

    &:hover {
        opacity: 0.6;
    }
`
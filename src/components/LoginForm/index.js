import React, { useState } from "react";
import { useNavigate } from 'react-router';

import { Container, FormWrapper, Title, Input, Button, LinkForgot } from "./style";

export default function LoginForm() {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode adicionar a lógica de autenticação
  };


  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Entrar</Button>
        <LinkForgot onClick={() => navigate('/signup')}> Não tem uma conta? Cadastre-se</LinkForgot>
      </FormWrapper>
    </Container>
  );
};
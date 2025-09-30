import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    Container, 
    FormWrapper, 
    Title, 
    Input, 
    Button, 
    Group, 
    Label,
    LinkForgot 
} from "./style";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    cidade: "",
    estado: "",
    rua: "",
    numero: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de cadastro:", formData);
    // Aqui você pode integrar com API/backend
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Cadastro</Title>

        <Group>
          <Label>Nome completo</Label>
          <Input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </Group>

        <Group>
          <Label>E-mail</Label>
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Group>

        <Group>
          <Label>Senha</Label>
          <Input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </Group>

        <Group>
          <Label>CPF</Label>
          <Input
            type="text"
            name="cpf"
            placeholder="Digite seu CPF"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </Group>

        <Group>
          <Label>Cidade</Label>
          <Input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={formData.cidade}
            onChange={handleChange}
            required
          />
        </Group>

        <Group>
          <Label>Estado</Label>
          <Input
            type="text"
            name="estado"
            placeholder="Estado"
            value={formData.estado}
            onChange={handleChange}
            required
          />
        </Group>

        <Group>
          <Label>Rua</Label>
          <Input
            type="text"
            name="rua"
            placeholder="Rua"
            value={formData.rua}
            onChange={handleChange}
            required
          />
        </Group>

        <Group>
          <Label>Número</Label>
          <Input
            type="text"
            name="numero"
            placeholder="Número da casa"
            value={formData.numero}
            onChange={handleChange}
            required
          />
        </Group>

        <Button type="submit">Cadastrar</Button>
        <LinkForgot onClick={() => navigate('/login')}>Já tem uma conta? Entrar</LinkForgot>
      </FormWrapper>
    </Container>
  );
};


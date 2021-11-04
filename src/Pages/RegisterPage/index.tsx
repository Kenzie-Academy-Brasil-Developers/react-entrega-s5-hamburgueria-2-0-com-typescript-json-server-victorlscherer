import { useHistory } from "react-router";
import {
  Container,
  LoginContainer,
  FormContainer,
  RegisterContainer,
} from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

interface RegisterProps {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

interface DataProps {
  name: string;
  email: string;
  password: string;
  age: number;
}

const RegisterPage = ({
  email,
  password,
  name,
  passwordConfirm,
}: RegisterProps) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8, "Minimo de 8 digitos"),
    age: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleMyForm = (data: DataProps) => {
    axios.post("https://lanchonete-do-victor.herokuapp.com/register", data);

    history.push("/");
  };

  return (
    <Container>
      <RegisterContainer>
        <h3>Cadastrar</h3>
        <FormContainer onSubmit={handleSubmit(handleMyForm)}>
          <input placeholder="Name" {...register("name")}></input>
          <input placeholder="Email" {...register("email")}></input>
          <input placeholder="Senha" {...register("password")}></input>
          <input placeholder="Idade" {...register("age")}></input>
          <button type="submit">Cadastrar</button>
        </FormContainer>
        <LoginContainer>
          <button>Voltar para login</button>
        </LoginContainer>
      </RegisterContainer>
    </Container>
  );
};

export default RegisterPage;

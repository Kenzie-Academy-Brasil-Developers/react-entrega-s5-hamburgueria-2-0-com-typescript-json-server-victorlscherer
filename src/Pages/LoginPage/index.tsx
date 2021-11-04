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
import { AuthContext } from "../../Providers/Auth";
import { useContext } from "react";

interface LoginProps {
  email?: string;
  password?: string;
}

interface DataProps {
  email: string;
  password: string;
}

const LoginPage = ({ email, password }: LoginProps) => {
  const history = useHistory();

  const { signIn } = useContext(AuthContext);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(8, "Mínimo de 8 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleMyForm = (data: DataProps) => {
    signIn(data);
  };

  return (
    <Container>
      <LoginContainer>
        <h3>Login</h3>
        <FormContainer onSubmit={handleSubmit(handleMyForm)}>
          <input placeholder="Email" {...register("email")}></input>
          {errors.email?.message && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}

          <input placeholder="Senha" {...register("password")}></input>
          {errors.password?.message && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <button type="submit">Logar</button>
        </FormContainer>
        <RegisterContainer>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <button onClick={() => history.push("/register")}>Cadastrar</button>
        </RegisterContainer>
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;

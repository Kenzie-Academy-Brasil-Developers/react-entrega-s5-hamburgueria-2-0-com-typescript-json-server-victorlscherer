import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

interface ChildrenProps {
  children: ReactNode;
}

interface UserDataProps {
  email: string;
  password: string;
}

interface ContextProps {
  signIn: (userData: UserDataProps) => void;
  authToken: string;
  logout: () => void;
}

export const AuthContext = createContext<ContextProps>({} as ContextProps);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (userData: UserDataProps) => {
    console.log(userData);

    axios
      .post("https://lanchonete-do-victor.herokuapp.com/login/", userData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/");
      })
      .catch((error) => alert("Usuário não cadastrado"));
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

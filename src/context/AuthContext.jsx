import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [register, setRegister] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const [user, setUser] = useState({});
  const data = {
    user,
    setUser,
    login,
    setLogin,
    register,
    setRegister,
  };
  // console.log("contextUser", user);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useLogingContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;

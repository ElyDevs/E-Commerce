import { Button, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );

      const user = userCredential.user;

      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        placeholder="E-mail"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Mot de passe"
        fontSize={14}
        size={"sm"}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />

      <Button
        onClick={handleLogin}
        isLoading={loading}
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
      >
        Se Connecter
      </Button>

      {error && (
        <Text fontSize={"xs"} color={"tomato"}>
          Adresse e-mail ou mot de passe incorrect !
        </Text>
      )}
    </>
  );
};

export default Login;

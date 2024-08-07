import { Button, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";

const Login = () => {
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setError(true);
        console.error("Login error:", errorCode, errorMessage); // TO REMOVE BABY
      });
  };

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        size={"sm"}
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />

      <Button
        onClick={handleLogin}
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
      >
        Log in
      </Button>

      {error && <Text color={"tomato"}>Wrong email or password!</Text>}
    </>
  );
};

export default Login;

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { auth, db } from "../../firebase/Firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (inputs.password !== inputs.confirmPassword) {
      setError(true);
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );

      const user = userCredential.user;

      // Add user document to Firestore with a more structured format
      await setDoc(doc(collection(db, "users"), user.uid), {
        fullName: inputs.fullName,
        email: inputs.email,
        role: "user",
        contact: {
          phoneNumber: "",
          address1: "",
          address2: "",
          country: "Tunisie",
          city: "",
          postalCode: "",
        },
        createdAt: serverTimestamp(),
      });

      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    } catch (error) {
      setError(true);
      console.error("Error during signup:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        placeholder="Nom complet"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />

      <Input
        placeholder="E-mail"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      {/* Password */}
      <InputGroup>
        <Input
          placeholder="Mot de passe"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h="full">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <VisibilityRoundedIcon />
            ) : (
              <VisibilityOffRoundedIcon />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>

      {/* Confirm Password */}
      <InputGroup>
        <Input
          placeholder="Confirmer le mot de passe"
          fontSize={14}
          type={showConfirmPassword ? "text" : "password"}
          value={inputs.confirmPassword}
          size={"sm"}
          onChange={(e) =>
            setInputs({ ...inputs, confirmPassword: e.target.value })
          }
        />
        <InputRightElement h="full">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <VisibilityRoundedIcon />
            ) : (
              <VisibilityOffRoundedIcon />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
        onClick={handleSignup}
        isLoading={loading}
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
      >
        S'inscrire
      </Button>

      {error && (
        <Text fontSize={"xs"} color={"tomato"}>
          Les mots de passe ne correspondent pas !
        </Text>
      )}
    </>
  );
};

export default Signup;

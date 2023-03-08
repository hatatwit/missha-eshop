import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import LoginForm from "../../components/Auth/LoginForm";

export default function Login() {
  const navigate = useNavigate();
  const [jwt, setJwt] = useContext(UserContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // Save user input data into userData
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  
  // Send user data includes email, pwd to Strapi for authenticating exisited user.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + "/auth/local",
        userData
      );
      setJwt(res.data.jwt);
      console.log("Login successfully!");
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error.message);
    }
  };

  useEffect(() => {
    if (jwt !== null) {
      console.log("New: " + jwt);
      navigate("/?token=" + jwt);
    }
  }, [jwt]);


  return (
    <div className="login">
      <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} userData={userData}/>
    </div>
  );
}

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import RegisterForm from "../../components/Auth/RegisterForm";

export default function Register() {
  const navigate = useNavigate();
  const {jwt, setJwt} = useContext(UserContext);
  const [userData, setUserData] = useState({
    username: "",
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

  // Send user data includes email, pwd, username to Strapi for registering
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + "/auth/local/register",
        userData
      );
      setJwt(res.data);
      console.log("Register successfully!");
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error.message);
    }
  };

  useEffect(() => {
    if (jwt !== null) {
      navigate(`/?token=${jwt.jwt}`);
    }
  }, [jwt]);


  return (
    <div className="register">
      <RegisterForm handleChange={handleChange} handleSubmit={handleSubmit} userData={userData}/>
    </div>
  );
}

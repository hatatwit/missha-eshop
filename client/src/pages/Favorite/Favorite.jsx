import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/AuthContext";

export default function Favorite() {
  const [jwt, setJwt] = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:1337/api/favorite?populate=*", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(response.data);
    };
    fetchData();
  }, [jwt]);

  return <div className="favorite">Favorite</div>;
}

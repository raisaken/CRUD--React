import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import "../css/adduser.css";
import { editUser } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../services/api";

const initialData = {
  name: "",
  email: "",
};
const EditUse = () => {
  const [user, setUser] = useState(initialData);

  const { id } = useParams();
  const navigator = useNavigate(); //similar to useHistory()
  useEffect(() => {
    return () => {
      loaduserData();
    };
  },[]);
  //function that fetch data from the api
  const loaduserData = async () => {
    const response = await fetchData(id);
    setUser(response.data);
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(user)
    console.log(e.target.value);
  };
  const insertUserDetails = async () => {
    await editUser(id, user);
    navigator("/users");
  };
  return (
    <FormGroup className="container" onsubmit={insertUserDetails}>
      <Typography className="label">Edit user</Typography>
      <FormControl style={{ margin: "2%" }}>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name" value={user.name} />
      </FormControl>
      <FormControl style={{ margin: "2%" }}>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <Button variant="contained" color="success">
        Edit
      </Button>
    </FormGroup>
  );
};
export default EditUse;

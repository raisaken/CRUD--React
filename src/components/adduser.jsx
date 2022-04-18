import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "../css/adduser.css";
import { InsertUser } from "../services/api";
import { useNavigate } from "react-router-dom";
const initialData = {
  name: "",
  email: "",
};
const AddUser = () => {
  const [user, setUser] = useState(initialData);
  const { name, email } = user;
  const navigator = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const insertUserDetails = async () => {
    await InsertUser(user);
    navigator("/users");
  };
  return (
    <FormGroup className="container">
      <Typography className="label">Add user</Typography>
      <FormControl style={{ margin: "2%" }}>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl style={{ margin: "2%" }}>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
      </FormControl>
      <Button variant="contained" color="success" onClick={insertUserDetails}>
        Insert
      </Button>
    </FormGroup>
  );
};
export default AddUser;

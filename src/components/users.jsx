import { fetchData } from "../services/api";
import { useEffect, useState } from "react";
import "../css/users.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);

//   console.log(users)

  useEffect(() => {
    return () => {
      getusers();
    };
  }, []);

  const getusers = async () => {
    const response = await fetchData();
    setUsers(response.data);
  };
  return (
    <div className="maindiv">
      <Table className="table">
        <TableHead className="tablehead">
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => {
            //must  use key
            return (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    component={Link}
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    style={{ margin: "2%" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default Users;

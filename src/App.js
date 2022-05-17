import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Main from "./components/main";
import AddUser from "./components/adduser";
import Users from "./components/users";
import Error from "./components/error";
import EditUser from "./components/edit";
function App() {  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

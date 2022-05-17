import axios from "axios";
export const fetchData=async(id)=>{
    id=id||"";
    return await axios.get(`http://localhost:3000/Students/${id}`);
}
export const InsertUser=async (user)=>{
    return await axios.post("http://localhost:3000/Students",user);
}
export const editUser =async(id,user)=>{
    return await axios.put(`http://localhost:3000/Students/${id}`,user);
}
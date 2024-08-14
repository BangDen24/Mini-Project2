import Navbar from "../components/Navbar";
import "./styles/ListUser.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    page :1,
    total_pages : 0,
  });

  const getUser = () => {
    axios
    .get(`https://reqres.in/api/users?page=${pagination.page}`)
    .then((res) => {
      console.log(res);
      setUsers(res.data.data);
      setPagination({
        page: res.data.page,
        total_pages: res.data.total_pages
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
  };


  const handlePage = (page) => {
    setPagination({
      ...pagination,
      page: page,
    })
  }
  
//lifecycle hooks
  useEffect(() =>{
    getUser();
  }, []);

  useEffect(() =>{
    getUser();
  }, [pagination.page]);


  
  // console.log(page);
  
  return (
    <div>
    <Navbar />
    <h1 style={{ color: "black", textAlign: "center" }}>User Lists</h1>
    <table className="user-table">
    <thead>
    <tr>
      <th></th>
      <th><p>Name</p></th>
      <th><p>E-mail</p></th>
    </tr>
    </thead>
    <tbody>
    {users.map((user) =>(
        <tr key={user.id} style={{ textAlign: "center"}}>
          <td><img src={user.avatar} alt="avatar" style={{ width: "100px", height: "100px" }} /></td>
          <td><p>{user.first_name} {user.last_name}</p></td>
          <td><p>{user.email}</p></td>
          </tr>
      ))}
      </tbody>
      </table>
      <div className="pagination">
        <button disabled={pagination.page === 1} onClick={() => handlePage(pagination.page - 1)}>Previous</button>
        <button disabled={pagination.page === pagination.total_pages} onClick={() => handlePage(pagination.page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ListUser;

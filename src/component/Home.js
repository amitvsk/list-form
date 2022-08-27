import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
    const [users, setUser] = useState([]);
    let flag=false
    useEffect(() => {
        if(flag==false){
            loadUsers(); 
            flag=true
        }
       
    }, []);

    const loadUsers = async () => {
     try{   const result = await axios.get("http://localhost:3003/users");
     console.log(result)
        setUser(result.data.reverse());} 
        catch(err){
            console.log(err)
        }
    }


    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>
                <table class="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr >
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mr - 2" exact to={`/users/View/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr - 2" exact to={`/users/Edit/${user.id}`}>Edit</Link>
                                    <div className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Home;


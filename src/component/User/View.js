import React, { useState, useEffect } from "react";
import { Link, usePrarams} from "react-router-dom";
import axios from "axios";

const View = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        number: "",
        gender: "",
        skill: ""
    });
    const { id } = usePrarams();
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">bact to Home</Link>
            <h1 className="display-4">User id: {id} </h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">user name: {user.username}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">number: {user.number}</li>
                <li className="list-group-item">skill: {user.skill}</li>
                <li className="list-group-item">gender: {user.gender}</li>
            </ul>
        </div>
    );
};

export default View;
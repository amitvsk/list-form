import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
    let history = useHistory();
    const {id} = useParams();
    const [ user, setUser ] = useState({
        name: "",
        username: "",
        email: "",
        number: "",
        gender: "",
        skill: ""
    });

    const { name,  username, email, skill, number, gender } = user;
    const onInputChange = e => {
        // console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value});
    };
    useEffect(() => {
        loadUsers();
    }, []);
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/");
    };
    
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };
    return (
        <div className="container">
            <h1>Edit User</h1>
            <form class="row g-4 needs-validation " onSubmit={e => onSubmit(e)} >
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Name:</label>
                    <input type="text" class="form-control" name="name" placeholder="Enter your full name"  onChange={e => onInputChange(e)} value={name} required />
                    
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Skill:</label>
                    <input type="text" class="form-control" name="skill" placeholder="Write your skill"  onChange={e => onInputChange(e)} value={skill} required />
                  
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Username:</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" name="username" placeholder="Enter your username" onChange={e => onInputChange(e)}  value={username} aria-describedby="inputGroupPrepend" required />
                       
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Email:</label>
                    <input type="email" class="form-control" name="email" placeholder="Enter your email" value={email} onChange={e => onInputChange(e)} id="validationCustom03" required />
                   
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Contact No:</label>
                    <input type="number" class="form-control" maxlength="10" name="number" placeholder="Your contact" onChange={e => onInputChange(e)} id="validationCustom03" value={number} required />
                    <div class="invalid-feedback">
                        Please provide a valid Contact Number.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Gender:</label>
                    <select class="form-select" id="validationCustom04" name="gender" value={gender} onChange={e => onInputChange(e)}  required>
                        <option >Male</option>
                        <option>Common</option>
                        <option>Female</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid gender.
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"  id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-warning" type="submit">Update user</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;
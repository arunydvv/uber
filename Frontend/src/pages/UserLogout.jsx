import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const UserLogout = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const navigate = useNavigate();
    axios.get(`${import.meta.env.VITE_API_URL}/user/logout`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem("token");
            navigate("/user/login");
        }
    }).catch((error) => {
        if (error.response) {
            const statusCode = error.response.status;
            if (statusCode === 401) {
                alert("Invalid email or password. Please try again.");
            } else {
                alert("An error occurred. Please try again later.");
            }
        }
    });
    return <ErrorPage/>

}

export default UserLogout
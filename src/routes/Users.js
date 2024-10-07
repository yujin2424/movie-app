import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Users = () => {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            console.log(response.data)
        })
    })
    return (
        <div className='userWrap'>
           <h1>Users</h1> 
        </div>
    );
};

export default Users;
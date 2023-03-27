import React, { useState } from "react";
import styles from "./Form.module.css"
import Validate   from "./validation";

export default function Form (props){
    
    const [userData, setUserData]= useState({
        username:"",
        password: "",
    });

    const [errors, setErrors] = useState({
        username:"",
        password: "",
    })

    const handleInputChange = (event)=> {
        const {name, value} = event.target
        setUserData({
            ...userData,
            [name]: value
        });
        setErrors(
            Validate({
            ...userData,
            [name]: value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)
    }
    
    
    return (

        <form className={styles.container} onSubmit={handleSubmit}>
        <img src="https://i.pinimg.com/originals/d9/f2/1d/d9f21da38ae59658eb2715221d3e35ea.jpg" alt="Rick&Morty" width="250px" />
            <label>UserName </label>
            <input type="text"
                value={userData.username} 
                name="username" 
                onChange={handleInputChange}
                className={errors.username && styles.warning}/>
                {errors.username? <p>{errors.username}</p> : null}

            <label>Password </label>
            <input type="password" 
                value={userData.password} 
                name="password" 
                onChange={handleInputChange}
                className={errors.password && styles.warning}/>
                {errors.password ? <p>{errors.password}</p> : null}

            <button className={styles.boton} type="submit">Login</button>
            
        </form>
    )
}
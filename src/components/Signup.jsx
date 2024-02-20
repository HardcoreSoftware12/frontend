import React, { useEffect, useState } from 'react'
import axios from "axios"

function Signup() {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:""
    })

    const  handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/register",formData)//http://localhost:8000/
            console.log(res.data());
            
        } catch (error) {
            
        }
      

    }



    const handleChange = (e)=>{

        // const data = {
        //     ...formData,
        //     [e.target.name]:e.target.value
        // }
       
    setFormData({ ...formData, [e.target.name]: e.target.value });
       

    }
    // console.log(formData);
   
  return (
    <div className='form-holder'>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} method="post" className='form'>
            <input type="text" name='email' value={formData.email} onChange={handleChange}  placeholder='email' />
            <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='name' />
            <input type="text" name='password' value={formData.password} onChange={handleChange} placeholder='password' />
            
        <input type="submit" placeholder='Submit' className='button' />

        </form>
    </div>
  )
}

export default Signup
import React, { useState } from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import './signup.css'
import { NavLink,useNavigate } from 'react-router-dom';




export default function Signup() {
const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [data, setData] = useState([]);


  const getdata = (e) => {
    const { value, name } = e.target;
    // console.log(value,name)

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const addData = (e) => {
    e.preventDefault();
    console.log(inpval)


    const { name, email, date, password } = inpval;

    if (name === "") {
      alert('Name field is required')
    }
    else if (email === "") {
      alert('email field is required')
    }
    else if (!email.includes("@")) {
      alert('Please enter valid email address')
    }
    else if (password === "") {
      alert('password field is required')
    }
    else if (password.length < 5) {
      alert('password length must be greater than 5')
    }
    else {

      Swal.fire({
        icon: 'success',
        title: 'Successfully Sign Up',
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.setItem("user", JSON.stringify([...data,inpval]));
      navigate("/login")
    }
  }
  

    return (
      <>
<div className="body">
      <div className="done">
        <form>
          <div className="head">
            <span>Sign up</span>
          </div>
          <div className="inputs">
            <input type="name" name='name' onChange={getdata}  placeholder="Enter Your Name" />
            <input type="email" name='email' onChange={getdata} placeholder="Enter email" />
            <input type="password" name='password' onChange={getdata} placeholder="Password"  />
          </div>
          <Button id="button" variant="primary"  onClick={addData} type="submit">
                  Submit
                </Button>
        </form>
        <div className="form-footer">
        <p className='forgotLink'>Already have an account <span><NavLink to="/Login">Sign In</NavLink> </span> </p>
        </div>
      </div>
    </div>

      </>
    )
  }


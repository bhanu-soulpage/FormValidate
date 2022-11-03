import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import Link from 'next/link';

const Login = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const [userInfo , setUserInfo] = useState(null);
      const onSubmit = (data) => {
        setUserInfo(data)
      };
    
    return (
        <div className="container-fluid d-flex flex-row justify-content-center"> 
            <div className="login-form-container  d-flex flex-column justify-content-center mt-4">
            <pre>{JSON.stringify(userInfo,undefined,2)}</pre>

            <form  className="form-content " onSubmit = {handleSubmit(onSubmit)}>
                <div className="container1">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" {...register("username" , {required : "This field is required" , maxLength : {value : 10 , message : "Maximum characters should be ten only!!!"}})} />
                    <p>{errors.username?.message}</p>


                    <label htmlFor="uname"><b>Email</b></label><br/>

                    <input type='email' placeholder="Enter your E-mail Address" {...register('email' , {required : "E-mail cannot be empty" , pattern: {
                        value : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message : "Please check your E-mail",
                    } })} className="p-2" />

                    
                    <p>{errors.email?.message}</p>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" {...register("password",{required : "Password is not entered" , minLength : {value : 8 , message : 'Password must be above 8 characters'}})}/>
                    <p>{errors.password?.message}</p>
                    <button type="submit">Login</button>
                   
                </div>

                <div className="container1">
                    <Link href='/'>
                    <button type="button" className="cancelbtn">Cancel</button>
                    </Link>
                    <Link href='/signup'>{`I don't have an account`}</Link>
                </div>
            </form>
           
        </div>
        </div>
    )
}

export default Login;
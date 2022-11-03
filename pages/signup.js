import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ErrorMessage } from "@hookform/error-message";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const [userInfo, setUserInfo] = useState();
  const [signupErrors, setErrors] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);

    const enteredData = {
      username: data.username,
      email: data.email,
      password: data.password,
      rpassword: data.rpassword,
      mobilenumber: data.mobilenumber,
    };

    // props.onSaveData(enteredData)
    console.log(enteredData);

    if (enteredData.password !== data.rpassword) {
      setUserInfo("You Entered Wrong Credentials");
      setErrors(<p className="text-danger">{`Password did'nt match`}</p>);
    } else {
      // setErrors('')
      setErrors(<p className="text-success">Passwords matched successfully</p>);
    }

    // {alert(JSON.stringify(userInfo , undefined , 2))}
  };

  const onErrors = () => {
    console.log("errors");
  };

  return (
    <div className="container-fluid d-flex flex-row justify-content-center">
      <div className="login-form-container  d-flex flex-column justify-content-center mt-4">
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>

        <form
          className="form-content "
          onSubmit={handleSubmit(onSubmit, onErrors)}
        >
          <div className="container1">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              {...register("username", {
                required: true,
                maxLength: {
                  value: 10,
                  message: "Maximum characters should be ten only!!!",
                },
              })}
            />
            {/* <p>{errors.username?.message}</p> */}
            {errors.username?.type === "required" && "Username is not entered"}

            {errors.username?.type === "maxLength" && errors.username.message}
            <br />

            {/* <ErrorMessage name="username" type="maxLength" errors={errors} render = {({message}) => <p>Maximum characters should be ten only!!!</p>}  /> */}

            <label htmlFor="uname">
              <b>Email</b>
            </label>
            <br />

            <input
              type="email"
              placeholder="Enter your E-mail Address"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please check your E-mail",
                },
              })}
              className="p-2"
              onKeyUp={() => {
                trigger("email");
              }}
            />

            {errors.email?.type === "required" && "E-mail cannot be empty"}
            <p>{errors.email?.message}</p>

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password", {
                required: "Password is not entered",
                minLength: {
                  value: 8,
                  message: "Password must be above 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                  message:
                    "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                },
              })}
              onKeyUp={() => {
                trigger("password");
              }}
            />
            <p>{errors.password?.message}</p>
            <p>{signupErrors}</p>

            <label htmlFor="psw">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("rpassword", {
                required: "Password is not entered",
                minLength: {
                  value: 8,
                  message: "Password must be above 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                  message:
                    "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                },
              })}
              onKeyUp={() => {
                trigger("rpassword");
              }}
            />
            <p>{errors.rpassword?.message}</p>

            <label>
              <b>Phone Number</b>
            </label>
            <input
              type="text"
              placeholder="Enter your Mobile number"
              {...register("mobilenumber", {
                required: true,
                maxLength: {
                  value: 10,
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "This is not a valid number",
                  },
                },
              })}
              onKeyUp={() => {
                trigger("mobilenumber");
              }}
            />

            {errors.mobilenumber?.type === "required" &&
              "Mobile number is required"}
            {errors.mobilenumber?.type === "maxLength" &&
              "Invalid Mobile Number"}
            {/* {errors.username?.message} */}

            <button type="submit">Login</button>
          </div>

          <div className="container1">
            <Link href="/">
              <button type="button" className="cancelbtn">
                Cancel
              </button>
            </Link>
            <Link href="/login">I already have an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

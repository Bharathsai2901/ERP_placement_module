import React from "react";
import Userfront from "@userfront/core";
import "./styles/student_login_new.css";
import { Outlet, Link } from "react-router-dom";
import { render } from "react-dom";
import * as yup from 'yup';
import { useFormik } from "formik";
import {  useState} from 'react';
import { useParams,useHistory  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";
import axios from 'axios';
import { API_URL } from './global_constant';

export function ResetPassword() {

  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
 const { id, token } = useParams();
  const history = useHistory();


 const ResetSchema =
  yup.object({
   password: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/, "Password must be eight characters or more including one uppercase letter,one lowercase letter,one numnber, one special character").required('Password is required'),
   confirmpassword:  yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required")

  });


    const { handleChange, handleSubmit, handleBlur, errors, touched, values } = useFormik({

      initialValues: {
        password: "",
        confirmpassword: ""
      },
       validationSchema: ResetSchema,
      onSubmit: async (values,{resetForm}) => {
setLoading(true)
       const { password } = values;
    try {
      await axios.post(`${API_URL}/resetPassword/${id}/${token}`,
        { password: password })
      resetForm();
      setInfo("Password has been reset Successfully.")
    }
    catch (err)
    {
      setInfo("Invalid Link or Expired")
      setTimeout(() => { history.push("/login") },3500);
    }
setLoading(false)
      }


    })

    return (
        <div>
          <div className="wrapper">
            <div>
              <div className="title">Forgot Password</div>
              <form action="#">
                <div className="field">
                  <input type="text" required />
                  <label>New Password</label>
                </div>
                <div className="field">
                    <input type="password" required />
                    <label>Confirm New Password</label>
                 </div>
                <div className="field">
                <Link to="/Student-login"><input type="submit" value="Confirm password" /></Link>
                </div>
              </form>
            </div>
          </div>
          <Outlet />
        </div>
      );
}
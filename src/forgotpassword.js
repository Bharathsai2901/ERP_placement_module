<<<<<<< HEAD

import React from 'react';
import "./style.css";

export default function App(){
    return(
        
        <div className="box">
            <header className="header">
                <h3>Welcome to IIT Tirupati E-governance portal</h3>
            </header>
            <form className="form">
                <input className="input" type="text" placeholder="Enter Username" /><br />
                <input className="input" type="text" placeholder="Enter Password" /><br />
                <span><button className="button">Login</button></span>
                <span><button className="button">Reset</button></span>
                <h5 id="forgot-pass">Student corner</h5>
            </form>

        </div>
    )
}
=======
import React from "react";

import Userfront from "@userfront/core";
import "./styles/student_login_new.css";
import { Outlet, Link } from "react-router-dom";
import { render } from "react-dom";
import * as yup from 'yup';
import { useFormik } from "formik";
import {  useState } from 'react';
import Loader from "react-loader-spinner";
import axios from 'axios';
import { API_URL } from './global_constant';

export default function Login() {
  function sendalert() {
    alert('Reset link is sent to your mail!');
  }
  const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);
 const ForgetPassSchema =
  yup.object({
   email: yup.string().email().required('Please enter your Email'),

  });

 const { handleChange, handleSubmit, handleBlur, errors, touched, values } = useFormik({

  initialValues: {
   email: ""
  },
  validationSchema: ForgetPassSchema,
   onSubmit: async (values,{resetForm}) => {
     setLoading(true);
     try {
       const { request} = await axios.post(`${API_URL}/resetPassword`, values);
       console.log(request);
       resetForm();
       setInfo("Password Reset Link has been sent to your mail. Please Check it out");
     }
catch(err){
setInfo("The Email you entered does not exist")
     }
 setLoading(false);
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
                <label>Email Address</label>
              </div>
              <div className="field">
              <Link to="/Student-login" ><input type="submit" onClick={sendalert} value="Send reset link" /></Link>
              </div>
            </form>
          </div>
        </div>
        <Outlet />
      </div>
    );
}

// export default function Login ()  {
//   // State variables
//   const [email, setEmail] = useState('');

//   // Functions used by the screen components
//   const doRequestPasswordReset = async function () {
//     // Note that this value come from state variables linked to your text input
//     const emailValue = email;
//     try {
//       await Parse.User.requestPasswordReset(emailValue);
//       alert(`Success! Please check ${email} to proceed with password reset.`);
//       return true;
//     } catch (error) {
//       // Error can be caused by lack of Internet connection
//       alert(`Error! ${error}`);
//       return false;
//     }
//   };

// return (
//     <div>
//       <div className="wrapper">
//         <div>
//           <div className="title">Forgot Password</div>
//           <form action="#">
//             <div className="field">
//               <input type="text" required />
//               <label>Email Address</label>
//             </div>
//             <div className="field">
//             <Link to="/Student-login"><input type="submit" value="Send reset link" /></Link>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

// // Initialize Userfront Core JS
// Userfront.init("demo1234");

// // Define the Password reset form component
// class PasswordResetForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       password: "",
//       passwordVerify: "",
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // Whenever an input changes value, change the corresponding state variable
//   handleInputChange(event) {
//     event.preventDefault();
//     const target = event.target;
//     this.setState({
//       [target.name]: target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     // Verify that the passwords match
//     if (this.state.password !== this.state.passwordVerify) {
//       return;
//     }
//     // Call Userfront.resetPassword()
//     Userfront.resetPassword({
//       password: this.state.password,
//     });
//   }

// render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Password
//             <input
//               name="password"
//               type="password"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             Re-type password
//             <input
//               name="passwordVerify"
//               type="password"
//               value={this.state.passwordVerify}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <button type="submit">Reset password</button>
//         </form>
//       </div>
//     );
//   }
// }

// Initial code
// export default function Login() {
//   return (
//     <div>
//       <div className="wrapper">
//         <div>
//           <div className="title">Forgot Password</div>
//           <form action="#">
//             <div className="field">
//               <input type="text" required />
//               <label>Email Address</label>
//             </div>
//             <div className="field">
//             <Link to="/Student-login"><input type="submit" value="Send reset link" /></Link>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// }
>>>>>>> 0242d3c231d5023d4d8a4529352f34f6bb5a6a18

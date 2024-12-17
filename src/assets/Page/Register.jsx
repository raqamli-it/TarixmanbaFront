// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { FaArrowLeft } from "react-icons/fa";
// // import { FaFacebook } from "react-icons/fa";
// // import { InputMask } from "primereact/inputmask";
// // import { FcGoogle } from "react-icons/fc";
// // import { RiEyeCloseLine } from "react-icons/ri";
// // import { RiEyeLine } from "react-icons/ri";
// // import rasm from '../img/fon2.jpg'
// import { useForm } from "react-hook-form";
// import { DataService } from "../config/dataService";
// import { endpoints } from "../config/endpoints";
import React from 'react'

export default function Register() {
  return (
    <div>Register</div>
  )
}


// function Register() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [serverError, setServerError] = useState('');

//   const onSubmit = async (data) => {
//     setServerError('');
//     try {
//       const response = await DataService.post(endpoints.register, {
//         username: data.username,
//         email: data.email,
//         password: data.password,
//         password2: data.password2,
//       });

//       // Javobdan tokenni oling va localStorage ga saqlang
//       const token = response.data.token;
//       localStorage.setItem('token', token);

//       console.log('Token saqlandi:', token);
//       // Bu yerda muvaffaqiyatli ro'yxatdan o'tishdan keyin qilinadigan ishlarni yozing

//     } catch (error) {
//       console.error(error);
//       setServerError('Ro\'yxatdan o\'tishda xato yuz berdi. Iltimos, qayta urinib ko\'ring.');
//     }
//   };

//   return (
//     <div className="Register">
//       <h2>Ro'yxatdan o'tish shakli</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Username</label>
//           <input {...register('username', { required: true })} />
//           {errors.username && <span>Username majburiy</span>}
//         </div>
//         <div>
//           <label>Email</label>
//           <input {...register('email', { required: true })} />
//           {errors.email && <span>Email majburiy</span>}
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" {...register('password', { required: true })} />
//           {errors.password && <span>Password majburiy</span>}
//         </div>
//         <div>
//           <label>Confirm Password</label>
//           <input type="password" {...register('password2', { required: true })} />
//           {errors.password2 && <span>Confirm Password majburiy</span>}
//         </div>
//         <input type="submit" value="Submit" />
//         {serverError && <p>{serverError}</p>}
//       </form>
//     </div>
//   );

// }

// export default Register;

import { useRef, useState } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { IoEyeOff } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../config/firebase/firebase';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setLoading, loginWithGoogle } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginInfo = { email, password };
    signInUser(email, password)
      .then(userCreadiential => {
        const user = userCreadiential.user;
        if (user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset()
          setLoading(false)
        }
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
    })
  }
  const resetPassRef = useRef()
  const handleResetPassword = () => {
    const email = resetPassRef.current.value;
    if (!email) {
      return Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Please Provide an Valid Email!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    sendPasswordResetEmail(auth,email)
      .then(() => {
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "You have sended a password reset email, Please check your gmail",
          showConfirmButton: false,
          timer: 1500,
        })
      })
      .catch(error => {
      console.log(error)
    })
 }
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col  lg:flex-row">
          <img src={loginImg} alt="" />

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name='email'
                  ref={resetPassRef}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered relative w-full"
                    required
                    name="password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[50%]  right-5 translate-y-[-50%]"
                  >
                    {showPassword ? <IoEyeOutline /> : <IoEyeOff />}
                  </span>
                </div>
                <label className="label">
                  <span onClick={handleResetPassword}  className="label-text-alt link link-hover">
                    Forgot password?
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn bg-[#FF3811]">Login</button>
              </div>
              <div>
                <Link to='/signup'>Don't have account <span className='text-blue-500 underline'>SignUp</span></Link>
              </div>
              <div className="divider">Or</div>
              <div className="form-control mt-6">
                <span onClick={loginWithGoogle} className="btn bg-[#FF3811]">Login With Google</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

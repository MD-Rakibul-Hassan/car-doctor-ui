import { useState } from "react";
import { updateProfile, sendEmailVerification } from "firebase/auth";
import loginImg from "../../assets/images/login/login.svg";
import { IoEyeOff } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { regesterUser, setLoading, loginWithGoogle } = useAuth();
  const navigate = useNavigate()
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const signupInfo = { name, email, password };
    regesterUser(email, password)
      .then(newUser => {
        const user = newUser.user;
        if (user) {
          updateProfile(user, {
            displayName:name
          })
            .then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Regestered Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              sendEmailVerification(user)
                .then(() => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "You have sended verification email,Please verify your email",
                  showConfirmButton: false,
                  timer: 1500,
                });
                  navigate('/login')
              })
              
              form.reset()
              setLoading(false)
            })
          
        }
      })
      .catch(error => {
        console.log(error)
      setLoading(false)
    })
  };
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col  lg:flex-row">
          <img src={loginImg} alt="" />

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
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
               
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#FF3811]">
                  SignUp
                </button>
              </div>
              <div>
                <Link to="/login">
                  have account{" "}
                  <span className="text-blue-500 underline">Login</span>
                </Link>
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

export default SignUp;

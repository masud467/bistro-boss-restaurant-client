import { useContext, useEffect,  useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogIn from "../../Components/SocialLogIn/SocialLogIn";

const Login = () => {
  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname ||"/"
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Good job!",
        text: "User Logged Successfully!",
        icon: "success"
      });
      navigate(from,{replace:true})
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    // console.log(user_captcha_value)
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      Swal.fire({
        title: "Good job!",
        text: "Captcha Matched!",
        icon: "success",
      });
    } else {
      setDisabled(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Captcha Does Not Match!",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                onBlur={handleValidateCaptcha}
                  type="text"
                 
                  name="captcha"
                  placeholder="type the captcha"
                  className="input input-bordered"
                  required
                />
                {/* <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button> */}
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center text-xl font-medium mb-4">
              <small>
                New here?{" "}
                <Link className="underline text-blue-600" to="/signup">
                  Create a New Account
                </Link>
              </small>
            </p>
            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

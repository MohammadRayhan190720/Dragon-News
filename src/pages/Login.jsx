import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const { userSignIn , setUser} = useContext(AuthContext)

  const[success,setSucess] = useState('');
  const[errorMessage,setErrorMessage] = useState('')

  const handleLogin = e =>{
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log( email, password);

    //clear success and error messages

    setSucess('')
    setErrorMessage('')

    userSignIn(email, password)
    .then((result) =>{
      const user = result.user;
      setUser(user);
      setSucess("successfully logged in");
    })
    .catch((error) =>{
      const err = error.message;
      setErrorMessage(err)
    })


  }
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 rounded-none">
      <h2 className="font-semibold text-2xl text-center">Login Your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
       <div>
        {
          success && <p className=" font-bold text-green-600">{success}</p>
        }
        {
          errorMessage && <p className=" font-bold text-red-600">{errorMessage}</p>
        }
       </div>
        <p className="text-center">New in this account ? please <Link className="text-red-500 font-bold underline" to='/auth/register'>Registar</Link></p>
      </div>
    </div>
  );
};

export default Login;
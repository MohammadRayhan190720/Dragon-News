import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const{ creatNewUser , setUser } = useContext(AuthContext);

  const handleRegisterForm = (e) =>{
    e.preventDefault();

    //get form data

    const form = new FormData(e.target);
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name,email,password);

    creatNewUser(email,password)
    .then((result) =>{
      const user = result.user;
      setUser(user)
    })
    .catch((error) =>{
      console.log(error.message)
    })
  }


  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 rounded-none">
        <h2 className="font-semibold text-2xl text-center">
          Resgister Your Account
        </h2>
        <form onSubmit={handleRegisterForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo-url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
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

          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center">
          Already Have an account ? please{" "}
          <Link className="text-red-500 font-bold underline" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 rounded-none">
      <h2 className="font-semibold text-2xl text-center">Login Your Account</h2>
        <form className="card-body">
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
        <p className="text-center">New in this account ? please <Link className="text-red-500 font-bold underline" to='/auth/register'>Registar</Link></p>
      </div>
    </div>
  );
};

export default Login;
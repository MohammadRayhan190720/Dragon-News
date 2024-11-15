import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-lg">Login With</h2>

      <div className="*:w-full space-y-2">
        <button className="btn border rounded-xl">
          {" "}
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn border rounded-xl">
          {" "}
          <FaGithub />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

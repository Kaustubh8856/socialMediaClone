import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quam nihil dicta facere soluta quaerat error veritatis molestiae
            recusandae, explicabo velit magni corrupti hic ex qui, vel
            temporibus numquam non cum quae ullam voluptatum perspiciatis
            expedita. Impedit, perferendis dicta! Quo nostrum dignissimos vitae?
            Qui unde nesciunt odit id dolores. Beatae!
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

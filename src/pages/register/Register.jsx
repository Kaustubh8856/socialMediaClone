import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>LAMA SOCIAL.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quam nihil dicta facere soluta quaerat error veritatis molestiae
            recusandae, explicabo velit magni corrupti hic ex qui, vel
            temporibus numquam non cum quae ullam voluptatum perspiciatis
            expedita. Impedit, perferendis dicta! Quo nostrum dignissimos vitae?
            Qui unde nesciunt odit id dolores. Beatae!
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login Here</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

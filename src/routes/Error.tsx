import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Error;

import error from "../assets/images/error.png";
import "../css/error.css";

const Error = () => {
  return (
    <>
      <img src={error} alt="error" />
      <h2>Page not Found</h2>
    </>
  );
};
export default Error;

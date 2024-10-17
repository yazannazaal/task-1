import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="fix-height text-center">
      <h1 className="text-4xl text-red-500 mb-5 font-bold mt-10">
        404 - Page Not Found
      </h1>
      <Link
        to={`/`}
        className="bg-red-800  text-white font-semibold py-2 px-4 rounded hover:bg-red-300 transition duration-200"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;

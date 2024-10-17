import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

const DetailsPage = () => {
  // catch the post id from url
  let { id } = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  async function getPost() {
    try {
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setPost(data);
    } catch (error) {
      setError("Failed to fetch post details. Please try again later.");
      console.log(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  if (!post) {
    return <div className="fix-height">Loading...</div>;
  }

  return (
    <div className="fix-height">
      {error ? (
        <div>There is an error: {error}</div>
      ) : (
        <>
          <div className="container mx-auto p-5 bg-slate-50 rounded-lg shadow-lg mt-10">
            <h2 className="text-xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-700 mb-6">{post.body}</p>

            {/* back button */}
            <Link
              to={"/posts"}
              className="bg-slate-900 text-white py-2 px-4 rounded hover:bg-slate-600 transition duration-200"
            >
              Back
            </Link>
            {/* //back button */}
            {/* icons */}
            <div className="flex justify-start gap-4 mt-6">
              <AiOutlineLike size={25} className="cursor-pointer" />
              <FaRegComment size={25} className="cursor-pointer" />
            </div>
            {/* //icons */}
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPage;

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [error, setError] = useState(null);
  const reference = useRef(null);

  async function getPosts() {
    try {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data.slice(0, 30));
      setFilteredPosts(data.slice(0, 30));
    } catch (e) {
      setError("Failed to fetch posts. Please try again later.");
      console.log(e);
    }
  }

  useEffect(() => {
    reference.current.focus();
    getPosts();
  }, []);

  // function for handling the change of input field
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  // get the posts for each page using the idx of first & last post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // function for changing the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-5 fix-height">
      {/* search input */}
      <input
        ref={reference}
        type="text"
        placeholder="Search for posts by title..."
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 mb-4 rounded w-full"
      />
      {/* //search input */}

      {/* checking for error  */}
      {error ? (
        <div className="text-red-500 text-center mb-4">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* check the current posts variable */}
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                >
                  <h2 className="font-bold text-xl mb-2 line-clamp-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 line-clamp-3 mb-5">{post.body}</p>
                  <Link
                    to={`/details/${post.id}`}
                    className="bg-slate-900 text-white font-semibold py-2 px-4 rounded hover:bg-slate-600 transition duration-200"
                  >
                    See Details
                  </Link>
                </div>
              ))
            ) : (
              // if the current posts variable empty
              <p className="text-center text-gray-500 col-span-full">
                No posts found.
              </p>
            )}
          </div>

          {/* pagination */}
          <Pagination
            currentPage={currentPage}
            totalPosts={filteredPosts.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
          />
          {/* //pagination */}
        </>
      )}
    </div>
  );
};

export default SearchPage;

const Pagination = ({ currentPage, totalPosts, postsPerPage, paginate }) => {
  // total # of pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // create array for the total number of pages
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex items-center justify-center mt-2 mb-3">
      {pages.map((page) => (
        <div
          key={page}
          onClick={() => paginate(page)}
          className={`mx-1 px-3 py-2 border rounded-lg cursor-pointer transition duration-200 ${
            currentPage === page
              ? "bg-slate-900 text-white"
              : "border-slate-300 hover:bg-slate-600 hover:text-white"
          }`}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;

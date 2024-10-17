import { Link } from "react-router-dom";
import socialImg from "../assets/images/img2.png";

const BioSection = () => {
  return (
    <div className="mt-8">
      {/* title */}
      <section className="border-b border-gray-950 pb-5 w-1/2 mx-auto">
        <h1 className="text-center text-5xl">Bio</h1>
      </section>
      {/* //title */}
      <section className="flex justify-center items-stretch pt-5 w-2/3 flex-col xl:w-1/2 lg:flex-row mx-auto gap-10 mt-5">
        {/* image section */}
        <section className="flex-shrink-0 hidden lg:block h-[300px]">
          <img
            className="h-full object-cover"
            src={socialImg}
            alt="social image"
          />
        </section>
        {/* // image section */}

        {/* text sections */}
        <section className="flex-1 h-[300px] flex items-center  p-4">
          <p>
            Discover a platform designed to make accessing and displaying data
            from JSONPlaceholder simple and efficient. Our site is perfect for
            users who want to explore dynamic posts in a user-friendly
            environment. With easy navigation and real-time data.
          </p>
        </section>

        <section className="flex-1 h-[300px] flex items-center p-4">
          <p>
            We focus on providing valuable insights by utilizing API
            integration, offering the best in performance and functionality. As
            we continue to grow, our goal is to enhance features, bringing you
            more interactive tools and engaging content.
          </p>
        </section>
        {/* //text sections */}
      </section>

      <div className="flex justify-center mt-8">
        <Link
          to={"/posts"}
          className="bg-slate-900 text-white font-semibold py-2 px-4 rounded hover:bg-slate-600 transition duration-200"
        >
          Explore Posts
        </Link>
      </div>
    </div>
  );
};

export default BioSection;

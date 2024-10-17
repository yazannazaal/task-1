import groupImg from "../assets/images/group.jpg";
import teamImg from "../assets/images/teamwork-3213924_640.jpg";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full gap-8 mx-auto my-10 max-w-screen-xl px-4 overflow-hidden">
      {/* first section */}
      <div className="flex flex-col md:flex-row w-full gap-8">
        <figure className="rounded-lg shadow-lg overflow-hidden md:w-1/3">
          <img
            src={groupImg}
            alt="group"
            className="object-cover w-full h-80 md:h-full"
          />
        </figure>
        <section className="flex-1 bg-[#fff] rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h1>
          <p className="text-gray-700 leading-relaxed">
            We are a dedicated platform that simplifies the process of accessing
            and displaying data from JSONPlaceholder. Our goal is to provide
            users with an engaging and intuitive experience as they explore
            various posts and insights. Whether you are a developer
            experimenting with APIs or a curious user seeking information, our
            website offers a seamless interface designed for your needs.
          </p>
        </section>
      </div>
      {/* second section */}
      <div className="flex flex-col md:flex-row w-full gap-8">
        <section className="flex-1 bg-gray-100 rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Technologies We Use
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We leverage cutting-edge technologies to deliver a fast and
            responsive user experience. Our platform is built using modern tools
            such as React.js for the frontend, Tailwind CSS for styling, and we
            integrate public APIs like JSONPlaceholder to provide real-time data
            access. By utilizing these technologies, we ensure a smooth and
            reliable experience for our users.
          </p>
        </section>
        <figure className="rounded-lg shadow-lg overflow-hidden md:w-1/3">
          <img
            src={teamImg}
            alt="technologies we use"
            className="object-cover w-full h-80 md:h-full"
          />
        </figure>
      </div>
    </div>
  );
};

export default AboutPage;

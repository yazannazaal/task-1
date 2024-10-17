import backgroundImage from "../assets/images/download.png";

const HeroSection = () => {
  return (
    <main
      className="h-screen w-full relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* hero section */}
      <section className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Discover the Stories Behind Every Click
        </h2>
        <h2 className="text-xl text-white text-center">
          Explore, Search, and Learn from the World of Information.
        </h2>
      </section>
      {/* // hero section */}
    </main>
  );
};

export default HeroSection;

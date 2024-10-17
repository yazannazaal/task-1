const Footer = () => {
  return (
    <footer className="bg-slate-200 flex justify-around items-start mt-4 py-5">
      <section>
        <h1 className="text-2xl text-[rgb(11,24,24)]">Task.1</h1>
      </section>
      <section className="flex flex-col gap-4 items-start text-[rgb(10,35,35)]">
        <h3 className="pb-5 text-xl font-normal">Legal</h3>
        <button>Privacy Policy</button>
        <button>Terms & Conditions</button>
        <button>Refund Policy</button>
      </section>
      <section className="flex gap-4 items-start flex-col text-[rgb(10,35,35)]">
        <h3 className="pb-5 text-xl font-normal ">Contact</h3>
        <p>500 Terry Francine Street</p>
        <p>123-456-7890</p>
        <p>info@mysite.com</p>
      </section>
    </footer>
  );
};

export default Footer;

const ContactPage = () => {
  return (
    <div className="container bg-[#fff] mx-auto p-5 my-10 w-2/3 ">
      <div className="pt-5 px-10 ">
        {/* title */}
        <h1 className="text-[#222] font-medium text-3xl">Contact US</h1>
        {/* text section */}
        <div className="bg-[#e5fadc] p-5 border-l-8 border-[#bbdaaf] mt-5">
          <p className="text-[#333] text-sm">
            Live Chat is the <u className="cursor-pointer">fastest way</u> to
            directly get in touch with us. (Click the round green button in the
            bottom right of any page - including this one)
          </p>
        </div>
        {/* 2nd text section */}
        <div className="bg-[#e5fadc] p-5 border-l-8 border-[#bbdaaf] mt-5">
          <p className="text-[#333] text-sm">
            Or feel free to reach out via email at the end of page any time.
          </p>
        </div>
        <p className="text-[#333] text-sm pb-12 pt-7">
          We typically respond very quickly over email (90% of customers hear
          back within a few hours). If you do not hear back, we might be blocked
          or in your spam folder.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

const Footer = () => {
  return (
    <>
      <div className="flex-col py-20 flex md:flex-row justify-around items-center font-rubik cursor-pointer bg-blue-950 ">
        <div className="flex flex-col md:flex-row gap-10">
          <span>
            <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg" />
          </span>
          <div className="flex flex-col md:flex-row gap-10 items-center tracking-[1.6px] uppercase text-gray-400">
            <span className="hover:text-red-400">Features</span>
            <span className="hover:text-red-400">Download</span>
            <span className="hover:text-red-400">FAQ</span>
          </div>
        </div>
        <div className="flex gap-10 mt-10 md:mt-0">
          <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-facebook.svg" />
          <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-twitter.svg" />
        </div>
      </div>
    </>
  );
};

export default Footer;

const Hero = () => {
  return (
    <>
      <div className="flex-col-reverse lg:flex-row w-[90vw] mx-auto mt-20 flex justify-around items-center ">
        <div className="md:w-[80%] text-center lg:text-left lg:w-[40%] mx-auto">
          <div className="">
            <span className="font-bold text-4xl lg:text-6xl">
              A Simple Bookmark Manager
            </span>
            <p className="text-gray-400 mt-10 text-xl lg:text-2xl">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          <div className="flex justify-center lg:justify-normal mt-10 font-semibold">
            <button className="rounded text-white bg-blue-600 p-4 cursor-pointer hover:bg-white hover:text-blue-600 border-2 border-blue-600">
              Get It On Chrome
            </button>
            <button className="rounded bg-gray-300 p-4 cursor-pointer ml-4  hover:bg-white hover:text-gray-500 border-2 border-gray-300">
              Get It On FireFox
            </button>
          </div>
        </div>
        <div className=" lg:w-[45%]">
          <img
            className="lg:w-[500px]"
            src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
          />
        </div>
      </div>

      {/* Features */}

      <div className="mt-20 w-[90vw] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl font-bold text-center">
            Download the Extension
          </span>
          <p className="text-gray-400 mt-5 md:w-[45vw] text-center">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly mt-20">
          <div className="py-14 px-8 flex flex-col text-center gap-2 shadow-md shadow-gray-400">
            <div className="flex justify-center">
              <img
                className="w-[100px]"
                src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg"
              />
            </div>

            <span className="mt-5 font-extrabold text-xl tracking-wide">
              Add To Chrome
            </span>
            <p className="text-gray-400 font-semibold text-sm">
              Minimum Verrsion 62
            </p>
            <p className="mt-4 border-b-2 border-blue-600 border-dotted tracking-widest"></p>
            <button className=" mt-4 bg-blue-600 text-white p-4 rounded-xl font-semibold px-10 hover:bg-white hover:text-blue-600 border-2 border-blue-600">
              Add & Install Extension
            </button>
          </div>
          <div className="py-16 px-8 flex flex-col text-center gap-2 shadow-md shadow-gray-400">
            <div className="flex justify-center">
              <img
                className="w-[100px]"
                src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg"
              />
            </div>

            <span className="mt-5 font-extrabold text-xl tracking-wide">
              Add To FireFox
            </span>
            <p className="text-gray-400 font-semibold text-sm">
              Minimum Verrsion 55
            </p>
            <p className="mt-4 border-b-2 border-blue-600 border-dotted tracking-widest"></p>
            <button className=" mt-4 bg-blue-600 text-white p-4 rounded-xl font-semibold px-10 hover:bg-white hover:text-blue-600 border-2 border-blue-600">
              Add & Install Extension
            </button>
          </div>
          <div className="py-14 px-8 flex flex-col text-center gap-2 shadow-md shadow-gray-400">
            <div className="flex justify-center">
              <img
                className="w-[100px]"
                src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg"
              />
            </div>

            <span className="mt-5 font-extrabold text-xl tracking-wide">
              Add To Opera
            </span>
            <p className="text-gray-400 font-semibold text-sm">
              Minimum Verrsion 46
            </p>
            <p className="mt-4 border-b-2 border-blue-600 border-dotted tracking-widest"></p>
            <button className=" mt-4 bg-blue-600 text-white p-4 rounded-xl font-semibold px-10 hover:bg-white hover:text-blue-600 border-2 border-blue-600">
              Add & Install Extension
            </button>
          </div>
        </div>
        {/* Asked */}
        <div className="text-center mt-20 w-[90vw] mx-auto ">
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-3xl md:text-4xl">
              Frequently Asked Questions
            </span>
            <p className="md:w-[70vw] lg:w-[35vw] text-lg mt-5">
              Here are some of our FAQs. If you have any other questions you'd
              like answered please feel free to email us.
            </p>
          </div>
          <div className="md:w-[45vw] mx-auto items-start flex flex-col mt-10">
            <details className="p-4 ">
              <summary className="text-left cursor-pointer hover:text-red-500 text-gray-500">
                What is Bookmark?
              </summary>
              <p className="text-left mt-2 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </details>
            <p className="border-2 w-full "></p>
            <details className="p-4">
              <summary className="text-left cursor-pointer hover:text-red-500 text-gray-500">
                How can I request a new browser?
              </summary>
              <p className="text-left mt-2 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </details>
            <p className="border-2 w-full "></p>
            <details className="p-4">
              <summary className="text-left cursor-pointer hover:text-red-500 text-gray-500">
                Is ther a mobile app?
              </summary>
              <p className="text-left mt-2 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </details>
            <p className="border-2 w-full "></p>
            <details className="p-4">
              <summary className="text-left cursor-pointer hover:text-red-500 text-gray-500">
                What about other Chromium browsers
              </summary>
              <p className="text-left mt-2 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </details>
            <p className="border-2 w-full "></p>
          </div>
        </div>
      </div>
      <div className="mt-48 bg-blue-500 text-white">
        <div className="flex flex-col md:justify-center items-center p-20 md:p-52 ">
          <span className="w-[90vw] mb-5 tracking-wider text-center text-lg lg:text-xl uppercase">
            35,000+ Already Joined
          </span>
          <span className="w-[90vw] md:w-[65vw] text-4xl font-bold lg:w-[35vw] text-center">
            Stay up-to-date with what we're doing
          </span>
          <div className="mt-8 lg:mt-5 flex flex-col justify-center md:flex-row gap-4">
            <div>
              <input
                className="px-10 py-3 text-left rounded-xl text-black"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="text-center md:w-[22vw] lg:w-full">
              <button className="bg-red-500 py-3 px-10 rounded-xl font-semibold hover:bg-red-400">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

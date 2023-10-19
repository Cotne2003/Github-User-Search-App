import "./App.css";
import sun from "/icon-sun.svg";
import search from "/icon-search.svg";
import location from "/icon-location.svg";
import website from "/icon-website.svg";
import twitter from "/icon-twitter.svg";
import company from "/icon-company.svg";

function App() {
  return (
    <div className="w-[73rem] max-lg:w-[57.3rem] mx-auto mt-[4rem] mb-[4rem] max-md:w-[32.7rem]  max-lg:mt-[2rem]  max-md:mt-[1rem]">
      <header className="flex justify-between items-center">
        <h2 className="text-[2.6rem] font-bold">devfinder</h2>
        <div className="flex items-center gap-[1.6rem]">
          <span className="uppercase font-bold">light</span>
          <img src={sun} alt="" />
        </div>
      </header>

      <div className="w-full relative bg-[#1E2A47] rounded-[1.5rem] mt-[5.8rem] max-md:mt-[3.5rem] max-lg:mt-[3.5rem]">
        <input
          type="search"
          placeholder="Search GitHub username…"
          className="w-full bg-inherit py-[2.2rem] pl-[8rem] rounded-[1.5rem] placeholder:text-[1.8rem] placeholder:leading-[2.5rem] placeholder:text-white caret-[#0079FF] text-[1.8rem] leading-[2.5rem] outline-none max-md:placeholder:text-[1.3rem] max-md:pl-[4.5rem] max-md:pt-[1.8rem] max-md:pb-[1.7rem]"
        />
        <img
          src={search}
          alt=""
          className="absolute left-[3.2rem] top-[2.3rem] max-md:left-[1.6rem] max-md:top-[2rem]"
        />
        <button className="pt-[1.25rem] pb-[1.35rem] px-[2.5rem] bg-[#0079FF] rounded-[1rem] text-[1.6rem] font-bold absolute top-[.95rem] right-[1rem] max-md:px-[1.6rem] max-md:py-[1.25rem] max-md:top-[.65rem] max-md:text-[1.4rem] ">
          Search
        </button>
      </div>

      <main className="bg-[#1E2A47] mt-[2.4rem] rounded-[1.5rem] px-[4.8rem] py-[4.8rem] max-md:pt-[3.2rem] max-md:px-[2.4rem] max-md:mt-[1.6rem]">
        <div className="flex gap-[3.7rem]">
          <img
            src={sun}
            alt=""
            className="w-[11.7rem] h-[11.7rem] max-lg:hidden"
          />
          <div className="w-full">
            <div className="flex max-lg:gap-[4.1rem] max-md:gap-[1.95rem]">
              <img
                src={sun}
                alt=""
                className="w-[11.7rem] h-[11.7rem] lg:hidden max-md:w-[7rem] max-md:h-[7rem]"
              />
              <div className="flex max-lg:flex-col lg:justify-between w-full">
                <div>
                  <h1 className="font-bold text-[2.6rem] max-md:text-[1.6rem]">
                    The Octocat
                  </h1>
                  <p className="text-[1.6rem] text-[#0079FF] max-md:text-[1.3rem]">
                    @octocat
                  </p>
                </div>
                <p className="text-[1.5rem] leading-[3.5rem] max-md:text-[1.3rem]">
                  Joined 25 Jan 2011
                </p>
              </div>
            </div>
            <p className="text-[1.5rem] leading-[2.5rem] mt-[2rem] max-md:text-[1.3rem]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
            <div className="bg-[#141D2F] rounded-[1rem] mt-[3.2rem] pl-[3.2rem] pt-[1.5rem] pb-[1.7rem] pr-[8.3rem] flex justify-between max-md:pt-[1.8rem] max-md:pr-[1.4rem] max-md:pb-[1.9rem] max-md:pl-[1.5rem] max-md:mt-[2.3rem]">
              <div>
                <h2 className="text-[1.3rem] max-md:text-[1.1rem]">Repos</h2>
                <p className="text-[2.2rem] font-bold max-md:text-[1.6rem]">
                  8
                </p>
              </div>
              <div>
                <h2 className="text-[1.3rem]  max-md:text-[1.1rem]">
                  Followers
                </h2>
                <p className="text-[2.2rem] font-bold  max-md:text-[1.6rem]">
                  3938
                </p>
              </div>
              <div>
                <h2 className="text-[1.3rem]  max-md:text-[1.1rem]">
                  Following
                </h2>
                <p className="text-[2.2rem] font-bold  max-md:text-[1.6rem]">
                  9
                </p>
              </div>
            </div>
            <div className="flex justify-between pr-[5.1rem] mt-[3.7rem] max-md:mt-[2.4rem] max-md:flex-col max-md:gap-[1.6rem]">
              <div>
                <div className="flex gap-[1.9rem] items-center">
                  <img
                    src={location}
                    alt=""
                    className="w-[2rem] max-md:w-[1.6rem] max-md:h-[1.6rem]"
                  />
                  <p className="text-[1.5rem] max-md:text-[1.3rem]">
                    San Francisco
                  </p>
                </div>
                <div className="flex mt-[1.9rem] gap-[1.9rem] max-md:mt-[1.6rem] items-center">
                  <img
                    src={website}
                    alt=""
                    className="w-[2rem] max-md:w-[1.6rem]  max-md:h-[1.6rem]"
                  />
                  <p className="text-[1.5rem] max-md:text-[1.3rem]">
                    https://github.blog
                  </p>
                </div>
              </div>
              <div>
                <div className="flex gap-[1.9rem] items-center">
                  <img
                    src={twitter}
                    alt=""
                    className="w-[2rem] max-md:w-[1.6rem] max-md:h-[1.6rem]"
                  />
                  <p className="text-[1.5rem]  max-md:text-[1.3rem]">
                    Not Available
                  </p>
                </div>
                <div className="flex mt-[1.9rem] gap-[1.9rem]  max-md:mt-[1.6rem] items-center">
                  <img
                    src={company}
                    alt=""
                    className="w-[2rem] max-md:w-[1.6rem] max-md:h-[1.6rem]"
                  />
                  <p className="text-[1.5rem]  max-md:text-[1.3rem]">@github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

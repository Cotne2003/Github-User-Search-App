import "./App.css";
import sun from "/icon-sun.svg";
import moon from "/icon-moon.svg";
import search from "/icon-search.svg";
import location from "/icon-location.svg";
import website from "/icon-website.svg";
import twitter from "/icon-twitter.svg";
import company from "/icon-company.svg";
import { useEffect, useState } from "react";
import axios from "axios";

interface DATA {
  avatar_url: string;
  bio: null;
  blog: string;
  company: string;
  created_at: string;
  email: null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null;
  type: string;
  updated_at: string;
  url: string;
}

function App() {
  useEffect(() => {
    getUser("octocat");
  }, []);

  const [light, setLight] = useState(true);
  document.body.style.backgroundColor = light ? "#F6F8FF" : "#141d2f";
  const [userName, setUserName] = useState<null | string>(null);
  const [userData, setUserData] = useState<DATA | null>(null);
  const [errMessage, setErrMessage] = useState<null | string>(null);

  const getUser = async (name: string | null) => {
    if (name === null) {
      return;
    }
    try {
      const user = await axios.get(`https://api.github.com/users/${name}`);
      setUserData(user.data);
      setErrMessage(null);
    } catch (err) {
      setErrMessage(err ? "No results" : null);
    }
  };

  return (
    <div className="w-[73rem] max-lg:w-[57.3rem] mx-auto mt-[4rem] mb-[4rem] max-md:w-[32.7rem]  max-lg:mt-[2rem]  max-md:mt-[1rem]">
      <header className="flex justify-between items-center">
        <h2
          className="text-[2.6rem] font-bold"
          style={light ? { color: "#222731" } : { color: "white" }}
        >
          devfinder
        </h2>
        <div
          className={`flex items-center gap-[1.6rem] cursor-pointer light-dark-mode`}
          onClick={() => setLight(!light)}
        >
          <span
            className={`uppercase font-bold ${
              light ? "text-[#697C9A] light" : "text-white dark"
            }`}
          >
            light
          </span>
          <img
            src={light ? moon : sun}
            alt=""
            className={`${light ? "light-img" : "dark-img"}`}
          />
        </div>
      </header>

      <div
        className="w-full relative rounded-[1.5rem] mt-[5.8rem] max-md:mt-[3.5rem] max-lg:mt-[3.5rem] duration-300 ease"
        style={
          light
            ? {
                background: "#FEFEFE",
                boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
              }
            : { background: "#1E2A47" }
        }
      >
        <input
          type="search"
          placeholder="Search GitHub username…"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          className={`w-full bg-inherit py-[2.2rem] pl-[8rem] rounded-[1.5rem] placeholder:text-[1.8rem] placeholder:leading-[2.5rem] ${
            light ? "placeholder:text-[#4B6A9B]" : "placeholder:text-white"
          } caret-[#0079FF] text-[1.8rem] leading-[2.5rem] outline-none max-md:placeholder:text-[1.3rem] max-md:pl-[4.5rem] max-md:pt-[1.8rem] max-md:pb-[1.7rem] max-md:text-[1.3rem]`}
          style={light ? { color: "#222731" } : { color: "white" }}
        />
        <img
          src={search}
          alt=""
          onClick={() => getUser(userName)}
          className="absolute left-[3.2rem] top-[2.3rem] max-md:left-[1.6rem] max-md:top-[2rem] cursor-pointer"
        />
        <button
          className="pt-[1.25rem] pb-[1.35rem] px-[2.5rem] bg-[#0079FF] rounded-[1rem] text-[1.6rem] font-bold absolute top-[.95rem] right-[1rem] max-md:px-[1.6rem] max-md:py-[1.25rem] max-md:top-[.65rem] max-md:text-[1.4rem] active:bg-[#60ABFF] hover:bg-[#9dcbffab] duration-150"
          onClick={() => getUser(userName)}
        >
          Search
        </button>
        <span className="absolute text-[#F74646] text-[1.5rem] font-bold top-[2.4rem] right-[14rem] max-md:text-[1.3rem] max-md:left-[4.5rem] max-md:top-[-2rem]">
          {errMessage}
        </span>
      </div>

      <main
        className="mt-[2.4rem] rounded-[1.5rem] px-[4.8rem] py-[4.8rem] max-md:pt-[3.2rem] max-md:px-[2.4rem] max-md:mt-[1.6rem] duration-300 ease"
        style={
          light
            ? {
                background: "#FEFEFE",
                boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
              }
            : { background: "#1E2A47" }
        }
      >
        <div className="flex gap-[3.7rem]">
          <img
            src={userData?.avatar_url}
            alt=""
            className="w-[11.7rem] h-[11.7rem] max-lg:hidden rounded-[50%]"
          />
          <div className="w-full">
            <div className="flex max-lg:gap-[4.1rem] max-md:gap-[1.95rem]">
              <img
                src={userData?.avatar_url}
                alt=""
                className="w-[11.7rem] h-[11.7rem] lg:hidden max-md:w-[7rem] max-md:h-[7rem] rounded-[50%]"
              />
              <div className="flex max-lg:flex-col lg:justify-between w-full">
                <div>
                  <h1
                    className="font-bold text-[2.6rem] max-md:text-[1.6rem]"
                    style={light ? { color: "#2B3442" } : { color: "white" }}
                  >
                    {userData?.name}
                  </h1>
                  <p className="text-[1.6rem] text-[#0079FF] max-md:text-[1.3rem]">
                    @{userData?.login}
                  </p>
                </div>
                <div
                  className="text-[1.5rem] leading-[3.5rem] max-md:text-[1.3rem]"
                  style={light ? { color: "#697C9A" } : { color: "white" }}
                >
                  <span>
                    Joined {userData?.created_at.slice(8, 10)}{" "}
                    {userData?.created_at.slice(5, 7) === "01"
                      ? "Jan"
                      : userData?.created_at.slice(5, 7) === "02"
                      ? "Feb"
                      : userData?.created_at.slice(5, 7) === "03"
                      ? "Mar"
                      : userData?.created_at.slice(5, 7) === "04"
                      ? "Apr"
                      : userData?.created_at.slice(5, 7) === "05"
                      ? "May"
                      : userData?.created_at.slice(5, 7) === "06"
                      ? "Jun"
                      : userData?.created_at.slice(5, 7) === "07"
                      ? "Jul"
                      : userData?.created_at.slice(5, 7) === "08"
                      ? "Aug"
                      : userData?.created_at.slice(5, 7) === "09"
                      ? "Sep"
                      : userData?.created_at.slice(5, 7) === "10"
                      ? "Oct"
                      : userData?.created_at.slice(5, 7) === "11"
                      ? "Nov"
                      : userData?.created_at.slice(5, 7) === "12"
                      ? "Dec"
                      : ""}
                  </span>
                </div>
              </div>
            </div>
            <p
              className="text-[1.5rem] leading-[2.5rem] mt-[2rem] max-md:text-[1.3rem]"
              style={light ? { color: "#4B6A9B" } : { color: "white" }}
            >
              {userData?.bio}
            </p>
            <div
              className="rounded-[1rem] mt-[3.2rem] pl-[3.2rem] pt-[1.5rem] pb-[1.7rem] pr-[8.3rem] flex justify-between max-md:pt-[1.8rem] max-md:pr-[1.4rem] max-md:pb-[1.9rem] max-md:pl-[1.5rem] max-md:mt-[2.3rem] duration-300 ease"
              style={
                light ? { background: "#F6F8FF" } : { background: "#141D2F" }
              }
            >
              <div>
                <h2
                  className="text-[1.3rem] max-md:text-[1.1rem]"
                  style={light ? { color: "#4B6A9B" } : { color: "white" }}
                >
                  Repos
                </h2>
                <p
                  className="text-[2.2rem] font-bold max-md:text-[1.6rem]"
                  style={light ? { color: "#2B3442" } : { color: "white" }}
                >
                  {userData?.public_repos}
                </p>
              </div>
              <div>
                <h2
                  className="text-[1.3rem]  max-md:text-[1.1rem]"
                  style={light ? { color: "#4B6A9B" } : { color: "white" }}
                >
                  Followers
                </h2>
                <p
                  className="text-[2.2rem] font-bold  max-md:text-[1.6rem]"
                  style={light ? { color: "#2B3442" } : { color: "white" }}
                >
                  {userData?.followers}
                </p>
              </div>
              <div>
                <h2
                  className="text-[1.3rem]  max-md:text-[1.1rem]"
                  style={light ? { color: "#4B6A9B" } : { color: "white" }}
                >
                  Following
                </h2>
                <p
                  className="text-[2.2rem] font-bold  max-md:text-[1.6rem]"
                  style={light ? { color: "#2B3442" } : { color: "white" }}
                >
                  {userData?.following}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-[2.1rem] gap-x-[6.5rem] pr-[5.1rem] mt-[3.7rem] max-md:mt-[2.4rem] max-md:grid-cols-1 max-md:gap-x-[7rem]">
              <div className="flex gap-[1.9rem] items-center">
                <img
                  src={location}
                  alt=""
                  className="w-[2rem] max-md:w-[1.6rem]"
                />
                <p
                  className={`text-[1.5rem] max-md:text-[1.3rem] ${
                    light ? "text-[#4B6A9B]" : "text-[white]"
                  }`}
                >
                  {userData?.location ? userData.location : "Not Available"}
                </p>
              </div>
              <div className="flex gap-[1.9rem] items-center">
                <img
                  src={twitter}
                  alt=""
                  className="w-[2rem] max-md:w-[1.6rem]"
                />
                <p
                  className="text-[1.5rem]  max-md:text-[1.3rem]"
                  style={light ? { color: "#4B6A9B" } : { color: "white" }}
                >
                  {userData?.twitter_username
                    ? userData.twitter_username
                    : "Not Available"}
                </p>
              </div>
              <div className="flex gap-[1.9rem] items-center">
                <img
                  src={website}
                  alt=""
                  className="w-[2rem] max-md:w-[1.6rem]"
                />
                <a
                  href={userData?.blog}
                  className="text-[1.5rem] max-md:text-[1.3rem] hover:underline"
                  style={light ? { color: "#4B6A9B" } : { color: "white" }}
                >
                  {userData?.blog ? userData.blog : "Not Available"}
                </a>
              </div>

              <div className="flex gap-[1.9rem] items-center">
                <img
                  src={company}
                  alt=""
                  className="w-[2rem] max-md:w-[1.6rem]"
                />
                <p
                  className="text-[1.5rem]  max-md:text-[1.3rem]"
                  style={light ? { color: "#4B6A9B" } : { color: "white" }}
                >
                  {userData?.company ? userData.company : "Not Available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

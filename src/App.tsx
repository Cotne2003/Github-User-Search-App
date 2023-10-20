import "./App.css";
import sun from "/icon-sun.svg";
import moon from "/icon-moon.svg";
import search from "/icon-search.svg";
import location from "/icon-location.svg";
import website from "/icon-website.svg";
import twitter from "/icon-twitter.svg";
import company from "/icon-company.svg";
import { useState } from "react";
import axios from "axios";

function App() {
  const [light, setLight] = useState(true);
  document.body.style.backgroundColor = light ? "#F6F8FF" : "#141d2f";
  const [userName, setUserName] = useState<null | string>(null);
  const [userData, setUserData] = useState({
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    bio: null,
    blog: "https://github.blog",
    company: "@github",
    created_at: "2011-01-25T18:44:36Z",
    email: null,
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    followers: 10767,
    followers_url: "https://api.github.com/users/octocat/followers",
    following: 9,
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    gravatar_id: "",
    hireable: null,
    html_url: "https://github.com/octocat",
    id: 583231,
    location: "San Francisco",
    login: "octocat",
    name: "The Octocat",
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    public_gists: 8,
    public_repos: 8,
    received_events_url: "https://api.github.com/users/octocat/received_events",
    repos_url: "https://api.github.com/users/octocat/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    twitter_username: null,
    type: "User",
    updated_at: "2023-09-22T11:25:21Z",
    url: "https://api.github.com/users/octocat",
  });
  const [errMessage, setErrMessage] = useState<null | string>(null);
  const getUser = async () => {
    try {
      const user = await axios.get(`https://api.github.com/users/${userName}`);
      setUserData(user.data);
      setErrMessage(null);
    } catch (err) {
      err ? setErrMessage("No results") : null;
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
          className="flex items-center gap-[1.6rem] cursor-pointer"
          onClick={() => setLight(!light)}
        >
          <span
            className="uppercase font-bold"
            style={light ? { color: "#697C9A" } : { color: "white" }}
          >
            light
          </span>
          <img src={light ? moon : sun} alt="" />
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
          onClick={getUser}
          className="absolute left-[3.2rem] top-[2.3rem] max-md:left-[1.6rem] max-md:top-[2rem] cursor-pointer"
        />
        <button
          className="pt-[1.25rem] pb-[1.35rem] px-[2.5rem] bg-[#0079FF] rounded-[1rem] text-[1.6rem] font-bold absolute top-[.95rem] right-[1rem] max-md:px-[1.6rem] max-md:py-[1.25rem] max-md:top-[.65rem] max-md:text-[1.4rem] active:bg-[#60ABFF] hover:bg-[#9dcbffab] duration-150"
          onClick={getUser}
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
            src={userData.avatar_url}
            alt=""
            className="w-[11.7rem] h-[11.7rem] max-lg:hidden rounded-[50%]"
          />
          <div className="w-full">
            <div className="flex max-lg:gap-[4.1rem] max-md:gap-[1.95rem]">
              <img
                src={userData.avatar_url}
                alt=""
                className="w-[11.7rem] h-[11.7rem] lg:hidden max-md:w-[7rem] max-md:h-[7rem] rounded-[50%]"
              />
              <div className="flex max-lg:flex-col lg:justify-between w-full">
                <div>
                  <h1
                    className="font-bold text-[2.6rem] max-md:text-[1.6rem]"
                    style={light ? { color: "#2B3442" } : { color: "white" }}
                  >
                    {userData.name}
                  </h1>
                  <p className="text-[1.6rem] text-[#0079FF] max-md:text-[1.3rem]">
                    @{userData.login}
                  </p>
                </div>
                <p
                  className="text-[1.5rem] leading-[3.5rem] max-md:text-[1.3rem]"
                  style={light ? { color: "#697C9A" } : { color: "white" }}
                >
                  Joined 25 Jan 2011
                </p>
              </div>
            </div>
            <p
              className="text-[1.5rem] leading-[2.5rem] mt-[2rem] max-md:text-[1.3rem]"
              style={light ? { color: "#4B6A9B" } : { color: "white" }}
            >
              {userData.bio}
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
                  {userData.public_repos}
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
                  {userData.followers}
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
                  {userData.following}
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
                  <p
                    className="text-[1.5rem] max-md:text-[1.3rem]"
                    style={light ? { color: "#4B6A9B" } : { color: "white" }}
                  >
                    {userData.location ? userData.location : "Not Available"}
                  </p>
                </div>
                <div className="flex mt-[1.9rem] gap-[1.9rem] max-md:mt-[1.6rem] items-center">
                  <img
                    src={website}
                    alt=""
                    className="w-[2rem] max-md:w-[1.6rem]  max-md:h-[1.6rem]"
                  />
                  <a
                    href={userData.blog}
                    className="text-[1.5rem] max-md:text-[1.3rem] hover:underline"
                    style={light ? { color: "#4B6A9B" } : { color: "white" }}
                  >
                    {userData.blog ? userData.blog : "Not Available"}
                  </a>
                </div>
              </div>
              <div>
                <div className="flex gap-[1.9rem] items-center">
                  <img
                    src={twitter}
                    alt=""
                    className="w-[2rem] max-md:w-[1.6rem] max-md:h-[1.6rem]"
                  />
                  <p
                    className="text-[1.5rem]  max-md:text-[1.3rem]"
                    style={light ? { color: "#4B6A9B" } : { color: "white" }}
                  >
                    {userData.twitter_username
                      ? userData.twitter_username
                      : "Not Available"}
                  </p>
                </div>
                <div className="flex mt-[1.9rem] gap-[1.9rem]  max-md:mt-[1.6rem] items-center">
                  <img
                    src={company}
                    alt=""
                    className="w-[2rem] max-md:w-[1.6rem] max-md:h-[1.6rem]"
                  />
                  <p
                    className="text-[1.5rem]  max-md:text-[1.3rem]"
                    style={light ? { color: "#4B6A9B" } : { color: "white" }}
                  >
                    {userData.company ? userData.company : "Not Available"}
                  </p>
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

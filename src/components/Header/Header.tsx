import { useState, useRef } from "react";
import classNames from "classnames";
import { useNavigate, Link } from "react-router-dom";
import { getUserData, clearUserInfo } from "../../helpers/userHelper";
import MenuItem from "../../components/Menu/MenuItem";
import { useOnOutsideClick } from "../../custom-hooks/useOnOutsideClick";
import "./Header.scss";

function Header() {
  const userData = getUserData();
  const [user, setUser] = useState(userData);
  const [openSideNav, setOpenSideNav] = useState(false);
  const [showMyAccount, setShowMyAccount] = useState(false);
  const navigate = useNavigate();
  const myAccountRef = useRef(null);

  useOnOutsideClick(myAccountRef, () => {
    if (showMyAccount) setShowMyAccount(false);
  });

  const leftMenuItems = [
    {
      title: "Materials",
      subMenu: [
        {
          title: "Tape",
        },
        {
          title: "Foam/Sponge",
        },
        {
          title: "Plastic Film/Paper/Liner/Label",
        },
        {
          title: "TIM",
        },
        {
          title: "Non-woven",
        },
        {
          title: "Rubber Sheet",
        },
        {
          title: "Rubber Compound",
        },
      ],
    },
    {
      title: "Resources",
    },
    {
      title: "Conversions",
    },
    {
      title: "My Materials",
    },
  ];

  const logout = function () {
    clearUserInfo();
    navigate("/login", { replace: true });
  };

  return (
    <div className="shadow-lg py-4">
      <div className="xl:container mx-auto px-6">
        <div className="header-wrapper text-gray-500 text-sm flex justify-between items-center">
          <div className="flex items-center w-full">
            <h1 className="text-3xl mobile:text-xl text-gray-900 font-semibold logo">
              <Link to="/home">CompanyX</Link>
            </h1>
            <div className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hidden mobile:block mobile:float-right"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => setOpenSideNav((previousVal) => !previousVal)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <div
                className={classNames({
                  flex: true,
                  "justify-between": true,
                  "pl-14": true,
                  "menu-wrapper": true,
                  "top-0": true,
                  "right-0": true,
                  "w-full": true,
                  "z-10": true,
                  "bg-white": true,
                  "flex-wrap": true,
                  "mobile:p-6": true,
                  "mobile:w-3/4": true,
                  "mobile:h-full": true,
                  "mobile:fixed": true,
                  "mobile:grid": true,
                  "mobile:grid-cols-1": true,
                  "mobile:place-content-between": true,
                  "mobile:overflow-y-scroll": true,
                  "mobile:hidden": !openSideNav,
                  "mobile:block": openSideNav,
                })}
              >
                <ul className="flex left-menu mobile:block">
                  {leftMenuItems.map((menu, index) => {
                    return <MenuItem item={menu} key={index} />;
                  })}
                </ul>
                <ul className="right-menu">
                  <li className="relative" ref={myAccountRef}>
                    <div
                      className="flex items-end cursor-pointer"
                      onClick={() =>
                        setShowMyAccount((previousVal) => !previousVal)
                      }
                    >
                      <span>{user?.username}</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <ul
                      className={`${
                        showMyAccount ? "block" : "hidden"
                      } desktop:absolute bg-white py-2 desktop:shadow-lg desktop:mt-2 right-0 desktop:w-30 sub-menu desktop:break-all desktop:border desktop:border-slate-400 desktop:border-solid desktop:rounded z-10`}
                    >
                      <li className="cursor-pointer">
                        <span
                          className="text-sm py-1 px-4 block hover:bg-gray-100"
                          onClick={() => logout()}
                        >
                          Logout
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={classNames({
              "menu-overlay": true,
              hidden: true,
              "top-0": true,
              "left-0": true,
              "h-full": true,
              "w-full": true,
              "opacity-60": true,
              "bg-black": true,
              "mobile:fixed": true,
              "mobile:hidden": !openSideNav,
              "mobile:block": openSideNav,
            })}
            onClick={() => setOpenSideNav((previousVal) => !previousVal)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Header;

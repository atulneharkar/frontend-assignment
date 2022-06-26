import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../ApolloClient";
import {
  setUserData,
  setJwtToken,
  getJwtToken,
} from "../../helpers/userHelper";
import Loader from "../Loader/Loader";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = getJwtToken();
    if (jwtToken) {
      return navigate("/home");
    }
  });

  const [login, { data, loading, error, reset }] = useMutation(LOGIN, {
    onCompleted(data) {
      if (data && data.login && data.login.user && data.login.jwt) {
        setUserData(data.login.user);
        setJwtToken(data.login.jwt);
        navigate("/home", { replace: true });
      }
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (email && password) {
      login({
        variables: { email, password },
      });
    }
  };

  return (
    <div className="login-wrapper bg-gray-200 h-screen overflow-y-scroll">
      <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
        <div className="left-wrapper w-1/2 pr-10 mobile:w-full mobile:p-8 desktop:flex desktop:justify-end">
          <div className="p-12 rounded-lg shadow-lg bg-white desktop:w-11/12 desktop:max-w-2xl">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-7">
              CompanyX
            </h5>
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5">
              Login
            </h5>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div
                className={classNames({
                  "bg-red-100": true,
                  "rounded-lg": true,
                  "p-3": true,
                  "mb-6": true,
                  "text-base": true,
                  "text-red-700": true,
                  flex: true,
                  "items-center": true,
                  hidden: !error,
                })}
                role="alert"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => reset()}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="w-11/12">{error?.message}</span>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full p-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control block w-full p-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 absolute top-5 right-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setShowPassword((previousVal) => !previousVal)}
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clipRule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              </div>

              <button
                type="submit"
                className="login-btn inline-block px-7 py-3 text-white font-medium text-sm rounded w-full bg-[#004e82]"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="right-wrapper p-20 w-1/2 flex justify-center items-center flex-wrap mobile:hidden bg-[#004e82] self-stretch">
          <p className="text-4xl leading-relaxed font-bold text-white">
            Search CompanyX's library with more than 4,000 Raw Materials
          </p>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default Login;

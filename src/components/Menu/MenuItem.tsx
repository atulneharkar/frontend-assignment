import { useState } from "react";
import SubMenu from "./SubMenu";

function MenuItem({ item }) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <li className="relative desktop:mr-5 mobile:mb-5">
      {item && item.subMenu && item.subMenu.length > 0 ? (
        <>
          <div
            className="flex items-end"
            onClick={() => setShowSubmenu((previousVal) => !previousVal)}
          >
            <span>{item.title}</span>
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
          <SubMenu subMenu={item.subMenu} showSubmenu={showSubmenu} />
        </>
      ) : (
        <a href="https://purple.telstra.com/" target="_blank">
          {item.title}
        </a>
      )}
    </li>
  );
}

export default MenuItem;

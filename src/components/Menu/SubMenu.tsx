function SubMenu({ subMenu, showSubmenu }) {
  return (
    <ul
      className={`${
        showSubmenu ? "block" : "hidden"
      } desktop:absolute bg-white py-2 desktop:shadow-lg desktop:mt-2 right-0 top-5 desktop:w-40 sub-menu desktop:break-all desktop:border desktop:border-slate-400 desktop:border-solid desktop:rounded mobile:ml-3 z-10`}
    >
      {subMenu.map((item, index) => {
        return (
          <li key={index}>
            <a
              href={`https://www.google.com/search?q=${item.title}`}
              target="_blank"
              className="text-sm py-2 px-4 block hover:bg-gray-100"
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SubMenu;

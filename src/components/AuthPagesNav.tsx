import { Link } from "react-router-dom";
import LangSwitcher from "./shared/lang-switcher";
const Nav = ({
  linksState = false,
  searchBarState = false,
  authState = false,
}) => {
  return (
    <nav >
      <section className="mainContainer flex items-center justify-between py-3">
        {/* Appear It When Create The Routing */}
        {/* <Link to="/"> */}
        <h3 className="capitalize text-mainText font-semibold text-xl">
          collabspace
        </h3>
        {/* </Link> */}

        <LangSwitcher/>
        {/* Appear It When Create The Routing */}
      </section>
    </nav>
  );
};

export default Nav;

import {useState,useEffect} from "react";
import { Link} from "react-router-dom";
import LangSwitcher from "./shared/lang-switcher";
const Nav = ({
  linksState = false,
  searchBarState = false,
  authState = false,
}) => {
  const [navShadowState,setNavShadowState] = useState(false);

  useEffect(()=>{
    const handleScrolling=_=>{
      let scroll_Y_Val=window.scrollY;
      if(scroll_Y_Val > 10 ){
        setNavShadowState(true);
      }else{
        setNavShadowState(false);
      }
    }
    window.addEventListener("scroll",handleScrolling);

    return ()=> {
      window.removeEventListener("scroll",handleScrolling);
    }
    
  },[])
  return (
    <nav className={`${navShadowState?"shadow-lg":"shadow-0"} sticky top-0 z-100 bg-white`}>
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

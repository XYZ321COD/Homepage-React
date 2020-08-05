import React, { useState, useRef, useMemo } from "react";
import "../css/Navbar.css";
import Navbaroption from "./NavbarOption.js";
import Navbarpopup from "./NavBarPopup.js";

function NavBar() {
  const [homeInfoIsShown, sethomeInfoIsShown] = useState(false);
  const [homeInfoISAlreadyShown, sethomeInfoISAlreadyShown] = useState(false);

  const [resumeInfoIsShown, setresumeInfoIsShown] = useState(false);
  const [resumeInfoIsAlreadyShown, setresumeInfoISAlreadyShown] = useState(
    false
  );

  const [blogInfoIsShown, setblogInfoIsShown] = useState(false);
  const [blogInfoIsAlreadyShown, setblogInfoIsAlreadyShown] = useState(false);

  function memoizedHandleEnterBind(setFunction, state) {
    return () => {
      setFunction(true);
    };
  }

  function memoizedHandleLeavePopUp(setFun, setFun2) {
    return () => {
      setFun(false);
      setFun2(false);
    };
  }

  async function memoizedHandleLeaveNavBar(setFun, state) {
    return () => {
      setTimeout(() => {
        if (!state) {
          setFun(false);
        }
      }, 300);
    };
  }

  const HomeRef = useRef(null);
  const ResumeRef = useRef(null);
  const BlogRef = useRef(null);

  const HomeComponent = useMemo(
    () => (
      <Navbaroption
        name="h o m e "
        onMouseEnter={memoizedHandleEnterBind(
          sethomeInfoIsShown,
          homeInfoIsShown
        )}
        onMouseLeave={memoizedHandleLeaveNavBar(
          sethomeInfoIsShown,
          homeInfoISAlreadyShown
        )}
        ref_elem={HomeRef}
      />
    ),
    [homeInfoIsShown, homeInfoISAlreadyShown]
  );
  const ResumeComponent = useMemo(
    () => (
      <Navbaroption
        name="r e s u m e "
        onMouseEnter={memoizedHandleEnterBind(
          setresumeInfoIsShown,
          resumeInfoIsShown
        )}
        onMouseLeave={memoizedHandleLeaveNavBar(
          setresumeInfoIsShown,
          resumeInfoIsAlreadyShown
        )}
        ref_elem={ResumeRef}
      />
    ),
    [resumeInfoIsShown, resumeInfoIsAlreadyShown]
  );

  const BlogComponent = useMemo(
    () => (
      <Navbaroption
        name="b l o g "
        onMouseEnter={memoizedHandleEnterBind(
          setblogInfoIsShown,
          blogInfoIsShown
        )}
        onMouseLeave={memoizedHandleLeaveNavBar(
          setblogInfoIsShown,
          blogInfoIsAlreadyShown
        )}
        ref_elem={BlogRef}
      />
    ),
    [blogInfoIsShown, blogInfoIsAlreadyShown]
  );
  return (
    <>
      <nav class="navbar navbar-default navbar-expand-lg">
        <ul class="navbar-nav d-lg-none">
          <Navbaroption name="m e n u " href="/menu/" />
        </ul>
        <div class="navbar-collapse collapse ">
          <ul class="navbar-nav">
            {HomeComponent}
            {ResumeComponent}
            {BlogComponent}
          </ul>
        </div>
      </nav>
      <div>
        {homeInfoIsShown && (
          <Navbarpopup
            mainName="Homepage Overview"
            extras1="Home"
            extras2="About me"
            extras1_desc="My homepage"
            extras2_desc=" Little bit more about me"
            onMouseEnter={memoizedHandleEnterBind(sethomeInfoISAlreadyShown)}
            onMouseLeave={memoizedHandleLeavePopUp(
              sethomeInfoIsShown,
              sethomeInfoISAlreadyShown
            )}
            top={HomeRef.current.getBoundingClientRect().bottom}
            left={HomeRef.current.getBoundingClientRect().left}
            href={["/home", "/aboutme"]}
          />
        )}
        {resumeInfoIsShown && (
          <Navbarpopup
            mainName="Resume Overview"
            extras1="CV"
            extras2="Resume?"
            extras1_desc="Here is my CV if you are interested"
            extras2_desc=" Well....."
            onMouseEnter={memoizedHandleEnterBind(setresumeInfoISAlreadyShown)}
            onMouseLeave={memoizedHandleLeavePopUp(
              setresumeInfoIsShown,
              setresumeInfoISAlreadyShown
            )}
            top={ResumeRef.current.getBoundingClientRect().bottom}
            left={ResumeRef.current.getBoundingClientRect().left}
            href={[
              require("../resources/resumeAndCv/CV.pdf"),
              require("../resources/resumeAndCv/Resume.png"),
            ]}
          />
        )}
        {blogInfoIsShown && (
          <Navbarpopup
            mainName="Blog Overview"
            extras1="Projects"
            extras2="Posts"
            extras1_desc="Links to projects"
            extras2_desc="Description of the projects"
            onMouseEnter={memoizedHandleEnterBind(setblogInfoIsAlreadyShown)}
            onMouseLeave={memoizedHandleLeavePopUp(
              setblogInfoIsShown,
              setblogInfoIsAlreadyShown
            )}
            top={BlogRef.current.getBoundingClientRect().bottom}
            left={BlogRef.current.getBoundingClientRect().left}
            href={["/projects", "/posts"]}
          />
        )}
      </div>
    </>
  );
}

export default NavBar;

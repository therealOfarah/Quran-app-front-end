import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css"
type Props={
  handleLogout:()=>void;
  user:any;
}
function NavBarTop(props:Props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [playing, setplaying] = useState(false);
  const [paused, setpaused] = useState(false);
  // const formatedTimer = moment(timer).format("YYYY-MM-DD HH:mm:ss")

  return (
    <div>
      <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink  to="/" className="nav-logo">
            Quran
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                
                to="/"
                className="nav-links active"
                onClick={()=>click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
            {!playing && (
        <div>
          After:{" "}
          {/* <ReactMomentCountDown
            toDate={formatedTimer}
            sourceFormatMask="YYYY-MM-DD HH:mm:ss"
            onCountdownEnd={() => {
              if (paused) {
                return null;
              }
              setplaying(true);
              showAdhanNotification();
              console.log("counter ok");
            }}
          /> */}
        </div>
      )}
              <NavLink
                
                to="/hadith"
                className="nav-links active"
                onClick={()=>click ? handleClick : null}
              >
                Hadith
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/quran"
                className="nav-links active"
                onClick={()=>click ? handleClick : null}
              >
                Quran
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/qibla"
                className="nav-links active"
                onClick={()=>click ? handleClick : null}
              >
                Qibla 
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
  }
  
  //     <nav className="navbar navbar-expand-lg " >
  //       <div className="container-fluid">
  //       <a className="navbar-brand"  href='/'>
  //           <img
  //             alt="Logo"
  //             width="30"
  //             height="24"
  //             className="d-inline-block align-text-hrefp"
  //           />
  //           Movie+
  //       </a>
  //       <button
  //           className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flexDirection: "row-reverse",paddingTop:"6px"}}>
  //         {
  //       profile === (undefined || null) ?
  //           <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
  //             <li className="nav-item" >
  //               <a className="nav-link " aria-current="page" href="/">Home</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/movie">Movies</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/show">Shows</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link " aria-current="page" href="/login">Login</a>
  //             </li>
  //           </ul>
  //           :
  //           <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
  //             <li className="nav-item">
  //               <a className="nav-link " aria-current="page" href="/">Home</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/movie">Movies</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/show">Shows</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/account">Account</a>
  //             </li>
  //             <li className="nav-item">
  //               <p className="nav-link" onClick={logout}>Logout</p>
  //             </li>
  //           </ul>
  // }
  //         </div>
  //       </div>
  //     </nav>
export default NavBarTop;

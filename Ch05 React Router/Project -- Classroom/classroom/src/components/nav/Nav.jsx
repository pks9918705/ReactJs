import React from "react";
import style from "./Nav.module.css";
import { Outlet, NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <img
              className={style.logo}
              src="https://files.codingninjas.in/pl-ninja-16706.svg"
              alt="logo"
            />
            <Link to="/">
              <h4 style={{ color: "white" }}> Coding Ninjas</h4>
            </Link>
            {/* <h4>Coding Ninjas</h4> */}
          </div>
          <div className={style.nav_details}>
            <button>
              <NavLink to="/courses">
                {({ isActive, isPending }) =>
                  isActive ? "On Courses" : "Go to Courses"
                }
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;

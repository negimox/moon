import React, { useRef, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as Config from "../common/Config";
import { IdleTimerProvider } from "react-idle-timer";
import jwt_decode from "jwt-decode";
import "./admin.css";

// import './App.css';
function Template(props) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/admin");

  // console.log("sadasd" ,pathname);

  var roleId = localStorage.getItem("roleId");
  const navigate = useNavigate();
  const idelTimeRef = useRef(null);
  const adminId = localStorage.getItem("adminId");
  const isAuthenticated = localStorage.getItem("superadmin_token");
  if (!isAuthenticated) {
    return <Navigate to="/superadmin/login" />;
  }

  //  if (roleId==="4" && (pathname == "/admin/message-broadcast" || pathname == "/admin/dashboard" || pathname == "/admin/subadmin" || pathname == "/admin/strategy"  ||  pathname == "/admin/group-services" || pathname == "/admin/clients"  || pathname =="/admin/reports" || pathname == "/admin/transactionlicence")  ) {
  //     console.log("roleId",roleId,"pathname",pathname)
  //    navigate("/admin/signals")
  //   }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminId");
    localStorage.removeItem("roleId");
    localStorage.removeItem("createdBy");
    navigate("/superadmin/login");
  };

  const getLoginStatus = (e) => {
    axios({
      method: "post",
      url: `${Config.base_url}smartalgo/admin/LoginStatusGet`,
      data: {
        adminId: adminId,
      },
      headers: {
        "x-access-token": isAuthenticated,
      },
    }).then(function (response) {
      if (response) {
        var loginStatus = response.data.admin_login_status;
        if (loginStatus == 0) {
          logout();
        }
      }
    });
  };

  if (isAuthenticated) {
    var decoded = jwt_decode(isAuthenticated);
    if (decoded.exp * 1000 < new Date().getTime()) {
      console.log("Token Expired");
      logout();
    }
  }

  return (
    <>
      <div className="wrapper ">
        <IdleTimerProvider
          ref={idelTimeRef}
          timeout={1000}
          // onPrompt={onPrompt}
          onIdle={getLoginStatus}
          // onActive={onActive}
          // onAction={onAction}
        >
          <Sidebar />
          <div className="main-panel" id="main-panel">
            <Header />
            {props.page}
            <Footer />
          </div>
        </IdleTimerProvider>
      </div>
    </>
  );
}

export default Template;

import React, {useEffect, useState} from "react";
import ApiGet from "../axios/ApiGet";
import Loader from "../loader/Loader";

const TopBar = () => {

    type Tdata = {
        firstName: string,
        lastName: string,
        email: string,
    }

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);


    useEffect(()=>{
        setIsLoading(true);
        const api = ApiGet('/user/current', 'show_user');
        api.then((data: Tdata) => {
            setIsLoading(false);
            setUserInfo({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
            });
        })
    },[]);

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {isLoading ? <Loader text={''}/> : null}
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">- {userInfo.firstName} -</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                         aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
    )
}

export default TopBar;
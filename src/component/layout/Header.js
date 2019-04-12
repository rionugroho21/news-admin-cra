import React from 'react';
import imgPropic from '../../assets/img/admin.jpg';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render(){
        return <header id="header" className="header">
            <div className="header-menu">
                <div className="col-sm-7">
                    <p id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks"></i></p>
                    <div className="header-left">
                        {/* <button className="search-trigger"><i className="fa fa-search"></i></button> */}
                        <div className="form-inline">
                            <form className="search-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                            </form>
                        </div>
                        <div className="add">
                            <Link className="add-trigger" to="/addNews"><i className="fa fa-plus"></i></Link>
                        </div>
                        <div className="add mgl25">
                            <Link className="add-trigger" to="/addMember"><i className="fa fa-user-plus"></i></Link>
                        </div>
                        {/* <Link className="visit mgl25" to="/view">Visit Web</Link> */}
                    </div>
                </div>
                {/* <div className="col-sm-5">
                    <div className="user-area dropdown float-right">
                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle" src={imgPropic} alt="User Avatar" />
                        </div>
                        <div className="user-menu dropdown-menu">
                            <Link className="nav-link" to="/profile"><i className="fa fa-user"></i> My Profile</Link>
                            <Link className="nav-link" to="/"><i className="fa fa-power-off"></i> Logout</Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </header>
    }
}

export default Header;
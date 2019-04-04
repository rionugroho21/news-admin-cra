import React from 'react';
import imgPropic from '../../assets/img/admin.jpg';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render(){
        return <header id="header" className="header">
            <div className="header-menu">
                <div className="col-sm-7">
                    <a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks"></i></a>
                    <div className="header-left">
                        <button className="search-trigger"><i className="fa fa-search"></i></button>
                        <div className="form-inline">
                            <form className="search-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                            </form>
                        </div>
                        <div className="add">
                            <Link className="add-trigger" to="/add"><i className="fa fa-plus"></i></Link>
                        </div>
                        <Link className="mgl25" to="/view">Visit Web</Link>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="user-area dropdown float-right">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle" src={imgPropic} alt="User Avatar" />
                        </a>
                        <div className="user-menu dropdown-menu">
                            <a className="nav-link" href="#"><i className="fa fa-user"></i> My Profile</a>
                            <a className="nav-link" href="#"><i className="fa fa-power-off"></i> Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    }
}

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import imgLogo from '../../assets/img/logo.png';
import imgLogo2 from '../../assets/img/logo2.png';

class Aside extends React.Component {
    render(){
        return <aside id="left-panel" className="left-panel">
            <nav className="navbar navbar-expand-sm navbar-default">
                <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <Link to="/" className="navbar-brand"><img src={imgLogo} alt="Logo" /></Link>
                    <Link to="/" className="navbar-brand hidden"><img src={imgLogo2} alt="Logo" /></Link>
                </div>
                <div id="main-menu" className="main-menu collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/"><i className="menu-icon fa fa-dashboard"></i>Dashboard </Link>
                            <Link to="/news"><i className="menu-icon fa fa-newspaper-o"></i>News </Link>
                            <Link to="/member"><i className="menu-icon fa fa-user-circle"></i>Member </Link>
                            <Link to="/photo"><i className="menu-icon fa fa-picture-o"></i>Photo </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    }
}

export default Aside;
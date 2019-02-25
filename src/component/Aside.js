import React from 'react';
import {Link} from 'react-router-dom';
import imgLogo from '../assets/img/logo.png';
import imgLogo2 from '../assets/img/logo2.png';

function Aside() {
    return <aside id="left-panel" class="left-panel">
            <nav class="navbar navbar-expand-sm navbar-default">
                <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars"></i>
                    </button>
                    <Link to="/" className="navbar-brand"><img src={imgLogo} alt="Logo" /></Link>
                    <Link to="/" className="navbar-brand hidden"><img src={imgLogo2} alt="Logo" /></Link>
                </div>
                <div id="main-menu" class="main-menu collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <Link to="/"><i class="menu-icon fa fa-dashboard"></i>Dashboard </Link>
                        </li>
                        <h3 class="menu-title">UI elements</h3>
                        <li class="menu-item-has-children active dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-dashboard"></i>Dashboard</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li><i class="menu-icon fa fa-th"></i><Link to="/">Basic Form</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
}

export default Aside;
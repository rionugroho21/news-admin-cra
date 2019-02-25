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
                    </ul>
                </div>
            </nav>
        </aside>
}

export default Aside;
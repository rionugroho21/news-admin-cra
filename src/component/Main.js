import React, { Component } from 'react';

import Content from './Content';
import Aside from './Aside';
import Header from './Header';

class Main extends Component {

    componentDidMount() {
        this.props.startLoadingPost();
    }

    render() {
        return (
            <div>
                <Aside />
                <div id="right-panel" class="right-panel">
                    <Header />
                    <div class="breadcrumbs">
                        <div class="col-sm-4">
                            <div class="page-header float-left">
                                <div class="page-title"><h1>Dashboard</h1></div>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="page-header float-right">
                                <div class="page-title">
                                    <ol class="breadcrumb text-right">
                                        <li><a href="#">Dashboard</a></li>
                                        <li class="active">Data</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Content {...this.props} />
                </div>
            </div>
        );
    }
}

export default Main;
import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Content from './Content';
import Aside from './Aside';
import Header from './Header';
import Edit from './Edit';
import {Add} from './Add';

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
                    <div class="content mt-3">
                        <Route exact path="/" render={() => (
                            <Content {...this.props} />
                        )}/>
                        <Route exact path="/Add" render={({history}) => (
                            <Add {...this.props} onHistory={history}/>
                        )}/>
                        <Route path="/Edit/:id" render = {(params) => (
                            <Edit {...this.props} {...params}/>
                        )}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import $ from 'jquery';

import Content from './page/Content';
import Aside from './layout/Aside';
import Header from './layout/Header';
import Breadcrumbs from './layout/Breadcrumbs';
import Edit from './page/Edit';
import {Add} from './page/Add';

class Main extends Component {
    state = { 
        loading: true
    }

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false});
        });
        this.props.startLoadingCat();
    }

    render() {
        return (
            <div>
                <Aside />
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breadcrumbs />
                    <div className="content mt-3">
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Content loading={this.state.loading} {...this.props} />
                        )}/>
                        <Route path="/Add" render={({history}) => (
                            <Add {...this.props} onHistory={history}/>
                        )}/>
                        <Route path="/Edit/:id" render = {(params) => (
                            <Edit {...this.props} {...params}/>
                        )}/>
                        <Route render = {() => <h1>Page not found</h1>} />
                    </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Content from './Content';
import Aside from './Aside';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs';
import Edit from './Edit';
import {Add} from './Add';

class Main extends Component {
    state = { loading: true }

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
                        <Route exact path="/" render={() => (
                            <Content loading={this.state.loading} {...this.props} />
                        )}/>
                        <Route path="/Add" render={({history}) => (
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
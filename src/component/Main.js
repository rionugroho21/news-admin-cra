import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Aside from './layout/Aside';
import Header from './layout/Header';
import Breadcrumbs from './layout/Breadcrumbs';
import Member from './member/Member';
import MemberAdd from './member/MemberAdd';
import MemberEdit from './member/MemberEdit';
import News from './news/News';
import NewsEdit from './news/NewsEdit';
import NewsAdd from'./news/NewsAdd';
import Dashboard from './dashboard/Dashboard';
import Login from './auth/Login';

class Main extends Component{

    render(){
        return <div>
                <Aside />
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breadcrumbs />
                    <div className="content mt-3">
                        <Route exact path="/login" component={ Login }></Route>
                        <Switch>
                            <Route exact path="/" component={ Dashboard }/>
                            <Route exact path="/news" component={ News }/>
                            <Route exact path="/addNews" component={ NewsAdd }/>
                            <Route exact path="/editNews/:id" component={ NewsEdit }/>
                            <Route exact path="/member" component={ Member }/>
                            <Route exact path="/addMember" component={ MemberAdd }/>
                            <Route exact path="/editMember/:id" component={ MemberEdit }/>
                            <Route exact render = {() => <h1>Page not found</h1>} />
                        </Switch>
                    </div>
                </div>
            </div>
    }
}

export default Main;
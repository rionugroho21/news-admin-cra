import React from 'react';

class Breadcrumbs extends React.Component {
    render(){
        return <div className="breadcrumbs">
            <div className="col-sm-4">
                <div className="page-header float-left">
                    <div className="page-title"><h1>Dashboard</h1></div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="page-header float-right">
                    <div className="page-title">
                        <ol className="breadcrumb text-right">
                            <li>Dashboard</li>
                            <li className="active">Data</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Breadcrumbs;
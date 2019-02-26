import React from 'react';

function Breadcrumbs() {
    return <div class="breadcrumbs">
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
}

export default Breadcrumbs;
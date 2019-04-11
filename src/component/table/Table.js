import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {startLoadTable} from '../../redux/actions/tableActions';
import Loading from '../common/loading/LoadingDots';

class Table extends React.Component{
    componentDidMount(){
        this.props.startLoadTable();
    }

    render(){
        const { table, loading } = this.props.table;
        console.log(table);
        if(loading === true){
            return <Loading />
        }else if(table){
            return (
                <div className="animated fadeIn">
                    <div className="row">
                        <div className="container">
                            {/* <div id="toolbar">
                                <select className="form-control">
                                    <option value="">Export Basic</option>
                                    <option value="all">Export All</option>
                                    <option value="selected">Export Selected</option>
                                </select>
                            </div> */}

                            <div className="table-responsive">
                                <table id="table" 
                                    data-toggle="table"
                                    data-search="true"
                                    data-filter-control="true" 
                                    data-show-export="true"
                                    data-click-to-select="true"
                                    data-toolbar="#toolbar"
                                    className="table table-striped table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th data-field="state" data-checkbox="true"></th>
                                            <th data-field="id" data-filter-control="input" data-sortable="true">id</th>
                                            <th data-field="name" data-filter-control="select" data-sortable="true">name</th>
                                            <th data-field="email" data-filter-control="select" data-sortable="true">email</th>
                                            <th data-field="body" data-sortable="true">body</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table.map((data, index) => 
                                            <tr key={index} index={index}>
                                                <td className="bs-checkbox "><input data-index="0" name="btSelectItem" type="checkbox" /></td>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.body}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return <h1> ...No Post Found </h1>
        }
    }
}

Table.propTypes = {
    startLoadTable: PropTypes.func.isRequired,
    table: PropTypes.object.isRequired
}
  
const mapStateToProps = state => ({
    table: state.table
})
  
export default connect(mapStateToProps, { startLoadTable })(Table);
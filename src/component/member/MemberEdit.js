import React from 'react';
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {startEditingMember, startLoadingMember} from '../../redux/actions';
import AutoCompleteInput from '../common/autocompleteinput/AutoCompleteInput';
import countries from '../../models/countries';

class MemberEdit extends React.Component{
    constructor(props){
        super(props);
        const member = this.props.member;
        const id = Number(this.props.match.params.id);
        const post = member.find((post) => post.id === id);
        this.state = {
            id: post.id,
            name: post.name,
            dateob: new Date(post.dateob),
            email: post.email,
            phone: post.phone,
            sex: post.sex,
            country: post.country,
            zip: post.zipCode,
            address: post.address,
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }

    componentDidMount(){
        this.props.startLoadingMember();
    }

    handlechange({target}){
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const date = new Date(this.state.dateob);
        const dateConvert = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
        const country = event.target.elements.country.value;
        const post = {
            id: this.state.id,
            name: this.state.name,
            dateob: dateConvert,
            email: this.state.email,
            phone: this.state.phone,
            sex: this.state.sex,
            zipCode: this.state.zip,
            country: country,
            address: this.state.address
        }
        if(this.validateForm(post)){
            this.props.startEditingMember(post);
            this.props.history.push('/member');
        }
    }

    handleDate(date) {
        this.setState({
            dateob: date
        });
    }

    validateForm(post){
        let field = post;
        let formIsValid = true;
        let errors = {};

        if (field.name === "") {
            formIsValid = false;
            errors["name"] = "*Name is empty.";
        }

        if (field.dateOfBirth === "") {
            formIsValid = false;
            errors["dateob"] = "*Date of Birth Link is empty.";
        }

        if (field.email === "") {
            formIsValid = false;
            errors["email"] = "*Email is empty.";
        }
        // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        // if(!pattern.test(field.email)){
        //     formIsValid = false;
        //     errors["email"] = "*Please enter valid email";
        // }

        if (field.phone === "") {
            formIsValid = false;
            errors["phone"] = "*Phone is empty.";
        }
        // if(!field.phone.match(/^[0-9]{10}$/)){
        //     formIsValid = false;
        //     errors["phone"] = "*Please enter valid mobile no";
        // }

        if (field.sex === "") {
            formIsValid = false;
            errors["sex"] = "*Sex is unchecked.";
        }

        if (field.country === "") {
            formIsValid = false;
            errors["country"] = "*Country is empty.";
        }

        if (field.zipCode === "") {
            formIsValid = false;
            errors["zip"] = "*Zip Code is empty.";
        }

        if (field.address === "") {
            formIsValid = false;
            errors["address"] = "*Address is empty.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    render(){
        return <div className="col-lg-4">
        <div className="card">
            <div className="card-header">
                <strong>Tambahkan </strong>Data
            </div>
            <div className="card-body card-block">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nf-name" className="form-control-label">Name</label>
                        <input type="text" id="nf-name" name="name" placeholder="" className="form-control" value={this.state.name} onChange={this.handlechange} />
                        <div className="errorMsg">{this.state.errors.name}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nf-dateob" className="form-control-label">Date of Birth</label>
                        <DatePicker 
                            dateFormat="dd/MM/yyyy"
                            peekNextMonth 
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select" 
                            selected={this.state.dateob} 
                            onChange={this.handleDate} 
                        />
                        <div className="errorMsg">{this.state.errors.dateob}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nf-email" className="form-control-label">Email</label>
                        <input type="text" id="nf-email" name="email" placeholder="" className="form-control" value={this.state.email} onChange={this.handlechange} />
                        <div className="errorMsg">{this.state.errors.email}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nf-phone" className="form-control-label">Phone</label>
                        <input type="text" id="nf-phone" name="phone" placeholder="" className="form-control" value={this.state.phone} onChange={this.handlechange} />
                        <div className="errorMsg">{this.state.errors.phone}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nf-sex" className="form-control-label">Sex</label>
                        <label className="radio-inline"><input type="radio" name="sex" value="Male" checked={this.state.sex === "Male"} onChange={this.handlechange} /> Male</label>
                        <label className="radio-inline"><input type="radio" name="sex" value="Female" checked={this.state.sex === "Female"} onChange={this.handlechange} /> Female</label>
                        <div className="errorMsg">{this.state.errors.sex}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nf-country" className="form-control-label">Country</label>
                        {/* <input type="text" id="nf-country" name="country" placeholder="" className="form-control" value={this.state.country} onChange={this.handlechange} /> */}
                        <AutoCompleteInput type="text" id="nf-country" name="country" placeholder="" className="form-control" value={this.state.country} onChange={this.handlechange} items={countries}/>
                        <div className="errorMsg">{this.state.errors.country}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nf-zip" className="form-control-label">Zip Code</label>
                        <input type="text" id="nf-zip" name="zip" placeholder="" className="form-control" value={this.state.zip} onChange={this.handlechange} />
                        <div className="errorMsg">{this.state.errors.zip}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nf-address" className="form-control-label">Address</label>
                        <textarea type="text" id="nf-address" name="address" placeholder="" className="form-control" rows="2" value={this.state.address} onChange={this.handlechange} />
                        <div className="errorMsg">{this.state.errors.address}</div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">
                        <i className="fa fa-dot-circle-o"></i> Save
                    </button>
                </form>
            </div>
        </div>
    </div>
    }
}

MemberEdit.propTypes = {
    member: PropTypes.array.isRequired,
    startEditingMember: PropTypes.func.isRequired,
    startLoadingMember: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    member: state.member.member
  };
};

export default connect(mapStateToProps, {startEditingMember, startLoadingMember})(MemberEdit);
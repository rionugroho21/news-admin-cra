import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import {startAddingMember} from '../../redux/actions/memberActions';
import AutoCompleteInput from '../common/autocompleteinput/AutoCompleteInput';
import contries from '../../database/contries';

class MemberAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const date = new Date(this.state.date);
        const dateob = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
        const email = event.target.elements.email.value;
        const phone = event.target.elements.phone.value;
        const sex = event.target.elements.sex.value;
        const country = event.target.elements.country.value;
        const zip = event.target.elements.zip.value;
        const address = event.target.elements.address.value;
        const post = {
            id: Number(new Date()),
            name: name,
            dateob: dateob,
            email: email,
            phone: phone,
            sex: sex,
            country: country,
            zipCode: zip,
            address: address
        }
        if(this.validateForm(post)){
            if(name && email){
                this.props.startAddingMember(post);
                this.props.history.push('/member');
            }
        }
    }

    handleChange({target}) {
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleDate(date) {
        this.setState({
          date: date
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
                        <strong>Tambahkan </strong>Data Member
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nf-name" className="form-control-label">Name</label>
                                <input type="text" id="nf-name" name="name" placeholder="" className="form-control" />
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
                                    selected={this.state.date} 
                                    onChange={this.handleDate} 
                                />
                                <div className="errorMsg">{this.state.errors.dateob}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-email" className="form-control-label">Email</label>
                                <input type="text" id="nf-email" name="email" placeholder="" className="form-control" />
                                <div className="errorMsg">{this.state.errors.email}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-phone" className="form-control-label">Phone</label>
                                <input type="text" id="nf-phone" name="phone" placeholder="" className="form-control" />
                                <div className="errorMsg">{this.state.errors.phone}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-sex" className="form-control-label">Sex</label>
                                <label className="radio-inline"><input type="radio" name="sex" value="Male" /> Male</label>
                                <label className="radio-inline"><input type="radio" name="sex" value="Female" /> Female</label>
                                <div className="errorMsg">{this.state.errors.sex}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-country" className="form-control-label">Country</label>
                                <AutoCompleteInput type="text" id="nf-country" name="country" placeholder="" className="form-control" items={contries}/>
                                <div className="errorMsg">{this.state.errors.country}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-zip" className="form-control-label">Zip Code</label>
                                <input type="text" id="nf-zip" name="zip" placeholder="" className="form-control" />
                                <div className="errorMsg">{this.state.errors.zip}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nf-address" className="form-control-label">Address</label>
                                <textarea type="text" id="nf-address" name="address" placeholder="" className="form-control" rows="2" />
                                <div className="errorMsg">{this.state.errors.address}</div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">
                                <i className="fa fa-dot-circle-o"></i> Tambah
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    }
}


MemberAdd.propTypes = {
    startAddingMember: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({startAddingMember}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberAdd);
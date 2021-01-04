import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane, faTrain, faBuilding, faTruck, faCalendar, faStickyNote, faUserTie } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../store/actions';

class Add extends Component {
    state = {
        vehicle_type_id: '',
        nominal_capacity: '',
        builder_id: '',
        customer_id: '',
        serial_number: '',
        year: '',
        ref: '',
        chassis_number: '',
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(e.target);
    }

    render() {
        const { vehicle_type_id, nominal_capacity, builder_id, customer_id, serial_number, year, ref, chassis_number } = this.state;
        let { backend: { vehicles: { vehicleTypes, builders, customers } } } = this.props;

        if (!vehicleTypes) vehicleTypes = [];
        if (!builders) builders = [];

        const vehicleTypesOptions = vehicleTypes.map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);
        const buildersOptions = builders.map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);
        const customersOptions = customers.map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);

        return <div>
            <Form onSubmit={this.submitHandler} className="row">
                <Input className="col-lg-6" type="select" name="vehicle_type_id" placeholder="Type de véhicule" onChange={this.inputChangedHandler} icon={faTrain} validation={{ required: true }} required value={vehicle_type_id}>
                    <option>Sélectionner un type de véhicule</option>
                    {vehicleTypesOptions}
                </Input>
                <Input className="col-lg-6" type="select" name="builder_id" onChange={this.inputChangedHandler} placeholder="Constructeur" icon={faBuilding} validation={{ required: true }} required value={builder_id}>
                    <option>Sélectionner un constructeur</option>
                    {buildersOptions}
                </Input>
                <Input className="col-lg-6" type="select" name="customer_id" onChange={this.inputChangedHandler} placeholder="Constructeur" icon={faUserTie} validation={{ required: true }} required value={customer_id}>
                    <option>Sélectionner un client</option>
                    {customersOptions}
                </Input>
                <Input className="col-lg-6" type="text" name="ref" placeholder="Numéro d'immatriculation" onChange={this.inputChangedHandler} icon={faStickyNote} validation={{ required: true }} required value={ref} />
                <Input className="col-lg-6" type="text" name="serial_number" placeholder="Numéro de série" onChange={this.inputChangedHandler} icon={faStickyNote} validation={{ required: true }} required value={serial_number} />
                <Input className="col-lg-6" type="text" name="chassis_number" placeholder="Numéro de châssis" onChange={this.inputChangedHandler} icon={faStickyNote} validation={{ required: true }} required value={chassis_number} />
                <Input className="col-lg-6" type="number" name="nominal_capacity" placeholder="Capacité nominale" onChange={this.inputChangedHandler} icon={faTruck} validation={{ required: true }} required value={nominal_capacity} />
                <Input className="col-lg-6" type="number" name="year" placeholder="Année de fabrication" onChange={this.inputChangedHandler} icon={faCalendar} validation={{ required: true }} required value={year} />

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postVehiclesStore(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));
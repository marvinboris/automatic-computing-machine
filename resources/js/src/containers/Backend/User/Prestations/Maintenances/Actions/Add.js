import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faPaperPlane, faFile, faBuilding, faCar } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../store/actions';

class Add extends Component {
    state = {
        customer_id: '',
        vehicle_id: '',
        date: '',
        delivery_date: '',
        ref: '',
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    dateInputFocused = e => {
        e.target.type = 'date';
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(e.target);
    }

    render() {
        const { customer_id, vehicle_id, date, delivery_date, ref } = this.state;
        const { backend: { maintenances: { customers } } } = this.props;

        const customersOptions = customers.sort((a, b) => a.name > b.name).map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);

        const customer = customers.find(customer => +customer.id === +customer_id);
        let vehiclesOptions;

        if (customer) vehiclesOptions = customer.vehicles.sort((a, b) => a.name > b.name).map(item => <option value={item.id} key={JSON.stringify(item)}>{item.ref}</option>);

        return <div>
            <Form onSubmit={this.submitHandler} className="row">
                <Input className="col-lg-6" type="select" name="customer_id" onChange={this.inputChangedHandler} placeholder="Client" icon={faBuilding} validation={{ required: true }} required value={customer_id}>
                    <option>Sélectionner un client</option>
                    {customersOptions}
                </Input>
                <Input className="col-lg-6" type="select" name="vehicle_id" onChange={this.inputChangedHandler} placeholder="Client" icon={faCar} validation={{ required: true }} required value={vehicle_id}>
                    <option>Sélectionner un véhicule</option>
                    {vehiclesOptions}
                </Input>
                <Input className="col-lg-6" type="text" name="ref" placeholder="Numéro de l'ordre" onChange={this.inputChangedHandler} icon={faFile} validation={{ required: true }} required value={ref} />
                <Input className="col-lg-6" type="text" name="date" placeholder="Date de l'ordre" onFocus={this.dateInputFocused} onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={date} />
                <Input className="col-lg-6" type="text" name="delivery_date" placeholder="Date de livraison prévue" onFocus={this.dateInputFocused} onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={delivery_date} />

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postMaintenancesStore(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faSignature, faPaperPlane, faBuilding, faFile, faClock, faCar } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Form } from 'reactstrap';

import Input from '../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../store/actions';
import { updateObject } from '../../../../../../shared/utility';

class Edit extends Component {
    state = {
        customer_id: '',
        vehicle_id: '',
        date: '',
        days: '',
        real_start_date: '',
        real_end_date: '',
        delivery_date: '',
        ref: '',
        id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.maintenance && prevState.vehicle_id === '') return updateObject(prevState, { ...nextProps.maintenance });
        return prevState;
    }

    inputChangedHandler = e => {
        const { name, value, type, files } = e.target;
        if (type === 'file') return this.setState({ [name]: files });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.submit(this.state.id, this.state);
    }

    render() {
        const { customer_id, vehicle_id, date, delivery_date, ref, real_start_date, real_end_date, days } = this.state;
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
                <Input className="col-lg-6" type="text" name="date" placeholder="Date de l'ordre" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={date} />
                <Input className="col-lg-6" type="text" name="delivery_date" placeholder="Date de livraison prévue" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={delivery_date} />
                <Input className="col-lg-6" type="text" name="real_start_date" placeholder="Début réel des travaux" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={real_start_date} />
                <Input className="col-lg-6" type="text" name="real_end_date" placeholder="Fin d'exécution" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={real_end_date} />
                <Input className="col-lg-6" type="number" name="days" placeholder="Nombre de jours effectifs" onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={days} />

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (id, data) => dispatch(actions.patchMaintenancesUpdate(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
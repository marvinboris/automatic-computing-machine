import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faPaperPlane, faFile, faBuilding, faCar, faGlassWhiskey, faRulerHorizontal, faTools } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../store/actions';

class Add extends Component {
    state = {
        customer_id: '',
        vehicle_id: '',
        gauging_id: '',
        date: '',
        nominal_capacity: '',
        gap_distance: '',
        average_centimetric_volume: '',
        total_height: '',
        total_capacity: '',
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
        const { customer_id, vehicle_id, gauging_id, date, nominal_capacity, gap_distance, average_centimetric_volume, total_height, total_capacity, ref } = this.state;
        const { backend: { gaugings: { customers, gaugings } } } = this.props;

        const customersOptions = customers.sort((a, b) => a.name > b.name).map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);
        const gaugingsOptions = gaugings.sort((a, b) => a.ref > b.ref).map(item => <option value={item.id} key={JSON.stringify(item)}>{item.ref}</option>);

        const customer = customers.find(customer => +customer.id === +customer_id);
        let vehiclesOptions;

        if (customer) vehiclesOptions = customer.vehicles.sort((a, b) => a.name > b.name).map(item => <option value={item.id} key={JSON.stringify(item)}>{item.ref}</option>);

        return <div>
            <Form onSubmit={this.submitHandler} className="row">
                <Input className="col-lg-6" type="select" name="customer_id" onChange={this.inputChangedHandler} placeholder="Client" icon={faBuilding} validation={{ required: true }} required value={customer_id}>
                    <option>Sélectionner un client</option>
                    {customersOptions}
                </Input>
                <Input className="col-lg-6" type="select" name="vehicle_id" onChange={this.inputChangedHandler} placeholder="Véhicule" icon={faCar} validation={{ required: true }} required value={vehicle_id}>
                    <option>Sélectionner un véhicule</option>
                    {vehiclesOptions}
                </Input>
                <Input className="col-lg-6" type="select" name="gauging_id" onChange={this.inputChangedHandler} placeholder="Jaugeage" icon={faTools} value={gauging_id}>
                    <option value={''}>Sélectionner un jaugeage</option>
                    {gaugingsOptions}
                </Input>
                <Input className="col-lg-6" type="text" name="ref" placeholder="Numéro de l'ordre" onChange={this.inputChangedHandler} icon={faFile} validation={{ required: true }} required value={ref} />
                <Input className="col-lg-6" type="text" name="date" placeholder="Date de l'ordre" onFocus={this.dateInputFocused} onChange={this.inputChangedHandler} icon={faClock} validation={{ required: true }} required value={date} />
                <Input className="col-lg-6" type="text" name="nominal_capacity" placeholder="Capacité nominale" onChange={this.inputChangedHandler} icon={faGlassWhiskey} validation={{ required: true }} required value={nominal_capacity} />
                <Input className="col-lg-6" type="text" name="gap_distance" placeholder="Distance de creux" onChange={this.inputChangedHandler} icon={faGlassWhiskey} validation={{ required: true }} required value={gap_distance} />
                <Input className="col-lg-6" type="text" name="average_centimetric_volume" placeholder="Volume centimétrique moyen" onChange={this.inputChangedHandler} icon={faRulerHorizontal} validation={{ required: true }} required value={average_centimetric_volume} />
                <Input className="col-lg-6" type="text" name="total_height" placeholder="Hauteur totale" onChange={this.inputChangedHandler} icon={faGlassWhiskey} validation={{ required: true }} required value={total_height} />
                <Input className="col-lg-6" type="text" name="total_capacity" placeholder="Capacité totale" onChange={this.inputChangedHandler} icon={faGlassWhiskey} validation={{ required: true }} required value={total_capacity} />

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postGaugingsStore(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));
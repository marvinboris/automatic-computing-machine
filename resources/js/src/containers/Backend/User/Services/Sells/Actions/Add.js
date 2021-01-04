import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane, faTrain, faBuilding, faTruck, faCalendar, faStickyNote } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../store/actions';

class Add extends Component {
    state = {
        organ_id: '',
        price: '',
        unit_id: '',
        name: '',
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
        const { organ_id, price, unit_id, name } = this.state;
        let { backend: { sells: { organs, units } } } = this.props;

        if (!organs) organs = [];
        if (!units) units = [];

        const organsOptions = organs.sort((a, b) => a.name > b.name).map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);
        const unitsOptions = units.sort((a, b) => a.name > b.name).map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);

        return <div>
            <Form onSubmit={this.submitHandler} className="row">
                <Input className="col-lg-6" type="select" name="organ_id" placeholder="Organe" onChange={this.inputChangedHandler} icon={faTrain} validation={{ required: true }} required value={organ_id}>
                    <option>Sélectionner un organe</option>
                    {organsOptions}
                </Input>
                <Input className="col-lg-6" type="select" name="unit_id" onChange={this.inputChangedHandler} placeholder="Unité" icon={faBuilding} validation={{ required: true }} required value={unit_id}>
                    <option>Sélectionner une unité</option>
                    {unitsOptions}
                </Input>
                <Input className="col-lg-6" type="text" name="name" placeholder="Nom" onChange={this.inputChangedHandler} icon={faStickyNote} validation={{ required: true }} required value={name} />
                <Input className="col-lg-6" type="number" name="price" placeholder="Prix" onChange={this.inputChangedHandler} icon={faTruck} validation={{ required: true }} required value={price} />

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postSellsStore(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));
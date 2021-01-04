import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faSignature, faPaperPlane, faTrain, faBuilding, faStickyNote, faTruck, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Form } from 'reactstrap';

import Input from '../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../store/actions';
import { updateObject } from '../../../../../../shared/utility';

class Edit extends Component {
    state = {
        organ_id: '',
        price: '',
        unit_id: '',
        name: '',
        id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.action && prevState.organ_id === '') return updateObject(prevState, { ...nextProps.action });
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
        const { organ_id, price, unit_id, name } = this.state;
        let { backend: { actions: { organs, units } } } = this.props;

        if (!organs) organs = [];
        if (!units) units = [];

        const organsOptions = organs.map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);
        const unitsOptions = units.map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);

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
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (id, data) => dispatch(actions.patchActionsUpdate(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
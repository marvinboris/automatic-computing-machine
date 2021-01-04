import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faPaperPlane, faBuilding, faStickyNote, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Form } from 'reactstrap';

import Input from '../../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../../store/actions';
import { updateObject } from '../../../../../../../shared/utility';

class Edit extends Component {
    state = {
        action_id: '',
        price: '',
        unit_id: '',
        name: '',
        id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.subAction && prevState.action_id === '') return updateObject(prevState, { ...nextProps.subAction });
        return prevState;
    }

    inputChangedHandler = e => {
        const { name, value, type, files } = e.target;
        if (type === 'file') return this.setState({ [name]: files });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.submit(this.props.match.params.actionId, this.state.id, this.state);
    }

    render() {
        const { price, unit_id, name } = this.state;
        let { backend: { actions: { units } } } = this.props;

        if (!units) units = [];

        const unitsOptions = units.map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);

        return <div>
            <Form onSubmit={this.submitHandler} className="row">
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
    submit: (actionId, id, data) => dispatch(actions.patchSubActionsUpdate(actionId, id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
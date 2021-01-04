import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faSignature, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Form } from 'reactstrap';

import Input from '../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../store/actions';
import { updateObject } from '../../../../../../shared/utility';

class Edit extends Component {
    state = {
        name: '',
        id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.vehicleType && prevState.name === '') return updateObject(prevState, { ...nextProps.vehicleType });
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
        const { name, id } = this.state;

        return <div>
            <Form id={id} onSubmit={this.submitHandler} className="row">
                <Input className="col-lg-12" type="text" name="name" placeholder="Nom du type de véhicule" onChange={this.inputChangedHandler} icon={faSignature} validation={{ required: true }} required value={name} />

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (id, data) => dispatch(actions.patchVehicleTypesUpdate(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
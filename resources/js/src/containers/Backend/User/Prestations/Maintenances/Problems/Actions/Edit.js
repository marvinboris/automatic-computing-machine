import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faSignature, faPaperPlane, faTrain, faBuilding, faStickyNote, faTruck, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Form } from 'reactstrap';

import Input from '../../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../../store/actions';
import { updateObject } from '../../../../../../../shared/utility';

class Edit extends Component {
    state = {
        name: '',
        id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.problem && prevState.name === '') return updateObject(prevState, { ...nextProps.problem });
        return prevState;
    }

    inputChangedHandler = e => {
        const { name, value, type, files } = e.target;
        if (type === 'file') return this.setState({ [name]: files });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.submit(this.props.match.params.maintenanceId, this.state.id, this.state);
    }

    render() {
        const { name } = this.state;

        return <div>
            <Form onSubmit={this.submitHandler} className="row">
                <Input className="col-lg-12" type="text" name="name" placeholder="Intitulé" onChange={this.inputChangedHandler} icon={faStickyNote} validation={{ required: true }} required value={name} />

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (maintenanceId, id, data) => dispatch(actions.patchProblemsUpdate(maintenanceId, id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
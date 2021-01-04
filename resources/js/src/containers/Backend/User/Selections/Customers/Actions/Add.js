import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../store/actions';
import { faClock, faCode, faSignature, faList, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class Add extends Component {
    state = {
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
        const { name } = this.state;

        return <div>
            <Form onSubmit={this.submitHandler} className="row">
                <Input className="col-lg-12" type="text" name="name" placeholder="Nom du client" onChange={this.inputChangedHandler} icon={faSignature} validation={{ required: true }} required value={name} />

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: data => dispatch(actions.postCustomersStore(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));
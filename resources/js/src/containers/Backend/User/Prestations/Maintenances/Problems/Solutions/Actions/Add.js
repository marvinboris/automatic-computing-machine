import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faClock, faCode, faSignature, faList, faPaperPlane, faTrain, faBuilding, faTruck, faCalendar, faStickyNote, faToolbox, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../../../store/actions';

class Add extends Component {
    state = {
        organ_id: '',
        quantity: '',
        solution: '',
        solution_type: '',
        solution_id: '',
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        if (name === 'solution') {
            const solution = JSON.parse(value);
            this.setState({ solution_id: solution.id, solution_type: solution.type });
        }
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(this.props.match.params.maintenanceId, this.props.match.params.problemId, e.target);
    }

    render() {
        const { organ_id, solution, solution_type, solution_id, quantity } = this.state;
        let { backend: { maintenances: { organs } } } = this.props;

        if (!organs) organs = [];

        const organsOptions = organs.sort((a, b) => a.name > b.name).map(item => <option value={item.id} key={JSON.stringify(item)}>{item.name}</option>);

        let solutionsOptions; 
        const organ = organs.find(organ => +organ.id === +organ_id);
        if (organ) solutionsOptions = organ.solutions.sort((a, b) => a.name > b.name).map(item => <option value={item.value} type={item.type} key={JSON.stringify(item)}>{item.name}</option>);

        return <div>
            <Form onSubmit={this.submitHandler} className="row">
                <Input className="col-lg-6" type="select" name="organ_id" onChange={this.inputChangedHandler} placeholder="Organe" icon={faToolbox} validation={{ required: true }} required value={organ_id}>
                    <option>Sélectionner un organe</option>
                    {organsOptions}
                </Input>
                <Input className="col-lg-6" type="select" name="solution" onChange={this.inputChangedHandler} placeholder="Solution" icon={faCheckCircle} validation={{ required: true }} required value={solution}>
                    <option>Sélectionner une solution</option>
                    {solutionsOptions}
                </Input>
                <input type="hidden" name="solution_type" value={solution_type} />
                <input type="hidden" name="solution_id" value={solution_id} />
                <Input className="col-lg-6" type="text" name="quantity" placeholder="Quantité" onChange={this.inputChangedHandler} icon={faStickyNote} validation={{ required: true }} required value={quantity} />

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmit: (maintenanceId, problemId, data) => dispatch(actions.postSolutionsStore(maintenanceId, problemId, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));
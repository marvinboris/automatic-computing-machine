import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faSignature, faPaperPlane, faBuilding, faFile, faClock, faCar, faRulerVertical, faGlassWhiskey, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Form, Col, Row } from 'reactstrap';

import Input from '../../../../../../components/Backend/UI/Input/Input';
import BetweenButton from '../../../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../../../store/actions';
import { updateObject } from '../../../../../../shared/utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Fields = ({ heights, volumes, onChange, onPlus, onMinus }) => heights.map((height, i) => <Col xs={12} key={Math.random()}>
    <Row className="align-items-center">
        <Input className="col-lg-5" type="number" name="heights[]" placeholder={"Hauteur " + (i + 1)} onChange={e => onChange(e, i)} icon={faRulerVertical} validation={{ required: true }} required defaultValue={heights[i]} />
        <Input className="col-lg-5" type="number" name="volumes[]" placeholder={"Volume " + (i + 1)} onChange={e => onChange(e, i)} icon={faGlassWhiskey} validation={{ required: true }} required defaultValue={volumes[i]} />
        <Col className="text-center pb-3"><FontAwesomeIcon size="2x" icon={faPlusCircle} className="text-green cursor-pointer" onClick={onPlus} /></Col>
        <Col className="text-center pb-3"><FontAwesomeIcon size="2x" icon={faMinusCircle} className="text-red cursor-pointer" onClick={onMinus} /></Col>
    </Row>
</Col>);

class Edit extends Component {
    state = {
        heights: ['0'],
        volumes: ['0'],
        id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.gauging && prevState.id === '') return updateObject(prevState, { ...nextProps.gauging });
        return prevState;
    }

    inputChangedHandler = (e, i) => {
        const { name, value, type, files } = e.target;
        e.persist();
        if (name === 'heights[]') {
            const { heights } = this.state;
            heights[i] = value;
            return this.setState({ heights }, () => e.target.focus());
        }
        if (name === 'volumes[]') {
            const { volumes } = this.state;
            volumes[i] = value;
            return this.setState({ volumes });
        }
        this.setState({ [name]: value }, () => e.target.focus());
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.submit(this.state.id, this.state);
    }

    plusBtnClickedHandler = index => {
        const { heights, volumes } = this.state;
        const firstPartHeights = heights.filter((h, i) => i <= index);
        const secondPartHeights = heights.filter((h, i) => i > index);

        const firstPartVolumes = volumes.filter((h, i) => i <= index);
        const secondPartVolumes = volumes.filter((h, i) => i > index);

        this.setState({
            heights: [...firstPartHeights, '0', ...secondPartHeights],
            volumes: [...firstPartVolumes, '0', ...secondPartVolumes],
        });
    }

    minusBtnClickedHandler = index => {
        const { heights, volumes } = this.state;
        this.setState({
            heights: heights.filter((h, i) => i !== index),
            volumes: volumes.filter((h, i) => i !== index),
        });
    }

    render() {
        let { heights, volumes } = this.state;

        if (heights.length === 0) heights = ['0'];
        if (volumes.length === 0) volumes = ['0'];

        const fields = <Fields heights={heights} volumes={volumes} onPlus={this.plusBtnClickedHandler} onMinus={this.minusBtnClickedHandler} onChange={this.inputChangedHandler} />;
        
        return <div>
            <Form onSubmit={this.submitHandler} className="row">
                {fields}

                <FormGroup className="col-12">
                    <BetweenButton color="brokenblue" icon={faPaperPlane}>Envoyer</BetweenButton>
                </FormGroup>
            </Form>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    submit: (id, data) => dispatch(actions.patchGaugingsUpdate(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
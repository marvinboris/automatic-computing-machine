import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faToolbox } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../components/Backend/UI/List/List';
import Error from '../../../../../components/Error/Error';
import CustomSpinner from '../../../../../components/UI/CustomSpinner/CustomSpinner';
import Feedback from '../../../../../components/Feedback/Feedback';
import Delete from '../../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../../components/Backend/UI/View/View';

import Edit from './Actions/Edit';
import Add from './Actions/Add';
import RawView from './Actions/View';

import * as actions from '../../../../../store/actions';
import { updateObject } from '../../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { units: { loading, error, message, units } } } = this.props;

        let content;
        let errors;
        let feedback;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (units) {
                feedback = <Feedback message={message} />;

                const data = units.map(unit => {
                    const viewContent = <RawView unit={unit} />;

                    const editContent = <Edit unit={unit} />;

                    return updateObject(unit, {
                        action: <div className="text-center">
                            <View title={'Détails de l\'unité: ' + unit.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier l\'unité: ' + unit.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(unit.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(units)} bordered add="Ajouter une unité" content={<Add />} icon={faToolbox} title="Unités" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Nom de l\'unité', key: 'name' },
                                    { name: 'Description', key: 'description' },
                                    { name: 'Action', key: 'action' }
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Unités" icon={faToolbox} />
                    <SpecialTitle user icon={faToolbox}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Unités</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(actions.unitsReset()),
    get: () => dispatch(actions.getUnits()),
    delete: id => dispatch(actions.deleteUnits(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
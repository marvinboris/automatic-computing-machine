import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faBuilding } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../components/Backend/UI/List/List';
import Error from '../../../../../components/Error/Error';
import CustomSpinner from '../../../../../components/UI/CustomSpinner/CustomSpinner';
import WithTooltip from '../../../../../components/UI/WithTooltip/WithTooltip';
import Feedback from '../../../../../components/Feedback/Feedback';
import Delete from '../../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../../components/Backend/UI/View/View';
import Counter from '../../../../../components/Backend/UI/Counter/Counter';

import Edit from './Actions/Edit';
import Add from './Actions/Add';
import RawView from './Actions/View';

import * as actions from '../../../../../store/actions';
import { updateObject, convertDate, convertTime } from '../../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { builders: { loading, error, message, builders } } } = this.props;

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
            if (builders) {
                feedback = <Feedback message={message} />;

                const data = builders.map(builder => {
                    const viewContent = <RawView builder={builder} />;

                    const editContent = <Edit builder={builder} />;

                    return updateObject(builder, {
                        action: <div className="text-center">
                            <View title={'Détails du constructeur: ' + builder.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier le constructeur: ' + builder.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(builder.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(builders)} bordered add="Ajouter un constructeur" content={<Add />} icon={faBuilding} title="Constructeurs" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Nom du constructeur', key: 'name' },
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
                    <Breadcrumb main="Constructeurs" icon={faBuilding} />
                    <SpecialTitle user icon={faBuilding}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Constructeurs</Subtitle>
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
    reset: () => dispatch(actions.buildersReset()),
    get: () => dispatch(actions.getBuilders()),
    delete: id => dispatch(actions.deleteBuilders(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
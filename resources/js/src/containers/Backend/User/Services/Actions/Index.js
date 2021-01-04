import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faCalendarAlt, faFileArchive, faList } from '@fortawesome/free-solid-svg-icons';

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
import { updateObject, convertDate, convertTime } from '../../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { actions: { loading, error, message, actions } } } = this.props;

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
            if (actions) {
                feedback = <Feedback message={message} />;

                const data = actions.map(action => {
                    const viewContent = <RawView action={action} />;

                    const editContent = <Edit action={action} />;

                    return updateObject(action, {
                        sub_actions: <Link to={'/user/services/actions/' + action.id + '/sub-actions/'} className="text-decoration-none">
                            <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faList} className="text-orange" fixedWidth /> {action.sub_actions.length} sous-opération{action.sub_actions.length > 1 ? 's' : ''}</Badge>
                        </Link>,
                        action: <div className="text-center">
                            <View title={'Détails de l\'opération: ' + action.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier l\'opération: ' + action.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(action.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(actions)} bordered add="Ajouter une opération" content={<Add />} icon={faCalendarAlt} title="Opérations" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Nom de l\'organe', key: 'organ' },
                                    { name: 'Nom de l\'opération', key: 'name' },
                                    { name: 'Unité', key: 'unit' },
                                    { name: 'Prix', key: 'price' },
                                    { name: 'Sous-opérations', key: 'sub_actions', minWidth: 190 },
                                    { name: 'Action', key: 'action' },
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Opérations" icon={faCalendarAlt} />
                    <SpecialTitle user icon={faCalendarAlt}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Opérations</Subtitle>
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
    reset: () => dispatch(actions.actionsReset()),
    get: () => dispatch(actions.getActions()),
    delete: id => dispatch(actions.deleteActions(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
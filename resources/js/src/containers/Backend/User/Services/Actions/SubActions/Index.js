import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../../components/Backend/UI/List/List';
import Error from '../../../../../../components/Error/Error';
import CustomSpinner from '../../../../../../components/UI/CustomSpinner/CustomSpinner';
import Feedback from '../../../../../../components/Feedback/Feedback';
import Delete from '../../../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../../../components/Backend/UI/View/View';

import Edit from './Actions/Edit';
import Add from './Actions/Add';
import RawView from './Actions/View';

import * as actions from '../../../../../../store/actions';
import { updateObject } from '../../../../../../shared/utility';

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
                const action = actions.find(action => +action.id === +this.props.match.params.actionId);

                let subActions;
                if (action) subActions = [...action.sub_actions];
                else subActions = [];

                feedback = <Feedback message={message} />;

                const data = subActions.map(subAction => {
                    const viewContent = <RawView subAction={subAction} />;

                    const editContent = <Edit subAction={subAction} />;

                    return updateObject(subAction, {
                        actions: <div className="text-center">
                            <View title={'Détails de la sous-opération: ' + subAction.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier la sous-opération: ' + subAction.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(this.props.match.params.actionId, subAction.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(subActions)} bordered add="Ajouter une sous-opération" content={<Add />} icon={faCalendarAlt} title="Sous-opérations" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Nom de l\'opération', key: 'action' },
                                    { name: 'Nom de la sous-opération', key: 'name' },
                                    { name: 'Unité', key: 'unit' },
                                    { name: 'Prix', key: 'price' },
                                    { name: 'Action', key: 'actions' },
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Sous-opérations" items={[{ to: '/user/services/actions', content: 'Opérations' }]} icon={faCalendarAlt} />
                    <SpecialTitle user icon={faCalendarAlt}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Sous-opérations</Subtitle>
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
    delete: (actionId, id) => dispatch(actions.deleteSubActions(actionId, id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
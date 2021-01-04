import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faCalendarAlt, faFileArchive, faList, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../../../components/Backend/UI/List/List';
import Error from '../../../../../../../components/Error/Error';
import CustomSpinner from '../../../../../../../components/UI/CustomSpinner/CustomSpinner';
import Feedback from '../../../../../../../components/Feedback/Feedback';
import Delete from '../../../../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../../../../components/Backend/UI/View/View';

import Edit from './Actions/Edit';
import Add from './Actions/Add';
import RawView from './Actions/View';

import * as actions from '../../../../../../../store/actions';
import { updateObject, convertDate, convertTime } from '../../../../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { maintenances: { loading, error, message, maintenances } } } = this.props;

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
            if (maintenances) {
                const maintenance = maintenances.find(maintenance => +maintenance.id === +this.props.match.params.maintenanceId);

                let problems;
                if (maintenance) problems = [...maintenance.problems];
                else problems = [];

                const problem = problems.find(problem => +problem.id === +this.props.match.params.problemId);

                let solutions;
                if (problem) solutions = [...problem.solutions];
                else solutions = [];

                feedback = <Feedback message={message} />;

                const data = solutions.map(solution => {
                    const viewContent = <RawView solution={solution} />;

                    const editContent = <Edit solution={solution} />;

                    return updateObject(solution, {
                        action: <div className="text-center">
                            <View title={'Détails de la solution: ' + solution.action} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier la solution: ' + solution.action} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(this.props.match.params.maintenanceId, this.props.match.params.problemId, solution.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(solutions)} bordered add="Ajouter une solution" content={<Add />} icon={faCheckCircle} title="Solutions" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Numéro d\'ordre de la maintenance', key: 'maintenance' },
                                    { name: 'Intitulé du problème', key: 'problem' },
                                    { name: 'Intitulé de la solution', key: 'solution' },
                                    { name: 'Quantité', key: 'quantity' },
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
                    <Breadcrumb main="Solutions" items={[{ to: '/user/prestations/maintenances', content: 'Maintenances' }, { to: `/user/prestations/maintenances/${this.props.match.params.maintenanceId}/problems`, content: 'Problèmes' }]} icon={faCheckCircle} />
                    <SpecialTitle user icon={faCheckCircle}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Solutions</Subtitle>
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
    reset: () => dispatch(actions.maintenancesReset()),
    get: () => dispatch(actions.getMaintenances()),
    delete: (maintenanceId, problemId, id) => dispatch(actions.deleteSolutions(maintenanceId, problemId, id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
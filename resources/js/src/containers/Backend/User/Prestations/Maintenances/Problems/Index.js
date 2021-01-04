import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faCalendarAlt, faFileArchive, faList, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
import { updateObject, convertDate, convertTime } from '../../../../../../shared/utility';

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

                feedback = <Feedback message={message} />;

                const data = problems.map(problem => {
                    const viewContent = <RawView problem={problem} />;

                    const editContent = <Edit problem={problem} />;

                    return updateObject(problem, {
                        solutions: <Link to={`/user/prestations/maintenances/${this.props.match.params.maintenanceId}/problems/${problem.id}/solutions/`} className="text-decoration-none">
                            <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faList} className="text-orange" fixedWidth /> {problem.solutions.length} solution{problem.solutions.length > 1 ? 's' : ''}</Badge>
                        </Link>,
                        action: <div className="text-center">
                            <View title={'Détails du problème: ' + problem.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier le problème: ' + problem.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(this.props.match.params.maintenanceId, problem.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(problems)} bordered add="Ajouter un problème" content={<Add />} icon={faTimesCircle} title="Problèmes" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Numéro d\'ordre de la maintenance', key: 'maintenance' },
                                    { name: 'Intitulé du problème', key: 'name' },
                                    { name: 'Solutions', key: 'solutions', minWidth: 130 },
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
                    <Breadcrumb main="Problèmes" items={[{ to: '/user/prestations/maintenances', content: 'Maintenances' }]} icon={faTimesCircle} />
                    <SpecialTitle user icon={faTimesCircle}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Problèmes</Subtitle>
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
    delete: (maintenanceId, id) => dispatch(actions.deleteProblems(maintenanceId, id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faTools, faList, faPrint } from '@fortawesome/free-solid-svg-icons';

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
import { updateObject, convertDate } from '../../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    exportData = async (url, name) => {
        const token = localStorage.getItem('token');

        try {
            const formData = new FormData();

            formData.append('name', name);

            const res = await fetch(url, {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: token
                }
            });

            const resData = await res.blob();

            const downloadLink = URL.createObjectURL(resData);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = downloadLink;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(downloadLink);
        } catch (err) {
            console.log(err)
        }
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
                feedback = <Feedback message={message} />;

                const data = maintenances.map(maintenance => {
                    const viewContent = <RawView maintenance={maintenance} />;

                    const editContent = <Edit maintenance={maintenance} />;

                    return updateObject(maintenance, {
                        created_at: convertDate(maintenance.created_at),
                        date: convertDate(maintenance.date),
                        delivery_date: convertDate(maintenance.delivery_date),
                        real_start_date: convertDate(maintenance.real_start_date),
                        real_end_date: convertDate(maintenance.real_end_date),
                        proforma: <Button color="primary" size="sm" className="rounded-2" onClick={() => this.exportData(`/api/user/maintenances/${maintenance.id}/proforma`, `${maintenance.ref}.pdf`)}>
                            Proforma
                            <FontAwesomeIcon icon={faPrint} fixedWidth className="ml-1" />
                        </Button>,
                        problems: <Link to={`/user/prestations/maintenances/${maintenance.id}/problems/`} className="text-decoration-none">
                            <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faList} className="text-orange" fixedWidth /> {maintenance.problems.length} problème{maintenance.problems.length > 1 ? 's' : ''}</Badge>
                        </Link>,
                        action: <div className="text-center">
                            <View title={'Détails de la maintenance: ' + maintenance.ref} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier la maintenance: ' + maintenance.ref} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue mr-2" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(maintenance.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(maintenances)} bordered add="Ajouter une maintenance" content={<Add />} icon={faTools} title="Maintenances" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Client', key: 'customer' },
                                    { name: 'Véhicule', key: 'vehicle' },
                                    { name: 'Numéro de l\'ordre', key: 'ref' },
                                    { name: 'Date de l\'ordre', key: 'date' },
                                    { name: 'Date de livraison prévue', key: 'delivery_date' },
                                    { name: 'Problèmes', key: 'problems', minWidth: 150 },
                                    { name: 'Début réel des travaux', key: 'real_start_date' },
                                    { name: 'Fin d\'exécution', key: 'real_end_date' },
                                    { name: 'Nombre de jours effectifs', key: 'days' },
                                    { name: 'Impression', key: 'proforma', minWidth: 140 },
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
                    <Breadcrumb main="Maintenances" icon={faTools} />
                    <SpecialTitle user icon={faTools}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Maintenances</Subtitle>
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
    patchMaintenancesUpdate: (id, data) => dispatch(actions.patchMaintenancesUpdate(id, data)),
    delete: id => dispatch(actions.deleteMaintenances(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
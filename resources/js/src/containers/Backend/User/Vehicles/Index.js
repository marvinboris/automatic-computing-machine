import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../components/Backend/UI/View/View';

import Edit from './Actions/Edit';
import Add from './Actions/Add';
import RawView from './Actions/View';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate, convertTime } from '../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { vehicles: { loading, error, message, vehicles } } } = this.props;

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
            if (vehicles) {
                feedback = <Feedback message={message} />;

                const data = vehicles.map(vehicle => {
                    const viewContent = <RawView vehicle={vehicle} />;

                    const editContent = <Edit vehicle={vehicle} />;

                    return updateObject(vehicle, {
                        created_at: convertDate(vehicle.created_at),
                        action: <div className="text-center">
                            <View title={'Détails du véhicule: ' + vehicle.ref} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier le véhicule: ' + vehicle.ref} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(vehicle.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(vehicles)} bordered add="Ajouter un véhicule" content={<Add />} icon={faCalendarAlt} title="Véhicules" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Numéro d\'immatriculation', key: 'ref' },
                                    { name: 'Client', key: 'customer' },
                                    { name: 'Constructeur', key: 'builder' },
                                    { name: 'Numéro de châssis', key: 'chassis_number' },
                                    { name: 'Numéro de série', key: 'serial_number' },
                                    { name: 'Type', key: 'vehicle_type' },
                                    { name: 'Capacité nominale', key: 'nominal_capacity' },
                                    { name: 'Année de fabrication', key: 'year' },
                                    { name: 'Date d\'ajout', key: 'created_at' },
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
                    <Breadcrumb main="Véhicules" icon={faCalendarAlt} />
                    <SpecialTitle user icon={faCalendarAlt}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Véhicules</Subtitle>
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
    reset: () => dispatch(actions.vehiclesReset()),
    get: () => dispatch(actions.getVehicles()),
    delete: id => dispatch(actions.deleteVehicles(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
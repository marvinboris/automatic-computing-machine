import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faFilePdf, faFileImage, faUser, faBook, faSpinner, faTimesCircle, faCheckCircle, faStopwatch, faSignInAlt, faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';

// Components
import WorkTimeTracker from './WorkTimeTracker/WorkTimeTracker';
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../components/Backend/Dashboard/Card/Card';
import Table from '../../../../components/Backend/UI/Table/Table';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import View from '../../../../components/Backend/UI/View/View';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import BetweenButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';

import VehicleView from '../../../Backend/User/Vehicles/Actions/View';
import VehicleEdit from '../../../Backend/User/Vehicles/Actions/Edit';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate, timeFromTimestamp, convertTime } from '../../../../shared/utility';

class Dashboard extends Component {
    state = {
        blocksData: null,
        vehicles: null, maintenances: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.dashboard.blocksData && !prevState.blocksData) {
            return updateObject(prevState, { ...nextProps.backend.dashboard });
        }
        // if (nextProps.backend.requests.requests && !prevState.requestsRequests) return updateObject(prevState, { requestsRequests: nextProps.backend.requests.requests });
        return prevState;
    }

    componentDidMount() {
        this.props.getUserDashboard();
    }

    componentDidUpdate(prevProps, prevState) {
        const { dashboard } = this.props.backend;
    }

    componentWillUnmount() {
        this.props.dashboardReset();
    }

    render() {
        let { blocksData, maintenances, vehicles } = this.state;
        let { backend: { dashboard: { loading, error } } } = this.props;

        let content = null;
        let errors = null;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (blocksData) {
                const { totalVehicles, totalMaintenances, totalActions, totalCustomers } = blocksData;
                const data = [
                    {
                        title: 'Nombre de véhicules',
                        children: totalVehicles,
                        icon: faClock,
                        link: '/user/vehicles/',
                        color: 'paleblue',
                        details: 'Véhicules',
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'orange'
                    },
                    {
                        title: 'Nombre de maintenances',
                        children: totalMaintenances,
                        icon: faLandmark,
                        link: '/user/maintenances/',
                        color: 'nightblue',
                        details: 'Maintenances',
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Nombre d\'actions',
                        children: totalActions,
                        icon: faEnvelope,
                        link: '/user/actions',
                        color: 'pink',
                        details: 'Actions',
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Nombre de clients',
                        children: totalCustomers,
                        icon: faStopwatch,
                        link: '/user/customers',
                        color: 'green',
                        details: 'Clients',
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white',
                    }
                ];

                const cards = data.map(({ title, titleColor, icon, link, color, children, details, circleBorder, circleColor, light }, index) => <Card color={color} key={index} title={title} titleColor={titleColor} details={details} circleBorder={circleBorder} circleColor={circleColor} icon={icon} link={link} light={light}>{children}</Card>);

                const maintenancesData = maintenances.map(day => {
                    // const viewContent = <RequestView day={day} country={country} />;

                    // const editContent = <Edit day={updateObject(day, { page_status: 'dashboard' })} />;

                    return updateObject(day, {
                        date: convertDate(day.date),
                        delivery_date: convertDate(day.delivery_date),
                        real_start_date: convertDate(day.real_start_date),
                        real_end_date: convertDate(day.real_end_date),
                    });
                });

                const vehiclesData = vehicles.map(vehicle => {
                    const viewContent = <VehicleView vehicle={vehicle} />;

                    const editContent = <VehicleEdit vehicle={vehicle} />;

                    return updateObject(vehicle, {
                        created_at: convertDate(vehicle.created_at),
                        action: <div className="text-center">
                            <View title={'Détails du véhicule: ' + vehicle.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier le véhicule: ' + vehicle.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                        </div>
                    });
                });

                content = (
                    <>
                        <Row>
                            {cards}
                        </Row>

                        <Row className="mt-5">
                            <Table array={maintenancesData} draggable closable title="Dernières maintenances" icon={faTasks} bordered limit={5} lg={6} outerClassName="pt-3" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Exploitant', key: 'customer' },
                                    { name: 'N° d\'ordre', key: 'ref' },
                                    { name: 'Date d\'ordre', key: 'date' },
                                    { name: 'Date de livraison', key: 'delivery_date' },
                                    { name: 'Début réel des travaux', key: 'real_start_date' },
                                    { name: 'Nombre de jours effectifs', key: 'days' },
                                    { name: 'Fin d\'exécution', key: 'real_end_date' },
                                ]}>
                                <Link to="/user/maintenances" className="text-secondary">{'Voir la liste complète | >'}</Link>
                            </Table>

                            <Table array={vehiclesData} draggable closable title="Véhicules récents" icon={faEnvelope} bordered limit={5} lg={6} outerClassName="pt-3" className="bg-white shadow-sm"
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
                                ]}>
                                <Link to="/user/vehicles" className="text-secondary">{'Voir la liste complète | >'}</Link>
                            </Table>
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Tableau de bord" icon={faTachometerAlt} />
                    <SpecialTitle user icon={faTachometerAlt}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Tableau de bord</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    getUserDashboard: () => dispatch(actions.getUserDashboard()),
    dashboardReset: () => dispatch(actions.dashboardReset()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
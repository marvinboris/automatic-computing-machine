import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Nav, UncontrolledDropdown, DropdownToggle, Badge, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendar, faPowerOff, faTimes, faSpinner, faCheckCircle, faTimesCircle, faExclamationTriangle, faComments, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

// import NavigationItem from './NavigationItem/NavigationItem';
// import MyDropdownItem from '../../../Navigation/NavigationItems/DropdownItem/DropdownItem';

export default ({ data, sidedrawerToggle, logoutHandler, role, date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return <div className="px-3 bg-blue flex-fill d-flex align-items-center text-white text-large position-relative" style={{ height: 70 }}>
        <Nav className="mr-auto d-flex align-items-center" navbar>
            <FontAwesomeIcon icon={faBars} className="mr-3 mr-lg-5 ml-2 ml-lg-4" style={{ cursor: 'pointer' }} onClick={sidedrawerToggle} size="2x" />
            <div className="mr-4 d-none d-lg-block">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-yellow" />
                <span className="text-300">Date du jour</span> <strong>{weekDay} {day} {month} {year}</strong>
            </div>
            <div className="d-none d-lg-block">
                <FontAwesomeIcon icon={faClock} className="text-yellow mr-2" />
                <strong>HEURE : {hours} : {minutes} : {seconds}</strong>
            </div>
        </Nav>
        <div className="ml-auto d-flex align-items-center">
            <div onClick={toggle} style={{ cursor: 'pointer' }} className="d-flex align-items-center ml-lg-5">
                <span className="d-none d-xl-inline">Déconnexion</span>
                <FontAwesomeIcon icon={faPowerOff} size="lg" className="ml-2 text-yellow" />
            </div>
        </div>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Déconnexion</ModalHeader>
            <ModalBody className="text-center">
                <p>Voulez-vous vous déconnecter?</p>
                <div>
                    <Button color="darkblue" onClick={logoutHandler}>Déconnexion <FontAwesomeIcon icon={faPowerOff} fixedWidth /></Button>{' '}
                    <Button color="orange" onClick={toggle}>Annuler <FontAwesomeIcon icon={faTimes} fixedWidth /></Button>
                </div>
            </ModalBody>
        </Modal>
    </div>;
}
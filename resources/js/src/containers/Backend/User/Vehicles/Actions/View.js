import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ vehicle }) => {
    return <>
        <Row className="m-0 p-3 rounded bg-green-20">
            <Col xs={12}>
                <div className="text-green text-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                        Détails du véhicule
                    </div>
                <hr />
            </Col>
            <I label="Type de véhicule">{vehicle.vehicle_type}</I>
            <I label="Constructeur">{vehicle.builder}</I>
            <I label="Client">{vehicle.customer}</I>
            <I label="Numéro d'immatriculation">{vehicle.ref}</I>
            <I label="Numéro de série">{vehicle.serial_number}</I>
            <I label="Numéro de châssis">{vehicle.chassis_number}</I>
            <I label="Capacité nominale">{vehicle.nominal_capacity}</I>
            <I label="Année de fabrication">{vehicle.year}</I>
        </Row>
    </>;
}
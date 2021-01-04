import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import { convertDate } from '../../../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ gauging }) => {
    return <>
        <Row className="m-0 p-3 rounded bg-green-20">
            <Col xs={12}>
                <div className="text-green text-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                        Détails du jaugeage
                    </div>
                <hr />
            </Col>
            <I label="Nom du client">{gauging.customer}</I>
            <I label="Nom du véhicule">{gauging.vehicle}</I>
            <I label="Numéro de l'ordre">{gauging.ref}</I>
            <I label="Date de l'ordre">{convertDate(gauging.date)}</I>
            <I label="Capacité nominale">{gauging.nominal_capacity}</I>
            <I label="Distance de creux">{gauging.gap_distance}</I>
            <I label="Volume centimétrique moyen">{gauging.average_centimetric_volume}</I>
            <I label="Hauteur totale">{gauging.total_height}</I>
            <I label="Capacité totale">{gauging.total_capacity}</I>
        </Row>
    </>;
}
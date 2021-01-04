import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import { convertDate } from '../../../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ maintenance }) => {
    return <>
        <Row className="m-0 p-3 rounded bg-green-20">
            <Col xs={12}>
                <div className="text-green text-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                        Détails de la maintenance
                    </div>
                <hr />
            </Col>
            <I label="Nom du client">{maintenance.customer}</I>
            <I label="Nom du véhicule">{maintenance.vehicle}</I>
            <I label="Numéro de l'ordre">{maintenance.ref}</I>
            <I label="Date de l'ordre">{convertDate(maintenance.date)}</I>
            <I label="Date de livraison prévue">{convertDate(maintenance.delivery_date)}</I>
            <I label="Début réel des travaux">{convertDate(maintenance.real_start_date)}</I>
            <I label="Fin d'exécution">{convertDate(maintenance.real_end_date)}</I>
            <I label="Nombre de jours effectifs">{convertDate(maintenance.days)}</I>
        </Row>
    </>;
}
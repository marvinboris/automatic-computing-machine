import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ subAction }) => {
    return <>
        <Row className="m-0 p-3 rounded bg-green-20">
            <Col xs={12}>
                <div className="text-green text-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                        Détails de la sous-opération
                    </div>
                <hr />
            </Col>
            <I label="Action">{subAction.action}</I>
            <I label="Nom">{subAction.name}</I>
            <I label="Unité">{subAction.unit}</I>
            <I label="Prix">{subAction.price}</I>
        </Row>
    </>;
}
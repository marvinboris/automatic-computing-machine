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
import Measures from './Actions/Measures';
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
        let { backend: { gaugings: { loading, error, message, gaugings } } } = this.props;

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
            if (gaugings) {
                feedback = <Feedback message={message} />;

                const data = gaugings.map(gauging => {
                    const viewContent = <RawView gauging={gauging} />;

                    const editContent = <Edit gauging={gauging} />;

                    const measuresContent = <Measures gauging={gauging} />;

                    return updateObject(gauging, {
                        created_at: convertDate(gauging.created_at),
                        date: convertDate(gauging.date),
                        proforma: <Button color="primary" size="sm" className="rounded-2" onClick={() => this.exportData(`/api/user/gaugings/${gauging.id}/proforma`, `${gauging.ref}.pdf`)}>
                            Proforma
                            <FontAwesomeIcon icon={faPrint} fixedWidth className="ml-1" />
                        </Button>,
                        measures: <View title={'Mesures du jaugeage: ' + gauging.ref} content={measuresContent}>
                            <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faList} className="text-orange" fixedWidth /> {gauging.measures.length} mesure{gauging.measures.length > 1 ? 's' : ''}</Badge>
                        </View>,
                        action: <div className="text-center">
                            <View title={'Détails du jaugeage: ' + gauging.ref} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier le jaugeage: ' + gauging.ref} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue mr-2" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(gauging.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(gaugings)} bordered add="Ajouter un jaugeage" content={<Add />} icon={faTools} title="Jaugeages" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Client', key: 'customer' },
                                    { name: 'Véhicule', key: 'vehicle' },
                                    { name: 'Numéro de l\'ordre', key: 'ref' },
                                    { name: 'Date de l\'ordre', key: 'date' },
                                    { name: 'Capacité nominale', key: 'nominal_capacity' },
                                    { name: 'Mesures', key: 'measures', minWidth: 150 },
                                    { name: 'Distance de creux', key: 'gap_distance' },
                                    { name: 'Volume centimétrique moyen', key: 'average_centimetric_volume' },
                                    { name: 'Hauteur totale', key: 'total_height' },
                                    { name: 'Capacité totale', key: 'total_capacity' },
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
                    <Breadcrumb main="Jaugeages" icon={faTools} />
                    <SpecialTitle user icon={faTools}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Jaugeages</Subtitle>
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
    reset: () => dispatch(actions.gaugingsReset()),
    get: () => dispatch(actions.getGaugings()),
    patchGaugingsUpdate: (id, data) => dispatch(actions.patchGaugingsUpdate(id, data)),
    delete: id => dispatch(actions.deleteGaugings(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faCalendarAlt, faFileArchive, faList } from '@fortawesome/free-solid-svg-icons';

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
import { updateObject, convertDate, convertTime } from '../../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let { backend: { sells: { loading, error, message, sells } } } = this.props;

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
            if (sells) {
                feedback = <Feedback message={message} />;

                const data = sells.map(sell => {
                    const viewContent = <RawView sell={sell} />;

                    const editContent = <Edit sell={sell} />;

                    return updateObject(sell, {
                        action: <div className="text-center">
                            <View title={'Détails de la fourniture: ' + sell.name} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Modifier la fourniture: ' + sell.name} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.delete(sell.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={data} data={JSON.stringify(sells)} bordered add="Ajouter une vente de matériel" content={<Add />} icon={faCalendarAlt} title="Vente de matériel" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Nom de l\'organe', key: 'organ' },
                                    { name: 'Nom de la fourniture', key: 'name' },
                                    { name: 'Unité', key: 'unit' },
                                    { name: 'Prix', key: 'price' },
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
                    <Breadcrumb main="Vente de matériel" icon={faCalendarAlt} />
                    <SpecialTitle user icon={faCalendarAlt}>Panneau de l'utilisateur</SpecialTitle>
                    <Subtitle user>Vente de matériel</Subtitle>
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
    reset: () => dispatch(actions.sellsReset()),
    get: () => dispatch(actions.getSells()),
    delete: id => dispatch(actions.deleteSells(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
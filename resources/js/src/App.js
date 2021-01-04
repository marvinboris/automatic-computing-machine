import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import * as actions from './store/actions';

import 'aos/dist/aos.css';

// User routes
const asyncUserDashboard = asyncComponent(() => import('./containers/Backend/User/Dashboard/Dashboard'));

const asyncUserOrgans = asyncComponent(() => import('./containers/Backend/User/Selections/Organs'));
const asyncUserUnits = asyncComponent(() => import('./containers/Backend/User/Selections/Units'));
const asyncUserBuilders = asyncComponent(() => import('./containers/Backend/User/Selections/Builders'));
const asyncUserCustomers = asyncComponent(() => import('./containers/Backend/User/Selections/Customers'));
const asyncUserVehicleTypes = asyncComponent(() => import('./containers/Backend/User/Selections/VehicleTypes'));

const asyncUserSells = asyncComponent(() => import('./containers/Backend/User/Services/Sells'));
const asyncUserActions = asyncComponent(() => import('./containers/Backend/User/Services/Actions'));
const asyncUserSubActions = asyncComponent(() => import('./containers/Backend/User/Services/Actions/SubActions'));
const asyncUserMaintenances = asyncComponent(() => import('./containers/Backend/User/Prestations/Maintenances'));
const asyncUserProblems = asyncComponent(() => import('./containers/Backend/User/Prestations/Maintenances/Problems'));
const asyncUserSolutions = asyncComponent(() => import('./containers/Backend/User/Prestations/Maintenances/Problems/Solutions'));
const asyncUserGaugings = asyncComponent(() => import('./containers/Backend/User/Prestations/Gaugings'));
const asyncUserVehicles = asyncComponent(() => import('./containers/Backend/User/Vehicles'));

// Common routes
const asyncUserLogin = asyncComponent(() => import('./containers/Auth/User/Login/Login'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup } = this.props;
        onTryAuthSignup();
        init();
    }

    render() {
        const { auth: { token } } = this.props;

        let routes = (
            <Switch>
                {/* <Route path="/auth/admin/verify" component={asyncAdminVerify} /> */}
                <Redirect path="/admin" to="/auth/admin/login" />

                <Route path="/auth/user/login" component={asyncUserLogin} />

                <Redirect to="/auth/user/login" />
            </Switch>
        );

        if (token !== null) {
            routes = (
                <Switch>
                    <Route path="/user/dashboard" component={asyncUserDashboard} />

                    <Route path="/user/selections/organs" component={asyncUserOrgans} />
                    <Route path="/user/selections/units" component={asyncUserUnits} />
                    <Route path="/user/selections/builders" component={asyncUserBuilders} />
                    <Route path="/user/selections/customers" component={asyncUserCustomers} />
                    <Route path="/user/selections/vehicle-types" component={asyncUserVehicleTypes} />

                    <Route path="/user/services/actions/:actionId/sub-actions" component={asyncUserSubActions} />
                    <Route path="/user/services/actions" component={asyncUserActions} />
                    <Route path="/user/services/sells" component={asyncUserSells} />
                    <Route path="/user/prestations/maintenances/:maintenanceId/problems/:problemId/solutions" component={asyncUserSolutions} />
                    <Route path="/user/prestations/maintenances/:maintenanceId/problems" component={asyncUserProblems} />
                    <Route path="/user/prestations/maintenances" component={asyncUserMaintenances} />
                    <Route path="/user/prestations/gaugings" component={asyncUserGaugings} />
                    <Route path="/user/vehicles" component={asyncUserVehicles} />

                    <Redirect to="/user/dashboard" />
                </Switch>
            );
        }

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(actions.authCheckState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

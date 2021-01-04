import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    dashboard: {
        loading: false,
        error: null
    },
    organs: {
        loading: false,
        error: null
    },
    units: {
        loading: false,
        error: null
    },
    builders: {
        loading: false,
        error: null
    },
    customers: {
        loading: false,
        error: null
    },
    actions: {
        loading: false,
        error: null
    },
    sells: {
        loading: false,
        error: null
    },
    maintenances: {
        loading: false,
        error: null
    },
    gaugings: {
        loading: false,
        error: null
    },
    vehicles: {
        loading: false,
        error: null
    },
    vehicleTypes: {
        loading: false,
        error: null
    },
};

const dashboardReset = (state, action) => updateObject(state, { dashboard: initialState.dashboard });
const dashboardStart = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: true, message: null }) });
const dashboardSuccess = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, error: null, ...action }) });
const dashboardFail = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, ...action }) });

const organsReset = (state, action) => updateObject(state, { organs: initialState.organs });
const organsStart = (state, action) => updateObject(state, { organs: updateObject(state.organs, { loading: true, message: null }) });
const organsSuccess = (state, action) => updateObject(state, { organs: updateObject(state.organs, { loading: false, error: null, ...action }) });
const organsFail = (state, action) => updateObject(state, { organs: updateObject(state.organs, { loading: false, ...action }) });

const unitsReset = (state, action) => updateObject(state, { units: initialState.units });
const unitsStart = (state, action) => updateObject(state, { units: updateObject(state.units, { loading: true, message: null }) });
const unitsSuccess = (state, action) => updateObject(state, { units: updateObject(state.units, { loading: false, error: null, ...action }) });
const unitsFail = (state, action) => updateObject(state, { units: updateObject(state.units, { loading: false, ...action }) });

const buildersReset = (state, action) => updateObject(state, { builders: initialState.builders });
const buildersStart = (state, action) => updateObject(state, { builders: updateObject(state.builders, { loading: true, message: null }) });
const buildersSuccess = (state, action) => updateObject(state, { builders: updateObject(state.builders, { loading: false, error: null, ...action }) });
const buildersFail = (state, action) => updateObject(state, { builders: updateObject(state.builders, { loading: false, ...action }) });

const customersReset = (state, action) => updateObject(state, { customers: initialState.customers });
const customersStart = (state, action) => updateObject(state, { customers: updateObject(state.customers, { loading: true, message: null }) });
const customersSuccess = (state, action) => updateObject(state, { customers: updateObject(state.customers, { loading: false, error: null, ...action }) });
const customersFail = (state, action) => updateObject(state, { customers: updateObject(state.customers, { loading: false, ...action }) });

const actionsReset = (state, action) => updateObject(state, { actions: initialState.actions });
const actionsStart = (state, action) => updateObject(state, { actions: updateObject(state.actions, { loading: true, message: null }) });
const actionsSuccess = (state, action) => updateObject(state, { actions: updateObject(state.actions, { loading: false, error: null, ...action }) });
const actionsFail = (state, action) => updateObject(state, { actions: updateObject(state.actions, { loading: false, ...action }) });

const sellsReset = (state, action) => updateObject(state, { sells: initialState.sells });
const sellsStart = (state, action) => updateObject(state, { sells: updateObject(state.sells, { loading: true, message: null }) });
const sellsSuccess = (state, action) => updateObject(state, { sells: updateObject(state.sells, { loading: false, error: null, ...action }) });
const sellsFail = (state, action) => updateObject(state, { sells: updateObject(state.sells, { loading: false, ...action }) });

const maintenancesReset = (state, action) => updateObject(state, { maintenances: initialState.maintenances });
const maintenancesStart = (state, action) => updateObject(state, { maintenances: updateObject(state.maintenances, { loading: true, message: null }) });
const maintenancesSuccess = (state, action) => updateObject(state, { maintenances: updateObject(state.maintenances, { loading: false, error: null, ...action }) });
const maintenancesFail = (state, action) => updateObject(state, { maintenances: updateObject(state.maintenances, { loading: false, ...action }) });

const gaugingsReset = (state, action) => updateObject(state, { gaugings: initialState.gaugings });
const gaugingsStart = (state, action) => updateObject(state, { gaugings: updateObject(state.gaugings, { loading: true, message: null }) });
const gaugingsSuccess = (state, action) => updateObject(state, { gaugings: updateObject(state.gaugings, { loading: false, error: null, ...action }) });
const gaugingsFail = (state, action) => updateObject(state, { gaugings: updateObject(state.gaugings, { loading: false, ...action }) });

const vehiclesReset = (state, action) => updateObject(state, { vehicles: initialState.vehicles });
const vehiclesStart = (state, action) => updateObject(state, { vehicles: updateObject(state.vehicles, { loading: true, message: null }) });
const vehiclesSuccess = (state, action) => updateObject(state, { vehicles: updateObject(state.vehicles, { loading: false, error: null, ...action }) });
const vehiclesFail = (state, action) => updateObject(state, { vehicles: updateObject(state.vehicles, { loading: false, ...action }) });

const vehicleTypesReset = (state, action) => updateObject(state, { vehicleTypes: initialState.vehicleTypes });
const vehicleTypesStart = (state, action) => updateObject(state, { vehicleTypes: updateObject(state.vehicleTypes, { loading: true, message: null }) });
const vehicleTypesSuccess = (state, action) => updateObject(state, { vehicleTypes: updateObject(state.vehicleTypes, { loading: false, error: null, ...action }) });
const vehicleTypesFail = (state, action) => updateObject(state, { vehicleTypes: updateObject(state.vehicleTypes, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DASHBOARD_RESET: return dashboardReset(state, action);
        case actionTypes.DASHBOARD_START: return dashboardStart(state, action);
        case actionTypes.DASHBOARD_SUCCESS: return dashboardSuccess(state, action);
        case actionTypes.DASHBOARD_FAIL: return dashboardFail(state, action);

        case actionTypes.ORGANS_RESET: return organsReset(state, action);
        case actionTypes.ORGANS_START: return organsStart(state, action);
        case actionTypes.ORGANS_SUCCESS: return organsSuccess(state, action);
        case actionTypes.ORGANS_FAIL: return organsFail(state, action);

        case actionTypes.UNITS_RESET: return unitsReset(state, action);
        case actionTypes.UNITS_START: return unitsStart(state, action);
        case actionTypes.UNITS_SUCCESS: return unitsSuccess(state, action);
        case actionTypes.UNITS_FAIL: return unitsFail(state, action);

        case actionTypes.BUILDERS_RESET: return buildersReset(state, action);
        case actionTypes.BUILDERS_START: return buildersStart(state, action);
        case actionTypes.BUILDERS_SUCCESS: return buildersSuccess(state, action);
        case actionTypes.BUILDERS_FAIL: return buildersFail(state, action);

        case actionTypes.CUSTOMERS_RESET: return customersReset(state, action);
        case actionTypes.CUSTOMERS_START: return customersStart(state, action);
        case actionTypes.CUSTOMERS_SUCCESS: return customersSuccess(state, action);
        case actionTypes.CUSTOMERS_FAIL: return customersFail(state, action);

        case actionTypes.ACTIONS_RESET: return actionsReset(state, action);
        case actionTypes.ACTIONS_START: return actionsStart(state, action);
        case actionTypes.ACTIONS_SUCCESS: return actionsSuccess(state, action);
        case actionTypes.ACTIONS_FAIL: return actionsFail(state, action);

        case actionTypes.SELLS_RESET: return sellsReset(state, action);
        case actionTypes.SELLS_START: return sellsStart(state, action);
        case actionTypes.SELLS_SUCCESS: return sellsSuccess(state, action);
        case actionTypes.SELLS_FAIL: return sellsFail(state, action);

        case actionTypes.MAINTENANCES_RESET: return maintenancesReset(state, action);
        case actionTypes.MAINTENANCES_START: return maintenancesStart(state, action);
        case actionTypes.MAINTENANCES_SUCCESS: return maintenancesSuccess(state, action);
        case actionTypes.MAINTENANCES_FAIL: return maintenancesFail(state, action);

        case actionTypes.GAUGINGS_RESET: return gaugingsReset(state, action);
        case actionTypes.GAUGINGS_START: return gaugingsStart(state, action);
        case actionTypes.GAUGINGS_SUCCESS: return gaugingsSuccess(state, action);
        case actionTypes.GAUGINGS_FAIL: return gaugingsFail(state, action);

        case actionTypes.VEHICLES_RESET: return vehiclesReset(state, action);
        case actionTypes.VEHICLES_START: return vehiclesStart(state, action);
        case actionTypes.VEHICLES_SUCCESS: return vehiclesSuccess(state, action);
        case actionTypes.VEHICLES_FAIL: return vehiclesFail(state, action);

        case actionTypes.VEHICLE_TYPES_RESET: return vehicleTypesReset(state, action);
        case actionTypes.VEHICLE_TYPES_START: return vehicleTypesStart(state, action);
        case actionTypes.VEHICLE_TYPES_SUCCESS: return vehicleTypesSuccess(state, action);
        case actionTypes.VEHICLE_TYPES_FAIL: return vehicleTypesFail(state, action);

        default: return state;
    }
};
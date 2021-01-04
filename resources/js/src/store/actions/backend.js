import * as actionTypes from './actionTypes';

const prefix = '/api/';

export const dashboardReset = () => ({ type: actionTypes.DASHBOARD_RESET });
const dashboardStart = () => ({ type: actionTypes.DASHBOARD_START });
const dashboardSuccess = data => ({ type: actionTypes.DASHBOARD_SUCCESS, ...data });
const dashboardFail = error => ({ type: actionTypes.DASHBOARD_FAIL, error });
export const getUserDashboard = () => async dispatch => {
    dispatch(dashboardStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/dashboard', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(dashboardSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(dashboardFail(error));
    }
};



export const organsReset = () => ({ type: actionTypes.ORGANS_RESET });
const organsStart = () => ({ type: actionTypes.ORGANS_START });
const organsSuccess = data => ({ type: actionTypes.ORGANS_SUCCESS, ...data });
const organsFail = error => ({ type: actionTypes.ORGANS_FAIL, error });
export const getOrgans = () => async dispatch => {
    dispatch(organsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/organs', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(organsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(organsFail(error));
    }
};

export const postOrgansStore = data => async dispatch => {
    dispatch(organsStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/organs', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(organsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(organsFail(error));
    }
};

export const patchOrgansUpdate = (id, data) => async dispatch => {
    dispatch(organsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/organs/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(organsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(organsFail(error));
    }
};

export const deleteOrgans = id => async dispatch => {
    dispatch(organsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/organs/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(organsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(organsFail(error));
    }
};



export const unitsReset = () => ({ type: actionTypes.UNITS_RESET });
const unitsStart = () => ({ type: actionTypes.UNITS_START });
const unitsSuccess = data => ({ type: actionTypes.UNITS_SUCCESS, ...data });
const unitsFail = error => ({ type: actionTypes.UNITS_FAIL, error });
export const getUnits = () => async dispatch => {
    dispatch(unitsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/units', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(unitsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(unitsFail(error));
    }
};

export const postUnitsStore = data => async dispatch => {
    dispatch(unitsStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/units', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(unitsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(unitsFail(error));
    }
};

export const patchUnitsUpdate = (id, data) => async dispatch => {
    dispatch(unitsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/units/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(unitsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(unitsFail(error));
    }
};

export const deleteUnits = id => async dispatch => {
    dispatch(unitsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/units/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(unitsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(unitsFail(error));
    }
};



export const buildersReset = () => ({ type: actionTypes.BUILDERS_RESET });
const buildersStart = () => ({ type: actionTypes.BUILDERS_START });
const buildersSuccess = data => ({ type: actionTypes.BUILDERS_SUCCESS, ...data });
const buildersFail = error => ({ type: actionTypes.BUILDERS_FAIL, error });
export const getBuilders = () => async dispatch => {
    dispatch(buildersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/builders', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(buildersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(buildersFail(error));
    }
};

export const postBuildersStore = data => async dispatch => {
    dispatch(buildersStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/builders', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(buildersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(buildersFail(error));
    }
};

export const patchBuildersUpdate = (id, data) => async dispatch => {
    dispatch(buildersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/builders/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(buildersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(buildersFail(error));
    }
};

export const deleteBuilders = id => async dispatch => {
    dispatch(buildersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/builders/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(buildersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(buildersFail(error));
    }
};



export const customersReset = () => ({ type: actionTypes.CUSTOMERS_RESET });
const customersStart = () => ({ type: actionTypes.CUSTOMERS_START });
const customersSuccess = data => ({ type: actionTypes.CUSTOMERS_SUCCESS, ...data });
const customersFail = error => ({ type: actionTypes.CUSTOMERS_FAIL, error });
export const getCustomers = () => async dispatch => {
    dispatch(customersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/customers', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const postCustomersStore = data => async dispatch => {
    dispatch(customersStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/customers', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const patchCustomersUpdate = (id, data) => async dispatch => {
    dispatch(customersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/customers/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};

export const deleteCustomers = id => async dispatch => {
    dispatch(customersStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/customers/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(customersSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(customersFail(error));
    }
};



export const actionsReset = () => ({ type: actionTypes.ACTIONS_RESET });
const actionsStart = () => ({ type: actionTypes.ACTIONS_START });
const actionsSuccess = data => ({ type: actionTypes.ACTIONS_SUCCESS, ...data });
const actionsFail = error => ({ type: actionTypes.ACTIONS_FAIL, error });
export const getActions = () => async dispatch => {
    dispatch(actionsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/actions', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(actionsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(actionsFail(error));
    }
};

export const postActionsStore = data => async dispatch => {
    dispatch(actionsStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/actions', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(actionsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(actionsFail(error));
    }
};

export const postSubActionsStore = (actionId, data) => async dispatch => {
    dispatch(actionsStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/actions/' + actionId + '/sub-actions', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(actionsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(actionsFail(error));
    }
};

export const patchActionsUpdate = (id, data) => async dispatch => {
    dispatch(actionsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/actions/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(actionsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(actionsFail(error));
    }
};

export const patchSubActionsUpdate = (actionId, id, data) => async dispatch => {
    dispatch(actionsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/actions/' + actionId + '/sub-actions/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(actionsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(actionsFail(error));
    }
};

export const deleteActions = id => async dispatch => {
    dispatch(actionsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/actions/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(actionsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(actionsFail(error));
    }
};

export const deleteSubActions = (actionId, id) => async dispatch => {
    dispatch(actionsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/actions/' + actionId + '/sub-actions/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(actionsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(actionsFail(error));
    }
};



export const sellsReset = () => ({ type: actionTypes.SELLS_RESET });
const sellsStart = () => ({ type: actionTypes.SELLS_START });
const sellsSuccess = data => ({ type: actionTypes.SELLS_SUCCESS, ...data });
const sellsFail = error => ({ type: actionTypes.SELLS_FAIL, error });
export const getSells = () => async dispatch => {
    dispatch(sellsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/sells', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(sellsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(sellsFail(error));
    }
};

export const postSellsStore = data => async dispatch => {
    dispatch(sellsStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/sells', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(sellsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(sellsFail(error));
    }
};

export const patchSellsUpdate = (id, data) => async dispatch => {
    dispatch(sellsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/sells/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(sellsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(sellsFail(error));
    }
};

export const deleteSells = id => async dispatch => {
    dispatch(sellsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/sells/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(sellsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(sellsFail(error));
    }
};



export const maintenancesReset = () => ({ type: actionTypes.MAINTENANCES_RESET });
const maintenancesStart = () => ({ type: actionTypes.MAINTENANCES_START });
const maintenancesSuccess = data => ({ type: actionTypes.MAINTENANCES_SUCCESS, ...data });
const maintenancesFail = error => ({ type: actionTypes.MAINTENANCES_FAIL, error });
export const getMaintenances = () => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/maintenances', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};

export const postMaintenancesStore = data => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/maintenances', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};

export const patchMaintenancesUpdate = (id, data) => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/maintenances/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};

export const deleteMaintenances = id => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/maintenances/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};

export const postProblemsStore = (maintenanceId, data) => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/maintenances/' + maintenanceId + '/problems', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};

export const patchProblemsUpdate = (maintenanceId, id, data) => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/maintenances/' + maintenanceId + '/problems/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};

export const deleteProblems = (maintenanceId, id) => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/maintenances/' + maintenanceId + '/problems/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};

export const postSolutionsStore = (maintenanceId, problemId, data) => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/maintenances/' + maintenanceId + '/problems/' + problemId + '/solutions', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};

export const patchSolutionsUpdate = (maintenanceId, problemId, id, data) => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/maintenances/' + maintenanceId + '/problems/' + problemId + '/solutions/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};

export const deleteSolutions = (maintenanceId, problemId, id) => async dispatch => {
    dispatch(maintenancesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/maintenances/' + maintenanceId + '/problems/' + problemId + '/solutions/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(maintenancesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(maintenancesFail(error));
    }
};



export const gaugingsReset = () => ({ type: actionTypes.GAUGINGS_RESET });
const gaugingsStart = () => ({ type: actionTypes.GAUGINGS_START });
const gaugingsSuccess = data => ({ type: actionTypes.GAUGINGS_SUCCESS, ...data });
const gaugingsFail = error => ({ type: actionTypes.GAUGINGS_FAIL, error });
export const getGaugings = () => async dispatch => {
    dispatch(gaugingsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/gaugings', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(gaugingsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(gaugingsFail(error));
    }
};

export const postGaugingsStore = data => async dispatch => {
    dispatch(gaugingsStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/gaugings', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(gaugingsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(gaugingsFail(error));
    }
};

export const patchGaugingsUpdate = (id, data) => async dispatch => {
    dispatch(gaugingsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/gaugings/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(gaugingsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(gaugingsFail(error));
    }
};

export const deleteGaugings = id => async dispatch => {
    dispatch(gaugingsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/gaugings/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(gaugingsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(gaugingsFail(error));
    }
};



export const vehiclesReset = () => ({ type: actionTypes.VEHICLES_RESET });
const vehiclesStart = () => ({ type: actionTypes.VEHICLES_START });
const vehiclesSuccess = data => ({ type: actionTypes.VEHICLES_SUCCESS, ...data });
const vehiclesFail = error => ({ type: actionTypes.VEHICLES_FAIL, error });
export const getVehicles = () => async dispatch => {
    dispatch(vehiclesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/vehicles', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(vehiclesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(vehiclesFail(error));
    }
};

export const postVehiclesStore = data => async dispatch => {
    dispatch(vehiclesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/vehicles', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(vehiclesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(vehiclesFail(error));
    }
};

export const patchVehiclesUpdate = (id, data) => async dispatch => {
    dispatch(vehiclesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/vehicles/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(vehiclesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(vehiclesFail(error));
    }
};

export const deleteVehicles = id => async dispatch => {
    dispatch(vehiclesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/vehicles/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(vehiclesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(vehiclesFail(error));
    }
};



export const vehicleTypesReset = () => ({ type: actionTypes.VEHICLE_TYPES_RESET });
const vehicleTypesStart = () => ({ type: actionTypes.VEHICLE_TYPES_START });
const vehicleTypesSuccess = data => ({ type: actionTypes.VEHICLE_TYPES_SUCCESS, ...data });
const vehicleTypesFail = error => ({ type: actionTypes.VEHICLE_TYPES_FAIL, error });
export const getVehicleTypes = () => async dispatch => {
    dispatch(vehicleTypesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/vehicle-types', {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(vehicleTypesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(vehicleTypesFail(error));
    }
};

export const postVehicleTypesStore = data => async dispatch => {
    dispatch(vehicleTypesStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'user/vehicle-types', {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(vehicleTypesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(vehicleTypesFail(error));
    }
};

export const patchVehicleTypesUpdate = (id, data) => async dispatch => {
    dispatch(vehicleTypesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/vehicle-types/' + id, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(vehicleTypesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(vehicleTypesFail(error));
    }
};

export const deleteVehicleTypes = id => async dispatch => {
    dispatch(vehicleTypesStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'user/vehicle-types/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(vehicleTypesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(vehicleTypesFail(error));
    }
};

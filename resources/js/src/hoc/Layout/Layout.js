import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import Backend from '../../containers/Backend/Layout';
import Auth from '../../containers/Auth/Layout';

import * as actions from '../../store/actions';

import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        modal: false
    }

    render() {
        const storedToken = localStorage.getItem('token');
        const { children, auth: { data } } = this.props;

        if ((data && storedToken) || !storedToken) {
            $('#guard').fadeOut(3000);
            setTimeout(() => {
                $('#guard').remove();
            }, 2800);
        }

        const url = location.pathname;

        let content = null;
        if (url.includes('auth')) content = <Auth>{children}</Auth>;
        else if (url.includes('user')) content = <Backend>{children}</Backend>;
        else content = children;

        return content;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthLogout: () => dispatch(actions.authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
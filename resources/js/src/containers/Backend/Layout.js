import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Toolbar from '../../components/Backend/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Backend/Navigation/SideDrawer/SideDrawer';
import CustomSpinner from '../../components/UI/CustomSpinner/CustomSpinner';

import { authLogout } from '../../store/actions';
import { updateObject } from '../../shared/utility';

import './BackEnd.css';

class BackEnd extends Component {
    state = {
        isOpen: false,

        date: { weekDay: null, day: null, month: null, year: null },
        clock: { hours: null, minutes: null, seconds: null },

        selectedItem: '',

        interval: null,

        notifications: [],
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.auth.data.notifications && !prevState.notifications) {
            const { notifications } = nextProps.auth.data;
            return updateObject(prevState, { notifications });
        }
        return prevState;
    }

    componentDidMount() {
        const interval = setInterval(() => {
            const date = new Date();
            const twoDigits = number => number < 10 ? '0' + number : number;

            const weekDay = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'][date.getDay()];
            const day = date.getDate();
            const month = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'][date.getMonth()];
            const year = date.getFullYear();

            const hours = twoDigits(date.getHours());
            const minutes = twoDigits(date.getMinutes());
            const seconds = twoDigits(date.getSeconds());

            this.setState({ date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } });
        }, 1000);
        this.setState({ interval });
    }

    componentDidUpdate(prevProps) {
        if (this.props.auth.data.notifications && !prevProps.auth.data.notifications) {
            const audio = new Audio('/audio/swiftly.mp3');
            const channel = Echo.channel('public');
            channel.listen('Requests', ({ pending, processing, cancelled, solved, important, total }) => {
                if (
                    this.props.auth.token && (
                        pending !== this.state.pending ||
                        processing !== this.state.processing ||
                        cancelled !== this.state.cancelled ||
                        important !== this.state.important ||
                        solved !== this.state.solved
                    )
                ) {
                    if (total !== this.state.total) audio.play();
                    this.setState({ pending, processing, cancelled, solved, important, total });
                }
            });
        }
    }

    componentWillUnmount() {
        if (this.state.interval) clearInterval(this.state.interval);
    }

    logoutHandler = () => {
        const { onAuthLogout } = this.props;
        onAuthLogout();
    }

    toggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    selectItem = item => this.setState({ selectedItem: item });

    render() {
        const { isOpen, date, clock, selectedItem, notifications } = this.state;
        const {
            auth: { loading, data, role },
            history, children } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        if (!isAuthenticated) history.push('/auth/user/login');

        return <div className="BackEnd text-left">
            <Toolbar notifications={notifications} data={data} toggle={this.toggle} logoutHandler={this.logoutHandler} date={date} clock={clock} />
            <SideDrawer data={data} role={role} isOpen={isOpen} toggle={this.toggle} selectItem={this.selectItem} selectedItem={selectedItem} />

            <main className="bg-soft position-relative full-height-user pb-5">
                <div className="mb-5 pb-5">
                    {loading ? <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div> : children}
                </div>

                <footer className="position-absolute d-none d-sm-block py-3 px-4 bg-brokenblue text-white">
                    <strong className="text-yellow text-large">&copy;</strong> Copyright {new Date().getFullYear()} <strong><Link to="/" className="text-white">CAR MAIN Vehicle Maintenance Management System</Link></strong>. All rights reserved by <strong className="text-yellow">HEE Metal</strong>. Made with <FontAwesomeIcon icon={faCoffee} className="text-yellow" /> by <a href="mailto:jaris.ultio.21@gmail.com" className="text-decoration-none">Brainer 21</a>.
                </footer>
            </main>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthLogout: () => dispatch(authLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BackEnd));
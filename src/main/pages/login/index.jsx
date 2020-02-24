import React from 'react';
import { withRouter, Redirect } from 'react-router';
import { ROUTE_HOME } from '../../../utils/routes';

import { AuthContext } from '../../../components/auth';
import { api } from '../../../api';
import { handleEnterKeypres } from '../../../utils/utils';

import LoginForm from '../../../components/loginForm';

class Login extends React.Component {
    static contextType = AuthContext;

    constructor() {
        super();
        this.formEl = React.createRef();
        this.state = {
            errors: ['']
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleEnterKeypresWrapper);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEnterKeypresWrapper);
    }

    handleEnterKeypresWrapper = ev => {
        handleEnterKeypres(ev, () => {
            this.formEl.current.dispatchEvent(new Event('submit'));
        });
    };

    handleLogin = async event => {
        const { history } = this.props;
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await api.onSignInUser(email.value, password.value);
            history.push(ROUTE_HOME);
        } catch (error) {
            console.log(error);
            const { errors } = this.state;
            this.setState({
                errors: [...errors, error.message]
            });
        }
    };

    onChange = () => {
        const { errors } = this.state;
        this.setState({
            errors: [...errors, '']
        });
    };

    render() {
        const { errors } = this.state;
        const { currentUser } = this.context;
        if (currentUser) return <Redirect to={ROUTE_HOME} />;
        return (
            <LoginForm
                formRef={this.formEl}
                errorMessage={errors[errors.length - 1]}
                onSubmit={this.handleLogin}
                onChange={this.onChange}
            />
        );
    }
}

export default withRouter(Login);

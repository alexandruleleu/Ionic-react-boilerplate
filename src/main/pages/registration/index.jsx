import React from 'react';
import { withRouter } from 'react-router';
import { handleEnterKeypres } from '../../../utils/utils';
import { ROUTE_LOGIN } from '../../../utils/routes';

//services
import { api } from '../../../api';

//components
import RegistrationForm from '../../../components/registrationForm';

class Registration extends React.Component {
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

    handleSignUp = async event => {
        event.preventDefault();
        const { firstName, lastName, email, password } = event.target.elements;
        try {
            const { history } = this.props;
            await api.onSignUpUser(
                firstName.value,
                lastName.value,
                email.value,
                password.value
            );
            history.push(ROUTE_LOGIN);
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
        return (
            <RegistrationForm
                formRef={this.formEl}
                errorMessage={errors[errors.length - 1]}
                onSubmit={this.handleSignUp}
                onChange={this.onChange}
            />
        );
    }
}

export default withRouter(Registration);

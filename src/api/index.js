import firebaseProvider from '../config/Firebase';
const auth = firebaseProvider.auth();
const db = firebaseProvider.firestore();

const api = {
    //registration service
    onSignUpUser: (
        signUpFirstName,
        signUpLastName,
        signUpEmail,
        signUpPassword
    ) => {
        return auth
            .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
            .then(
                rsp => {
                    //TODO: store a newly created account in database
                    const { user } = rsp;
                    api.createNewAccount({
                        userId: user.uid,
                        signUpFirstName,
                        signUpLastName,
                        signUpEmail
                    }).then(() => {
                        auth.currentUser.updateProfile({
                            displayName: `${signUpFirstName} ${signUpLastName}`
                        });
                        return {
                            message:
                                'Your account it was successfully registered'
                        };
                    });
                },
                err => {
                    throw err;
                }
            );
    },

    createNewAccount: ({ userId, ...rest }) => {
        const body = {
            firstName: rest.signUpFirstName,
            lastName: rest.signUpLastName,
            email: rest.signUpEmail
        };
        return db.doc(`users/${userId}`).set(body);
    },

    //login service
    onSignInUser: (email, password) => {
        return auth.signInWithEmailAndPassword(email, password).then(
            rsp => {
                console.log(rsp);
                return rsp;
            },
            err => {
                throw err;
            }
        );
    },

    logout: () => {
        const auth = firebaseProvider.auth();
        return auth.signOut();
    }
};

export { api };

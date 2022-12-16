import {
    createGenerateClassName,
    StylesProvider,
} from '@material-ui/core/styles';
import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import Signup from './components/Signup';
import Signin from './components/Signin';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path='/auth/signup'>
                            <Signup onSignIn={onSignIn} />
                        </Route>
                        <Route path='/auth/signin'>
                            <Signin onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};

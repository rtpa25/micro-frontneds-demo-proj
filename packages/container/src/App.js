import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Progress from './components/Progress';
import { useState } from 'react';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header
                    isSignedIn={isSignedIn}
                    onSignOut={() => setIsSignedIn(false)}
                />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path='/auth'>
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path='/' component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;

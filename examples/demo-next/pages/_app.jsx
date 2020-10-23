import React from 'react';
import BaseApp from 'next/app';
import { AnimatePresence } from 'framer-motion';

class App extends BaseApp {
    render() {
        const { Component, pageProps, router} = this.props;
        return <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
        </AnimatePresence>;
    }
}

export default App;
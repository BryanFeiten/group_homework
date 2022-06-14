import React from 'react';
import { GlobalStyle } from './styles';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Header />
            <Main />
        </React.Fragment>
    );
}
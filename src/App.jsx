import React from 'react';
import GlobalStyles  from './config/styles';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Gallery from './components/Gallery';
import OpeningHours from './components/OpeningHours';
import FrequentsQuestions from './components/FrequentsQuestions';

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Header />
            <Main />
            <About />
            <Gallery />
            <OpeningHours />
            <FrequentsQuestions />
        </React.Fragment>
    );
}
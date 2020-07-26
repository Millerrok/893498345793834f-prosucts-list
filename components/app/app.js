import React from 'react';

import Container from '@material-ui/core/Container';
import ErrorBoundary from "../error-boundary";
import CustomProgress from "../progress";
import ProductsList from "../products";
import Header from "../header";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CustomProgress/>
                <ErrorBoundary>
                    <Container>
                        <Header/>
                        <ProductsList/>
                    </Container>
                </ErrorBoundary>
            </React.Fragment>
        );
    }
}

export default App;

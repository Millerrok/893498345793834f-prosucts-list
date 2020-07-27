import React, {Fragment} from 'react';
import {Container, CssBaseline} from '@material-ui/core';
import ErrorBoundary from '../error-boundary';
import CustomProgress from '../progress';
import ProductsList from '../products';
import Header from '../header';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <CustomProgress/>
                <ErrorBoundary>
                    <Container>
                        <Header/>
                        <ProductsList/>
                    </Container>
                </ErrorBoundary>
            </Fragment>
        );
    }
}

export default App;

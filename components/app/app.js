import React from 'react';
import {Provider} from "mobx-react";

import Container from '@material-ui/core/Container';
import ErrorBoundary from "../error-boundary";
import CustomProgress from "../progress";
import ProductsList from "../products";
import shopStore from "../../store";

class App extends React.Component {
    render() {
        return (
            <Provider shop={shopStore}>
                <CustomProgress/>
                <ErrorBoundary>
                    <Container>
                        <ProductsList/>
                    </Container>
                </ErrorBoundary>
            </Provider>
        );
    }
}

export default App;

import React from 'react';
import {Provider} from "mobx-react";

import Container from '@material-ui/core/Container';
import ProductsList from "../products-list";
import CustomProgress from "../progress";
import shopStore from "../../store";

class App extends React.Component {
    render() {
        return (
            <Provider shop={shopStore}>
                <CustomProgress/>
                <Container>
                    <ProductsList/>
                </Container>
            </Provider>
        );
    }
}

export default App;

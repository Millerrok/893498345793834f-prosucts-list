import React from 'react';
import Container from '@material-ui/core/Container';
import shopStore from "../../store";
import {Provider} from "mobx-react";
import CustomProgress from "../progress";
import ProductsList from "../products-list";

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

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ShopStore} from "./store";
import {ProductsRESTClient} from "./services/products/environments";
import {Provider} from "mobx-react";
import {addMiddleware, onSnapshot} from "mobx-state-tree";
import {actionLogger} from "mst-middlewares";

const productsService = new ProductsRESTClient();
const shopStore = ShopStore.create({}, {productsService});

onSnapshot(shopStore, t => {
    console.log(`snapshop:`);
    console.log(t)
});
addMiddleware(shopStore, actionLogger);

ReactDOM.render(
    <Provider shop={shopStore}>
        <CssBaseline/>
        <App/>
    </Provider>,
    document.getElementById('root')
);

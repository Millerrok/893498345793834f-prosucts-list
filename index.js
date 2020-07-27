import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ShopStore} from './store';
import {ProductsRESTClient} from './services/products/environments';
import {Provider} from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom' // fix batching problem

const productsService = new ProductsRESTClient();
const shopStore = ShopStore.create({}, {productsService});

ReactDOM.render(
    <Provider shop={shopStore}>
        <CssBaseline/>
        <App/>
    </Provider>,
    document.getElementById('root')
);

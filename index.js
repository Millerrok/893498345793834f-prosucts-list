import React from 'react';
import {Provider} from 'mobx-react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {ShopStore} from './store';
import {ProductsRESTClient} from './services/products/environments';
import 'mobx-react-lite/batchingForReactDom'; // fix batching problem

const productsService = new ProductsRESTClient();
const shopStore = ShopStore.create({}, {productsService});

ReactDOM.render(
    <Provider shop={shopStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

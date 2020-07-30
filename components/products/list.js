import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import ListPagination from '../pagination';
import SearchField from '../search';
import CartList from '../cart-list';
import ProductCard from './cart';
import PropTypes from 'prop-types';
import {compose} from "../../utils";

const ProductsList = (props) => {
    const {list, pagination, search} = props.shop.products;

    if (!list) {
        return null;
    }

    const makeItem = (cart) => {
        return (<ProductCard key={cart.code} data={cart}/>);
    };

    return (
        <Fragment>
            <SearchField search={search}/>
            <CartList>
                {list.map(makeItem)}
            </CartList>
            <ListPagination pagination={pagination}/>
        </Fragment>
    )
};

ProductCard.protoType = {
    shop: PropTypes.shape({
        products: PropTypes.shape({
            pagination: PropTypes.object.isRequired,
            list: PropTypes.array.isRequired,
        })
    })
};

export default compose(
    inject('shop'),
    observer,
)(ProductsList);

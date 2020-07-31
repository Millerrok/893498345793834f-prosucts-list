import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import ListPagination from '../pagination';
import SearchField from '../search';
import CartList from '../cart-list';
import ProductCard from './cart';
import PropTypes from 'prop-types';
import {compose} from "../../utils";
import CardItem from "../cart-list/cart-item";

const ProductsList = (props) => {
    const {list, pagination, search} = props.shop.products;

    if (!list) {
        return null;
    }

    const makeItem = (cart) => {
        return (<CardItem key={cart.code} ><ProductCard data={cart}/></CardItem>);
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

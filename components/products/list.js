import React from 'react';
import {inject, observer} from 'mobx-react';
import ListPagination from '../pagination';
import SearchField from '../search';
import CartList from '../cart-list';
import ProductCard from './cart';
import PropTypes from 'prop-types';

@inject('shop') @observer
class ProductsList extends React.Component {
    makeItem(cart) {
        return (<ProductCard key={cart.code} data={cart}/>)
    }

    render() {
        const {list, pagination, search} = this.props.shop.products;

        if (!list) {
            return null;
        }

        return (
            <React.Fragment>
                <SearchField search={search}/>
                <CartList>
                    {list.map(this.makeItem)}
                </CartList>
                <ListPagination pagination={pagination}/>
            </React.Fragment>
        );
    }

    static get propTypes() {
        return {
            shop: PropTypes.shape({
                products: PropTypes.shape({
                    pagination: PropTypes.object.isRequired,
                    list: PropTypes.array.isRequired,
                })
            })
        }
    }
}

export default ProductsList;

import React from "react";
import {inject, observer} from "mobx-react";

import {Box,Grid,Typography} from "@material-ui/core";
import CartItem from "./cart";

const WithoutCarts = () => (
    <Typography variant="subtitle1" component="p" color="textSecondary">
        Has no data to show
    </Typography>
);

@inject('shop') @observer
class CartList extends React.Component {
    makeCart(cart) {
        return (
            <Grid item xs={6} sm={4} md={3} key={cart.code} align="center">
                <CartItem data={cart}/>
            </Grid>
        )
    }

    componentDidMount() {
        this.props.shop.products.loadProducts();
    }

    render() {
        const {list: carts} = this.props.shop.products;
        if (!carts.length) {
            return <WithoutCarts/>
        }

        return (
            <Box flexGrow={1}>
                <Grid container spacing={2} justify="space-evenly">
                    {carts.map(this.makeCart)}
                </Grid>
            </Box>
        )
    }
}

export default CartList

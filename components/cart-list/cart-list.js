import React from "react";
import CartItem from "./cart";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {inject, observer} from "mobx-react";
import {Box} from "@material-ui/core";


const WithoutCarts = () => (
    <Typography variant="subtitle1" component="p" color="textSecondary">
        Has no data to show
    </Typography>
);

@inject('shop') @observer
class CartList extends React.Component {
    makeCart(cart) {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={cart.code}>
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
                <Grid container spacing={2}>
                    {carts.map(this.makeCart)}
                </Grid>
            </Box>
        )
    }
}

export default CartList

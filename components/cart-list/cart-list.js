import React from 'react';
import {Box, Grid} from '@material-ui/core';
import WithoutCarts from './empty-list';
import PropTypes from 'prop-types'

const CartList = ({children}) => {
    if (!children.length) {
        return <WithoutCarts/>;
    }

    return (
        <Box flexGrow={1}>
            <Grid container spacing={2} justify='space-evenly'>
                {children}
            </Grid>
        </Box>
    )
};

CartList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
};


export default CartList;

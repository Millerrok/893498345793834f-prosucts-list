import React, {Fragment} from 'react';
import {CardMedia, Typography, CardContent, Link, Tooltip} from '@material-ui/core';
import PropTypes from 'prop-types';

const ProductCard = ({data: {name, imageURL, price}}) => (
    <Fragment>
        <CardMedia
            image={imageURL}
            title={name}/>
        <CardContent align='center'>
            <Tooltip title={name} placement='top'>
                <Link
                    onClick={e => e.preventDefault()}
                    display='block'
                    width='90%'
                    href='#'
                    noWrap
                >
                    {name}
                </Link>
            </Tooltip>
            <Typography variant='subtitle1' color='textSecondary'>
                Price: {price}
            </Typography>
        </CardContent>
    </Fragment>
);

ProductCard.protoType = {
    data: PropTypes.shape({
        imageURL: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
};

export default ProductCard

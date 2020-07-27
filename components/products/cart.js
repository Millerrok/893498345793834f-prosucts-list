import React from 'react';
import {Card, CardMedia, Typography, CardContent, Link, withStyles, Grid, Tooltip} from '@material-ui/core';
import {compose} from '../../utils';
import PropTypes from 'prop-types';
import {observer} from "mobx-react";

const ProductCard = ({data: {name, imageURL, price}, classes}) => (
    <Grid item xs={6} sm={4} md={3} align='center'>
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
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
        </Card>
    </Grid>
);

ProductCard.protoType = {
    classes: PropTypes.shape({
        media: PropTypes.object.isRequired,
        root: PropTypes.object.isRequired,
    }),
    data: PropTypes.shape({
        imageURL: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
};

const styles = {
    media: {height: 590, maxHeight: '40vh'},
    root: {maxWidth: 280},
};

export default compose(
    observer,
    withStyles(styles),
)(ProductCard);

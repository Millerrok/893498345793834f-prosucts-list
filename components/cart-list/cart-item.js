import React from 'react';
import {Card, withStyles, Grid} from '@material-ui/core';
import {compose} from '../../utils';
import PropTypes from 'prop-types';

const CardItem = ({children, classes}) => (
    <Grid item xs={6} sm={4} md={3} align='center'>
        <Card className={classes.root}>
            {children}
        </Card>
    </Grid>
);

CardItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const styles = {
    root: {
        maxWidth: 280,
        '& .MuiCardMedia-root': {height: 590, maxHeight: '40vh'}
    },
};

export default compose(
    withStyles(styles),
)(CardItem);

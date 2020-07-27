import React from 'react';
import {Box, Card, CardContent, CardMedia, Typography, withStyles} from '@material-ui/core';
import {compose} from '../../utils';
import imgSrc from './image'
import PropTypes from 'prop-types';

const ErrorIndicator = ({classes, message}) => (
    <Box display='flex'
         height='100vh'
         alignItems='center'
         justifyContent='center'>
        <Card align='center'>
            <CardMedia
                className={classes.media}
                image={imgSrc}
                title='Exception'/>
            <CardContent>
                <Typography variant='h5' color='textPrimary'>
                    We hewe some problem
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                    {message}
                </Typography>
            </CardContent>
        </Card>
    </Box>
);

ErrorIndicator.protoType = {
    classes: PropTypes.shape({
        media: PropTypes.object.isRequired,
    }),
    message: PropTypes.string,
};

const styles = {
    media: {height: 200, width: 200, marginTop: 15},
};

export default compose(
    withStyles(styles),
)(ErrorIndicator);

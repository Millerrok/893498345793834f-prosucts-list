import React from "react";

import imgSrc from "./indicator.png"
import {Box, Card, CardContent, CardMedia, Typography, withStyles} from "@material-ui/core";
import {compose} from "../../utils";
import {inject, observer} from "mobx-react";

const ErrorIndicator = ({classes, shop}) => (
    <Box
        display="flex"
        height='100vh'
        alignItems="center"
        justifyContent="center">
        <Card align="center">
            <CardMedia
                className={classes.media}
                image={imgSrc}
                title="Exception"/>
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    We hewe some problem
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {shop.error.message}
                </Typography>
            </CardContent>
        </Card>
    </Box>
);

const styles = {
    media: {height: 200, width: 200, marginTop: 15},
};

export default compose(
    withStyles(styles),
    inject('shop'),
    observer,
)(ErrorIndicator);

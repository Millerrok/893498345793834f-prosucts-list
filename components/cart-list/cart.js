import React from "react";
import {inject, observer} from "mobx-react";

import {Card, CardMedia, Typography, CardContent, Link, withStyles} from "@material-ui/core";
import {compose} from "../../utils";

const CardItem = ({
                      data: {
                          name,
                          imageURL,
                          price
                      },
                      classes
                  }) => (
    <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image={imageURL}
            title={name}/>
        <CardContent align="center">
            <Link
                tooltip={name}
                component="button"
                cursor="pointer"
                noWrap>
                {name}
            </Link>
            <Typography variant="subtitle1" color="textSecondary">
                Price: {price}
            </Typography>
        </CardContent>
    </Card>
);

const styles = {
    root: {maxWidth: 280},
    media: {height: 590, maxHeight: "50vh"},
};

export default compose(
    inject('shop'),
    observer,
    withStyles(styles),
)(CardItem);

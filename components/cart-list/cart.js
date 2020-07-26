import React from "react";

import {Card, CardMedia, Typography, CardContent, Link, withStyles} from "@material-ui/core";
import {compose} from "../../utils";
import {observer} from "mobx-react";
import Tooltip from "@material-ui/core/Tooltip";

const ProductItem = ({
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
            <Tooltip title={name} placement="top">
                <Link
                    onClick={e => e.preventDefault()}
                    display="block"
                    width="90%"
                    href="#"
                    noWrap
                >
                    {name}
                </Link>
            </Tooltip>
            <Typography variant="subtitle1" color="textSecondary">
                Price: {price}
            </Typography>
        </CardContent>
    </Card>
);

const styles = {
    root: {maxWidth: 280},
    media: {height: 590, maxHeight: "40vh"},
};

export default compose(
    observer,
    withStyles(styles),
)(ProductItem);

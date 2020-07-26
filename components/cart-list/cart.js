import React from "react";
import {inject, observer} from "mobx-react";

import {Card, CardMedia, Typography, CardContent, Link} from "@material-ui/core";
import {withConfiguredCardClasses} from "../hoc";
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

const adaptationSizes = {
    mobile: {
        maxWidth: 180, height: 280
    },
    desktop: {
        maxWidth: 280, height: 590
    }
};

export default compose(
    inject('shop'),
    observer,
    withConfiguredCardClasses(adaptationSizes)
)(CardItem);

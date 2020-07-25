import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        textAlign: 'center'
    },
    media: {
        height: 590,
    },
});

const CartItem = ({
                      data: {
                          name,
                          imageURL,
                          price,
                      }
                  }) => {
    const classes = makeStyles({
        root: {
            maxWidth: 345,
            textAlign: 'center'
        },
        media: {
            height: 590,
        },
    })();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imageURL}
                title={name}
            />
            <CardContent>
                <Link
                    component="button"
                    variant="body1"
                >
                    {name}
                </Link>
                <Typography variant="subtitle1" component="" color="textSecondary">
                    Price: {price}
                </Typography>
            </CardContent>
        </Card>
    );
};


export default CartItem;

import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const withConfiguredCardClasses = config => Wrapped => {
    return ({data, shop}) => {
        const {maxWidth, height} = (shop.isMobile) ? config.mobile : config.desktop;
        const classes = makeStyles({
            root: {maxWidth},
            media: {height},
        })();

        const props = {
            data,
            classes
        };

        return (<Wrapped {...props}/>);
    }
};

export default withConfiguredCardClasses;

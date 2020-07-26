import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import {inject, observer} from "mobx-react";
import {compose} from "../../utils";

const CustomProgress = ({shop: {products: {isLoading}}}) => {
    if (!isLoading) {
        return null;
    }

    return (
        <LinearProgress/>
    );
};

export default compose(
    inject('shop'),
    observer,
)(CustomProgress);

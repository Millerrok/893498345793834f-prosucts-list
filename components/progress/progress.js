import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import {inject, observer} from "mobx-react";

const CustomProgress = ({shop: {products: {isLoading}}}) => {
    if (!isLoading) {
        return null;
    }

    return (
        <LinearProgress/>
    );
};

export default inject('shop')(observer(CustomProgress));

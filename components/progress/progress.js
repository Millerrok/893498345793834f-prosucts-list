import React from 'react';
import {inject, observer} from 'mobx-react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {compose} from '../../utils';
import PropTypes from 'prop-types';

const CustomProgress = ({shop: {products: {isLoading}}}) => {
    if (!isLoading) {
        return null;
    }

    return (
        <LinearProgress/>
    );
};

CustomProgress.protoType = {
    shop: PropTypes.shape({
        products: PropTypes.shape({
            isLoading: PropTypes.bool.isRequired
        })
    }),
};

export default compose(
    inject('shop'),
    observer,
)(CustomProgress);

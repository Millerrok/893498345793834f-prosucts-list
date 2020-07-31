import React from 'react';
import {TextField, FormControl, withStyles} from '@material-ui/core';
import {compose} from '../../utils';
import PropTypes from 'prop-types';

const SearchField = ({classes, search: {update, query}}) => {
    const queryStringChanged = (e) => {
        update(e.target.value);
    };

    return (
        <FormControl fullWidth className={classes.root}>
            <TextField placeholder='Type product name...'
                       label='Search'
                       value={query}
                       onChange={queryStringChanged}/>
        </FormControl>
    );
};

SearchField.protoType = {
    minimumPageCount: PropTypes.number.isRequired,
    classes: PropTypes.shape({
        root: PropTypes.object.isRequired,
    }),
    search: PropTypes.shape({
        update: PropTypes.func.isRequired,
        query: PropTypes.string.isRequired,
    }),
};

const styles = {
    root: {margin: '15px auto'}
};

export default compose(
    withStyles(styles),
)(SearchField);

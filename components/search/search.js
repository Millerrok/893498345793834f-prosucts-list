import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {inject, observer} from "mobx-react";
import {withStyles} from "@material-ui/core";
import {compose} from "../../utils";

const SearchField = ({classes, shop: {products: {search: {update, query}}}}) => {
    const queryStringChanged = (e) => {
        update(e.target.value);
    };

    return (
        <FormControl fullWidth className={classes.root}>
            <TextField placeholder="Type product name..."
                       label="Search"
                       value={query}
                       onChange={queryStringChanged}/>
        </FormControl>
    );
};

const styles = {
    root: {
        margin: '15px auto',
    }
};

export default compose(
    withStyles(styles),
    inject('shop'),
    observer,
)(SearchField);

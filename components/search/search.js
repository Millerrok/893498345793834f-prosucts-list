import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {inject, observer} from "mobx-react";

const SearchField = ({shop: {products: {search: {update, query}}}}) => {
    const queryStringChanged = (e) => {
        update(e.target.value);
    };

    return (
        <FormControl fullWidth m-b={1}>
            <TextField label="Search" placeholder="Type product name..." value={query}
                       onChange={queryStringChanged}/>
        </FormControl>
    );
};

export default inject('shop')(observer(SearchField));

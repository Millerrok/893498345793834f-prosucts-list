import {types} from "mobx-state-tree";

const SearchStore = types
    .model('SearchStore', {
        query: '',

    })
    .views(self => ({
        get isEmpty() {
            return !(self.query.length);
        }
    }))
    .actions(self => ({
        update(query) {
            self.query = query.trim();
        }
    }));


export default SearchStore;

import {getParent, types} from "mobx-state-tree";

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
        update(query = '') {
            self.query = query.trim();

            getParent(self).updateWithSearch()
        }
    }));


export default SearchStore;

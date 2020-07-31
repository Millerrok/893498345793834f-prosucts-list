import {getEnv, getParent, types} from "mobx-state-tree";
import PaginationStore from "./models/pagination";
import SearchStore from "./models/search";
import {flow} from "mobx";

export default ({name, itemModel, filter, loadServiceName}) => {
    return types
        .model(name, {
            data: types.optional(types.array(itemModel), []),
            pagination: types.optional(PaginationStore, {}),
            search: types.optional(SearchStore, {}),
        })
        .actions(self => ({
            markLoading(loading) {
                getParent(self).toggleLoading(loading);
            },
            loadProducts: flow(function* loadProducts() {
                self.markLoading(true);

                try {
                    const data = yield self.loadService.fetch();

                    self.updateData(data);
                } catch (error) {
                    getParent(self).error.make(error)
                }

                self.markLoading(false);
            }),
            updateData(data) {
                self.data = data;
            },
        }))
        .views(self => ({
            get list() {
                const resultPerPage = self.pagination.resultPerPage;
                const idx = self.pagination.currentPage - 1;

                return self.preparedData.slice(idx, idx + resultPerPage) || [];
            },
            get loadService() {
                const env = getEnv(self);

                if (!env.hasOwnProperty(loadServiceName)) {
                    throw new Error('Load service is required');
                }

                return env[loadServiceName];
            },
            get preparedData() {
                const {search} = self;

                if (search.isEmpty || !filter) {
                    return self.data;
                }

                return self.data.filter(item =>
                    item[filter.getFilterField()]
                        .toLowerCase()
                        .includes(search.query.toLowerCase())
                );
            }
        }));
};

import {types} from "mobx-state-tree";

const PaginationStore = types
    .model('PaginationStore', {
        resultPerPage: 10,
        currentPage: 1,
        totalPages: 0,
    })
    .actions(self => ({
        updateCurrent(current) {
            self.currentPage = current
        },
        updateTotalPages(totalPages) {
            self.totalPages = totalPages
        }
    }));

export default PaginationStore;

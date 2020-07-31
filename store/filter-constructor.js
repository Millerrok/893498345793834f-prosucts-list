export class Filter {
    constructor(filterField) {
        this.filterField = filterField;
    }

    getFilterField() {
        return this.filterField
    }
}

export default (filterField) => new Filter(filterField);

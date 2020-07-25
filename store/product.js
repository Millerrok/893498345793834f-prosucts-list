import {getRoot, types} from "mobx-state-tree";

const ProductStore = types
    .model('ProductStore', {
        code: types.string,
        price: types.string,
        productName: types.string,
        imageURLs: types.array(types.string),
        mobileImageURLs: types.array(types.string),
        imageIndex: 0
    })
    .views(self => ({
        containInProductName(query) {
            return self.productName
                .toLowerCase()
                .includes(query);
        },

        get name() {
            return self.productName;
        },
        get images() {
            if (getRoot(self).isMobile) {
                return self.mobileImageURLs
            }

            return self.imageURLs
        },
        get imageURL() {
            return self.images[self.imageIndex];
        },
    }));

export default ProductStore;

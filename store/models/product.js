import {getRoot, types} from 'mobx-state-tree';

const ProductStore = types
    .model('ProductStore', {
        mobileImageURLs: types.array(types.string),
        imageURLs: types.array(types.string),
        productName: types.string,
        price: types.string,
        code: types.string,
        imageIndex: 0
    })
    .views(self => ({
        get name() {
            return self.productName;
        },
        get images() {
            if (getRoot(self).isMobile) {
                return self.mobileImageURLs;
            }

            return self.imageURLs;
        },
        get imageURL() {
            return self.images[self.imageIndex];
        },
    }));

export default ProductStore;

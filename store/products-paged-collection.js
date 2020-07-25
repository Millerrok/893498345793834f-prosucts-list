import makePagedCollectionStore from "./paged-collection";
import ProductStore from "./product";

const ProductsPagedCollection = makePagedCollectionStore(ProductStore);
export default ProductsPagedCollection

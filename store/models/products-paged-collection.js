import {makePagedCollectionStore} from './../constructors';
import ProductStore from './product';

const ProductsPagedCollection = makePagedCollectionStore(ProductStore);
export default ProductsPagedCollection;

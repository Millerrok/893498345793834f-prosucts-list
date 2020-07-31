import collectionModelConstructor from '../collection-constructor'
import filterConstructor from '../filter-constructor'
import ProductStore from "./product";

const filter = filterConstructor('productName');
const loadServiceName = 'productsService';
const itemModel = ProductStore;
const name = 'ProductsStore';

export default collectionModelConstructor({name, itemModel, filter, loadServiceName});

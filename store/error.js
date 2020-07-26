import {types} from "mobx-state-tree";

const ErrorState =
    types
        .model('ShopStore', {
            message: '',
        })
        .views(self => ({
            get exist() {
                return self.message.length
            }
        }))
        .actions(self => ({
            clean() {
                self.message = ''
            },
            make(message) {
                self.message = message.toString();
            }
        }));

export default ErrorState;

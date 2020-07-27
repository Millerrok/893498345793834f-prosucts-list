const DEFAULT_MESSAGE = 'We have some problem';

export class CustomError {
    static serverError({status}) {
        return `Data can't be loaded, server side error. Status: ${status}`
    }

    static fetchError(error) {
        if (!error || error.message) {
            return DEFAULT_MESSAGE
        }

        return CustomError.makeError(error.message);
    }
    
   static makeError(message) {
        throw Error(message);
    }
}

export default class RESTClient {
    async request(url) {
        let response;

        try {
            response = await fetch(url);
        } catch (err) {
            CustomError.makeError(CustomError.fetchError(err))
        }

        if (response && !response.ok) {
            CustomError.makeError(CustomError.serverError(response))
        }

        const body = await response.json();

        return body;
    }
}

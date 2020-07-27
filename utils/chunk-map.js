export default (myArray, chunk_size) => {
    let arrayLength = myArray.length;
    let result = {};

    for (let index = 0; index < arrayLength; index += chunk_size) {
        const myChunk = myArray.slice(index, index + chunk_size);
        const chunkNumber = index / chunk_size + 1 + '';
        result[chunkNumber] = myChunk;
    }

    return result;
}

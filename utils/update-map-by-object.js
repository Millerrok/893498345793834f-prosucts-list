export default (map, obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            map.set(key, obj[key])
        }
    }

    return map;
};

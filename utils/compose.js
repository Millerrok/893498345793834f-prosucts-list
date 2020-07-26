export default (...funcs) => (value) => funcs.reduceRight((prev, f) => f(prev), value);

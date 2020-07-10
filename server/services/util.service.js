const add = (a, b) => {
    return a + b;
}

module.exports = {
    add: add
}

console.log(add(process.argv[2], process.argv[3]));
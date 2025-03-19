function isPalindrom(str) {
    return str === [...str].reverse().join("");
}

module.exports = { isPalindrom };
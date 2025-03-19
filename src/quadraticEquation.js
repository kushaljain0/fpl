function quadraticEquation(a, b, c) {
    let d = b * b - 4 * a * c;
    return d < 0 ? [] : d === 0 ? [-b / (2 * a)] : [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
}

module.exports = { quadraticEquation };
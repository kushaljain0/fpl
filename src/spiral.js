function spiral(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) return [];

    let result = [];

    while (matrix.length) {
        result.push(...matrix.shift());

        if (matrix.length && matrix[0].length) {
            for (let row of matrix) {
            if (row.length) result.push(row.pop());
            }
        }

        if (matrix.length) {
            result.push(...(matrix.pop().reverse()));
        }

        if (matrix.length && matrix[0].length) {
            for (let i = matrix.length - 1; i >= 0; i--) {
            if (matrix[i].length) result.push(matrix[i].shift());
            }
        }
    }
    return result;
}
  
module.exports = { spiral };
  
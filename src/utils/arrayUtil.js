export function deepCloneArray(array) {
    const clone = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            clone.push(deepCloneArray(element));
        } else {
            clone.push(element);
        }
    }

    return clone;
}

export function parseContent(fileContent) {
    if (fileContent.length === 0) return [];
    const rows = fileContent.split('\r\n');
    const newTriangle = [];
    for (let row of rows) {
        let rowArray = [];
        const tempArray = row.replace('/\s/g', ' ').split(' ');
        for (let ele of tempArray) {
            if (Number(ele) >= 0 && ele.length > 0) {
                rowArray.push(Number(ele));
            }
        }
        newTriangle.push(rowArray);
    };
    return newTriangle;
}
export function getAlteredTriangle(triangle) {
    if (triangle.length === 0) return [0, []];
    const _triangle = deepCloneArray(triangle);
    for (let i = _triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < _triangle[i].length; j++) {
            _triangle[i][j] += Math.max(_triangle[i + 1][j], _triangle[i + 1][j + 1]);
        }
    }
    let _eleArray = [[0, 0]];
    let i = 0, j = 0;
    while (i < _triangle.length - 1) {
        if (_triangle[i + 1][j] > _triangle[i + 1][j + 1]) {
            _eleArray.push([i + 1, j]);
        } else {
            _eleArray.push([i + 1, j + 1]);
            j += 1;
        }
        i += 1;
    }
    return [_triangle[0][0], _eleArray];
}
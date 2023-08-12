import {cleanup, screen, render} from '@testing-library/react';
import { parseContent, getAlteredTriangle } from './arrayUtil';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('Should parseContent work', () => {
    const input = `1 \r\n2 3\r\n 4 5 6`;
    const output = parseContent(input);
    const expectedOutput = [[1],[2,3],[4,5,6]];
    expect(output).toStrictEqual(expectedOutput)
});

test('Should getAlteredTriangle work', () => {
    const input = [[1],[2,3],[4,5,6]];
    const output = getAlteredTriangle(input);
    const expectedOutput = [10, [[0,0],[1,1],[2,2]]];
    expect(output).toStrictEqual(expectedOutput)
});
import {cleanup, screen, render} from '@testing-library/react';
import TriangleMatrix from './TriangleMatrix';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


const fileContent = `1 \r\n2 3\r\n 4 5 6`;

test('Should render the matrix correctly', () => {
  render(<TriangleMatrix fileContent={fileContent} />);
  
  const numberTwoItem = screen.getByText(/2/i);
  const numberFourItem = screen.getByText(/4/i);
  expect(numberTwoItem).toBeInTheDocument();
  expect(numberFourItem).toBeInTheDocument();
});

test('Should render the result correctly', () => {
  render(<TriangleMatrix fileContent={fileContent} />);
  
  const result = screen.getByTestId('result').innerHTML;
  
  expect(Number(result)).toBe(10);
});
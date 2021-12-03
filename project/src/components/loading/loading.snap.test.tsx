import {render} from '@testing-library/react';
import Loading from './loading';

describe('Component: Loading', () => {
  test('should render correctly', () => {
    const {container} = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});

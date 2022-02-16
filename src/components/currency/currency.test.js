import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Currency from './currency';

describe('Currency', () => {
  const data = {
    data: {
      currency: 'MOP',
      precision: 2,
      exchangeRate: {
        buy: 0.001,
        middle: 0.001,
        sell: 0.001,
        indicator: 0,
        lastModified: '2011-07-04T22:00:00Z',
      },
      flags: ['provided'],
    },
  };
  it('should render Currency', () => {
    const { baseElement } = render(<Currency data={data} />);
    expect(baseElement).toBeInTheDocument();
  });
});

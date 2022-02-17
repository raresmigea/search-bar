import React from 'react';
import '@testing-library/react';
import { search } from './container';

describe('test search ', () => {
  const searchedList = [
    {
      currency: 'AAA',
      precision: 2,
      nameI18N: 'Fiji Dollar',
      exchangeRate: {
        buy: 2,
        middle: 2.25,
        sell: 2.5,
        indicator: 0,
        lastModified: '2012-02-14T23:00:00Z',
      },
      banknoteRate: {
        buy: 2.2,
        middle: 2.4,
        sell: 2.6,
        indicator: 0,
        lastModified: '2018-11-06T23:00:00Z',
      },
      flags: ['provided'],
    },
    {
      currency: 'MXN',
      precision: 2,
      nameI18N: 'AAAsasas',
      exchangeRate: {
        buy: 22.38,
        middle: 22.98,
        sell: 23.58,
        indicator: 0,
        lastModified: '2018-11-08T23:00:00Z',
      },
      banknoteRate: {
        buy: 21.1,
        middle: 22.6,
        sell: 24.1,
        indicator: 0,
        lastModified: '2018-11-06T23:00:00Z',
      },
      flags: ['provided'],
    },
  ];

  const searchedList2 = [
    {
      currency: 'FJD',
      precision: 2,
      nameI18N: 'Fiji Dollar',
      exchangeRate: {
        buy: 2,
        middle: 2.25,
        sell: 2.5,
        indicator: 0,
        lastModified: '2012-02-14T23:00:00Z',
      },
      banknoteRate: {
        buy: 2.2,
        middle: 2.4,
        sell: 2.6,
        indicator: 0,
        lastModified: '2018-11-06T23:00:00Z',
      },
      flags: ['provided'],
    },
    {
      currency: 'MXN',
      precision: 2,
      nameI18N: 'Mexican Peso',
      exchangeRate: {
        buy: 22.38,
        middle: 22.98,
        sell: 23.58,
        indicator: 0,
        lastModified: '2018-11-08T23:00:00Z',
      },
      banknoteRate: {
        buy: 21.1,
        middle: 22.6,
        sell: 24.1,
        indicator: 0,
        lastModified: '2018-11-06T23:00:00Z',
      },
      flags: ['provided'],
    },
  ];
  it('test filter currency code', () => {
    const result = search(searchedList2, 'MXN');
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(searchedList2[1]);
  });

  it('test filter currency code and name', () => {
    const result = search(searchedList, 'AAA');
    expect(result).toHaveLength(2);
  });
});

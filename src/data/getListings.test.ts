import getListings, { Listing } from './getListings';

jest.mock('./listings.json', () => ({
  listings: [
    {
      _id: '1',
      title: { de: 'Title DE', en: 'Title EN' },
      image: 'image.jpg',
      sqm: 100,
      beds: 2,
      price: 200000,
    },
    {
      _id: '2',
      title: { de: 'Title DE 2', en: 'Title EN 2' },
      image: 'image2.jpg',
      sqm: 80,
      beds: 1,
      price: 150000,
    },
  ],
}));

describe('getListings', () => {
  it(' should returns an array of listings', async () => {
    const result = await getListings();
    const expectedResult: Listing[] = [
      {
        _id: '1',
        title: { de: 'Title DE', en: 'Title EN' },
        image: 'image.jpg',
        sqm: 100,
        beds: 2,
        price: 200000,
      },
      {
        _id: '2',
        title: { de: 'Title DE 2', en: 'Title EN 2' },
        image: 'image2.jpg',
        sqm: 80,
        beds: 1,
        price: 150000,
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});

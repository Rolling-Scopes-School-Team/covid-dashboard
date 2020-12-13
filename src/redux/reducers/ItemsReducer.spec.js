import { shallow } from 'enzyme';

import ItemsReducer from './globalCasesReducer';

describe('>>>R E D U C E R --- Test itemsReducer', () => {
  it('+++ reducer for DELETE_ITEMS', () => {
    let state = [{ id: 1 }, { id: 2 }, { id: 3 }];
    state = ItemsReducer(state, { type: 'DELETE_ITEMS', idToDelete: 1 });
    expect(state).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('+++ reducer for ADD_RATING', () => {
    let state = [
      {
        rating: [{ user: 'andreykorotkins@gmail.com', ratingValue: '3' }],
        id: '5cd993f092679234f8a46c06',
        averageRating: 3,
        __v: 0,
      },
    ];
    state = ItemsReducer(state, {
      type: 'ADD_RATING',
      itemId: '5cd993f092679234f8a46c06',
      ratingValue: '4',
      user: { logEmail: 'andreykorotkins@gmail.com' },
    });
    expect(state).toEqual([
      {
        rating: [{ user: 'andreykorotkins@gmail.com', ratingValue: '4' }],
        id: '5cd993f092679234f8a46c06',
        averageRating: 4,
        __v: 0,
      },
    ]);
  });

  it('+++ reducer for ITEMS_FETCH_DATA_SUCCESS', () => {
    let state = [];
    state = ItemsReducer(state, {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      items: [{ id: '322' }],
    });
    expect(state).toEqual([{ id: '322' }]);
  });
});

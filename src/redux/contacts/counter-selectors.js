import { createSelector } from 'reselect';

export const getItems = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getFilteredItems = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

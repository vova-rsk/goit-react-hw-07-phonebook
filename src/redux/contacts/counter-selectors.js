export const getItems = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getFilteredItems = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  return items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export const getTasks = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const getContact = state => {
      return state.contacts.filter(({ name }) =>
        name.toLowerCase().includes(state.filter.toLowerCase())
      );
    };
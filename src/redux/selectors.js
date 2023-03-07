
export const selectStatus = state => state.contacts.status;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectContacts = state =>state.contacts.contacts.items;

export const selectContact = state => {

      return state.contacts.contacts.items.filter(({ name }) =>
        name.toLowerCase().includes(state.contacts.filter.toLowerCase())
      );
    };
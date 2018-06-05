const initialState = {
  contactList: [],
  loading: false
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_ADD':
      return {
        ...state,
        contactList: state.contactList.concat(action.contact)
      };
    case 'CONTACT_EDIT':
      // Reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      const index = state.contactList.findIndex(c => c.id === action.contact.id);
      return {
        ...state,
        contactList: [
          ...state.contactList.slice(0, index),
          action.contact,
          ...state.contactList.slice(index + 1)
        ]
      };
    case 'CONTACT_DELETE':
      return {
        ...state,
        contactList: [
          // Reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
          ...state.contactList.slice(0, action.index),
          ...state.contactList.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
};

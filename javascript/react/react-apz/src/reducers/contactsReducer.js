const initialState = {
  contactList: [],
  loading: false
};

// Reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
const findContactIndex = (state, id) => state.contactList.findIndex(c => c.id === id);

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_FETCH':
      return {
        ...state,
        contactList: action.contacts
      };
    case 'CONTACT_ADD':
      return {
        ...state,
        contactList: state.contactList.concat(action.contact)
      };
    case 'CONTACT_EDIT': {
      const index = findContactIndex(state, action.contact.id);
      return {
        ...state,
        contactList: [
          ...state.contactList.slice(0, index),
          action.contact,
          ...state.contactList.slice(index + 1)
        ]
      };
    }
    case 'CONTACT_DELETE': {
      const index = findContactIndex(state, action.id);
      return {
        ...state,
        contactList: [
          // Reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
          ...state.contactList.slice(0, index),
          ...state.contactList.slice(index + 1)
        ]
      };
    }
    default:
      return state;
  }
};


// return Object.assign({}, state, {
//   isFetching: true,
//   didInvalidate: false
// });

// return {
//   ...state,
//   isFetching: true,
//   didInvalidate: false
// }

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
    case 'CONTACT_DELETE':
      return {
        ...state,
        contactList: [
          ...state.contactList.slice(0, action.index),
          ...state.contactList.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
};

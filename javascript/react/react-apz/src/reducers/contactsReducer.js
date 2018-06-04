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
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { contactsReducer } from './contactsReducer';

export default combineReducers({
  contacts: contactsReducer,
  form: formReducer
});

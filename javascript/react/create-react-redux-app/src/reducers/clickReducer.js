import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  newValue: 'Atualizando via Redux!'
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        // preserva o restante do estado usando o …state,
        // que recupera o estado anterior e passa para o novo objeto
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
}

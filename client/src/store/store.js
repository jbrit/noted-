import { actions } from "./actions";

const defaultState = {
  user: null,
  notes: null,
  isLoading: false,
  hasError: false,
};

const Store = (state = defaultState, action) => {
  switch (action.type) {
    //handle cases for log in
    case actions.actionLoginActions.submitForm:
      return {
        ...state,
        isLoading: true,
      };
    case actions.actionLoginActions?.submitFormSuccess:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case actions.actionLoginActions?.submitFormFailure:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };

    //handle docs cases
    case actions.fetchDoc?.getDocs:
      return {
        ...state,
        isLoading: true,
      };
    case actions.fetchDoc?.getDocsSuccess:
      return {
        ...state,
        notes: action.payload,
        isLoading: false,
      };
    case actions.fetchDoc?.getDocsFailure:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };

    //case for default state
    default:
      return state;
  }
};

export default Store;

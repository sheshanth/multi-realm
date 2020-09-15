const initialState = {
  authenticated: false,
  keycloak: null
}
interface actionType {
  type: any;
  payload: { authenticated: any; keycloak: any };
}

export const authenticate = 'authenticate'

export function authReducer(state=initialState, action: actionType) {

  switch (action.type) {
    case 'authenticate':
      return {
        ...state,
        authenticated: action.payload.authenticated,
        keycloak: action.payload.keycloak
      }
    default:
      return state
  }

}
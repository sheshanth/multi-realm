import Keycloak from 'keycloak-js';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../store/reducers/authReducer';
import { RootState } from '../../store/reducers/rootReducer';

function Dashboard() {

  const dispatch = useDispatch()
  const authSelector = (state: RootState) => state.authReducer
  const { authenticated, keycloak } = useSelector(authSelector)

  const keycloakAuthentication = useCallback(() => {
    if(!authenticated) {
      const keycloak = Keycloak('/keycloak.json')
      keycloak.init({ onLoad: 'login-required' })
        .then(authenticated => dispatch({ type: authenticate, payload: { authenticated, keycloak } }))
    }
  }, [authenticated, dispatch])

  useEffect(() => {
    keycloakAuthentication()
  }, [keycloakAuthentication])

  const logout = () => {
    keycloak.logout()
  }

  return (
    <div className="Dasboard">
        <h2>Hello</h2>
        <button type="submit" onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard

import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers/rootReducer'

function Login(props: any) {

  const authSelector = (state: RootState) => state.authReducer
  const { authenticated } = useSelector(authSelector)

  if(authenticated) {
    props.history.push('/dashboard')
  }

  const { register, handleSubmit, errors } = useForm()

  const formSubmit = ({ email }: { email: string }) => {
    console.log(`clicked`)
    props.history.push('/dashboard');
  }

  return (
    <div className="Login">
      <form onSubmit={ handleSubmit(formSubmit) }>
        <div className="email">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="emailId" 
            ref={register({required: true})}  />
          { errors.email && 'Enter EmailID' }
        </div>
        <div className="submit">
          <button type="button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login

import { authConstants } from '../@constants'
import { authServices } from '../@services'
const authActions = {

}

const login = data => {
  return async dispatch => {
    dispatch(request())

    authServices.login(data)
      .then( response => {
        if(response.status){
          dispatch(success(response))
        }else{
          dispatch(failure(response))
        }
      })
      .catch( err => {
        dispatch(failure(err))
      })

  }
  const request = () => { return { action: authConstants.LOGINUSER_REQUEST}}
  const success = res => { return { action: authConstants.LOGINUSER_REQUEST}}
  const failure = res => { return { action: authConstants.LOGINUSER_REQUEST}}
}


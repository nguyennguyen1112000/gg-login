import logo from './logo.svg'
import './App.css'
import { GoogleLogin } from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response)
}

function App() {
  return (
    <div className='App'>
      <GoogleLogin
        clientId='190418180720-cnf8utejpqilhlnmmv08id4kng6rh7im.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default App

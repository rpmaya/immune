import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '776885007763-kiav4j3rgv3v2n73ikiau17q079jrmn9.apps.googleusercontent.com'; // Reemplaza con tu Client ID

// Componente de login
const Login = () => {
  // Función para manejar el inicio de sesión exitoso
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(`Logged in successfully welcome ${res.profileObj.name}. \n See console for full profile object.`);
  };

  // Función para manejar errores
  const onFailure = (error) => {
    console.log('Login failed: res:', error);
    alert('Failed to login. 😢 Please try again later.');
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;

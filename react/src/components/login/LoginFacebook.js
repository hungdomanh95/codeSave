import React from "react";
import FacebookLogin from "react-facebook-login";
const LoginFacebook = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div>
      <FacebookLogin
        appId="811215752802275" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default LoginFacebook;

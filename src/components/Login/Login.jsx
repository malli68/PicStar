import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

 const Login =()=> {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();
  
        return (
            <div>
                    <div class="home-btn d-none d-sm-block">
        <a href="/"><i class="mdi mdi-home-variant h2 text-white"></i></a>
    </div>
    <div>
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-4">
                    <div class="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                        <div class="w-100">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <div>
                                        <div class="text-center mt-5 pt-5">
                                            <div>
                                                <a href="/" class="logo"><img src="assets/images/logo.png"
                                                        alt="logo"/></a>
                                            </div>

                                            <h4 class="font-size-18 mt-4">Welcome Back !</h4>
                                            <p class="text-muted">Sign in to continue to Nazox.</p>
                                        </div>
                                        <div class="p-2 mt-5">
                                            {/* <form class="form-horizontal" action=""> */}

                                                <div class="form-group auth-form-group-custom mb-4">
                                                    <i class="ri-user-2-line auti-custom-input-icon"></i>
                                                    <label for="username">Username</label>
                                                    <input type="text" class="form-control" id="username"
                                                        placeholder="Enter username"/>
                                                </div>

                                                <div class="form-group auth-form-group-custom mb-4">
                                                    <i class="ri-lock-2-line auti-custom-input-icon"></i>
                                                    <label for="userpassword">Password</label>
                                                    <input type="password" class="form-control" id="userpassword"
                                                        placeholder="Enter password"/>
                                                </div>

                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input"
                                                        id="customControlInline"/>
                                                    <label class="custom-control-label"
                                                        for="customControlInline">Remember me</label>
                                                </div>
                                                
                                                <div class="mt-4 text-center">
                                                    <button class="btn btn-primary w-md waves-effect waves-light"
                    onClick={() => loginWithRedirect()}
                    type="submit" >Log In</button>
                                                </div>
                                                 
                                                <div class="mt-4 text-center">
                                                    <a href="auth-recoverpw.html" class="text-muted"><i
                                                            class="mdi mdi-lock mr-1"></i> Forgot your password?</a>
                                                </div>
                                            {/* </form> */}
                                        </div>

                                        <div class="mt-5 text-center">
                                            <p>Don't have an account ? <a href="/registration"
                                                    class="font-weight-medium text-primary"> Register </a> </p>
                                            <p>
                                                <script>document.write(new Date().getFullYear())</script> © PicStar.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="authentication-bg-View">
                        <div class="authentication-bg">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        )
    }


export default Login

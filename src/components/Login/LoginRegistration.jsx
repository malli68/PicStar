import React, { Component } from 'react'

export class LoginRegistration extends Component {
    render() {
        return (
            <div>
                <div class="home-btn d-none d-sm-block">
        <a href="index.html"><i class="mdi mdi-home-variant h2 text-white"></i></a>
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

                                            <h4 class="font-size-18 mt-4">Register account</h4>
                                            <p class="text-muted">Get your free Nazox account now.</p>
                                        </div>

                                        <div class="p-2 mt-5">
                                            {/* <form class="form-horizontal" action="index.html"> */}

                                                <div class="form-group auth-form-group-custom mb-4">
                                                    <i class="ri-mail-line auti-custom-input-icon"></i>
                                                    <label for="useremail">Email</label>
                                                    <input type="email" class="form-control" id="useremail"
                                                        placeholder="Enter email"/>
                                                </div>

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


                                                <div class="text-center">
                                                    <button class="btn btn-primary w-md waves-effect waves-light"
                                                        type="submit">Register</button>
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <p class="mb-0">By registering you agree to the Nazox <a href="#"
                                                            class="text-primary">Terms of Use</a></p>
                                                </div>
                                            {/* </form> */}
                                        </div>

                                        <div class="mt-5 text-center">
                                            <p>Already have an account ? <a href="/"
                                                    class="font-weight-medium text-primary"> Login</a> </p>
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
}

export default LoginRegistration

import React, { Component } from 'react'

export class RecoveryPassword extends Component {
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
                                                <a href="index.html" class="logo"><img src="assets/images/logo.png"
                                                        alt="logo"/></a>
                                            </div>

                                            <h4 class="font-size-18 mt-4">Reset Password</h4>
                                            <p class="text-muted">Reset your password to Nazox.</p>
                                        </div>

                                        <div class="p-2 mt-5">
                                            <div class="alert alert-success mb-4" role="alert">
                                                Enter your Email and instructions will be sent to you!
                                            </div>
                                            <form class="form-horizontal" action="index.html">

                                                <div class="form-group auth-form-group-custom mb-4">
                                                    <i class="ri-mail-line auti-custom-input-icon"></i>
                                                    <label for="useremail">Email</label>
                                                    <input type="email" class="form-control" id="useremail"
                                                        placeholder="Enter email"/>
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <button class="btn btn-primary w-md waves-effect waves-light"
                                                        type="submit">Reset</button>
                                                </div>
                                            </form>
                                        </div>

                                        <div class="mt-5 text-center">
                                            <p>Don't have an account ? <a href="auth-login.html"
                                                    class="font-weight-medium text-primary"> Log in </a> </p>
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

export default RecoveryPassword

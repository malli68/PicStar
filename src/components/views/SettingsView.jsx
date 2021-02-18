import React, { Component } from 'react'
import Header from '../commons/Header'
import LeftSidebar from '../commons/LeftSidebar'
import RightSidebar from '../commons/RightSidebar'

export class SettingsView extends Component {
    render() {
        return (
            <div>
                  {/* <!-- Begin page --> */}
    <div id="layout-wrapper">

<Header/>

        {/* <!-- ========== Left Sidebar Start ========== --> */}
   <LeftSidebar/>
        {/* <!-- Left Sidebar End -->

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    {/* <!-- start page title --> */}
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0">Profile</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">My Account</a></li>
                                        <li class="breadcrumb-item active">Profile </li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}


                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row profileViewRow">
                                        <div class="col-md-4">
                                            <div class="profilePic">
                                                <img src="./assets/images/avatar.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="profileView">
                                                <h1>Profile Name</h1>
                                                <h2>Designation</h2>


                                                <ul class="profile-wrap mt-50">
                                                    <li>
                                                        <div class="profile-title">age</div>
                                                        <div class="profile-desc">24</div>
                                                    </li>
                                                    <li>
                                                        <div class="profile-title">address</div>
                                                        <div class="profile-desc">
                                                            Glenlake St. Mays Landing, NJ 08330
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="profile-title">email</div>
                                                        <div class="profile-desc">
                                                            benjaminsirje49@matresume.com
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="profile-title">phone</div>
                                                        <div class="profile-desc">
                                                            +1 234 56 78 90
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>{/*  <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}
            <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title mt-0" id="exampleModalScrollableTitle">Edit Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="productname">Celebrity Name</label>
                                    <input id="productname" name="productname" type="text" class="form-control"/>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Category</label>
                                            <select class="form-control select2">
                                                <option>Select</option>
                                                <option value="MO">Movies</option>
                                                <option value="SP">Sports</option>
                                                <option value="PO">Political</option>
                                                <option value="MU">Musicians</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="control-label">Activities </label>

                                            <select class="select2 form-control select2-multiple" multiple="multiple"
                                                data-placeholder="Choose ...">
                                                <option value="LS" selected>Live Selfie</option>
                                                <option value="PS" selected>Photo Selfie</option>
                                                <option value="VM">Video Message </option>

                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <label class="control-label">Address</label>
                                        <input type="text" class="form-control"/>
                                    </div>
                                    <div class="col-lg-4">

                                        <div class="form-group">
                                            <label class="control-label">State</label>
                                            <select class="form-control select2">
                                                <option>Select</option>
                                                <optgroup label="Alaskan/Hawaiian Time Zone">
                                                    <option value="AK">Alaska</option>
                                                    <option value="HI">Hawaii</option>
                                                </optgroup>
                                                <optgroup label="Pacific Time Zone">
                                                    <option value="CA">California</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="WA">Washington</option>
                                                </optgroup>
                                                <optgroup label="Mountain Time Zone">
                                                    <option value="AZ">Arizona</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="WY">Wyoming</option>
                                                </optgroup>
                                                <optgroup label="Central Time Zone">
                                                    <option value="AL">Alabama</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="WI">Wisconsin</option>
                                                </optgroup>
                                                <optgroup label="Eastern Time Zone">
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WV">West Virginia</option>
                                                </optgroup>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="col-lg-4">

                                        <div class="form-group">
                                            <label class="control-label">City</label>
                                            <select class="form-control select2">
                                                <option>Select</option>
                                                <optgroup label="Alaskan/Hawaiian Time Zone">
                                                    <option value="AK">Alaska</option>
                                                    <option value="HI">Hawaii</option>
                                                </optgroup>
                                                <optgroup label="Pacific Time Zone">
                                                    <option value="CA">California</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="WA">Washington</option>
                                                </optgroup>
                                                <optgroup label="Mountain Time Zone">
                                                    <option value="AZ">Arizona</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="WY">Wyoming</option>
                                                </optgroup>
                                                <optgroup label="Central Time Zone">
                                                    <option value="AL">Alabama</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="WI">Wisconsin</option>
                                                </optgroup>
                                                <optgroup label="Eastern Time Zone">
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WV">West Virginia</option>
                                                </optgroup>
                                            </select>

                                        </div>
                                    </div>

                                </div>


                                <div class="form-group">
                                    <label for="productdesc"> Description</label>
                                    <textarea class="form-control" id="productdesc" rows="3"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="productdesc"> Upload Profile image </label>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile"/>
                                        <label class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="productdesc"> Upload Profile image </label>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile3"/>
                                        <label class="custom-file-label" for="customFile3">Choose file</label>
                                    </div>
                                </div>
                                <div class="row priceTable">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">

                                                <h4 class="card-title">Price Table</h4>

                                                <div class="table-responsive no-dataTable">
                                                    <table class="table table-editable table-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th></th>
                                                                <th>Service Name</th>
                                                                <th>Price (Editable)</th>
                                                            </tr>
                                                        </thead>
                                                        <tr>

                                                            <td>1</td>
                                                            <td></td>
                                                            <td>Live Selfie</td>

                                                            <td data-original-value="1.99"><a href="#" data-type="text"
                                                                    data-pk="1" class="editable" data-url=""
                                                                    data-title="Edit Quantity">$ 50</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td></td>
                                                            <td>Photo Selfie</td>

                                                            <td data-original-value="25"><a href="#" data-type="text"
                                                                    data-pk="1" class="editable" data-url=""
                                                                    data-title="Edit Quantity"> 25</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td></td>
                                                            <td>Video Message</td>

                                                            <td data-original-value="250"><a href="#" data-type="text"
                                                                    data-pk="1" class="editable" data-url=""
                                                                    data-title="Edit Quantity">250</a></td>
                                                        </tr>

                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div> {/* <!-- end col --> */}
                                </div> {/* <!-- end row --> */}


                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light waves-effect" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary waves-effect waves-light">Save changes</button>
                        </div>
                    </div>{/* <!-- /.modal-content --> */}
                </div>{/* <!-- /.modal-dialog --> */}
            </div>{/* <!-- /.modal --> */}

            <footer class="footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            <script>document.write(new Date().getFullYear())</script> © PicStar.
                        </div>

                    </div>
                </div>
            </footer>
        </div>
        {/* <!-- end main content--> */}

    </div>
    {/* <!-- END layout-wrapper -->

    <!-- Right Sidebar --> */}
   <RightSidebar/>
            </div>
        )
    }
}

export default SettingsView

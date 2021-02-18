import React, { Component } from 'react'
import Footer from '../commons/Footer'
import Header from '../commons/Header'
import LeftSidebar from '../commons/LeftSidebar'
import RightSidebar from '../commons/RightSidebar'

export class AddCelebrity extends Component {
    render() {
        return (
            <div>
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
                        <h4 class="mb-0">Add Celebrity</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Celebrity</a></li>
                                <li class="breadcrumb-item active">Add New Member </li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- end page title --> */}

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">

                            <div id="addproduct-nav-pills-wizard" class="twitter-bs-wizard">
                                <ul class="twitter-bs-wizard-nav">
                                    <li class="nav-item">
                                        <a href="#basic-info" class="nav-link" data-toggle="tab">
                                            <span class="step-number">01</span>
                                            <span class="step-title">Basic Info</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#product-img" class="nav-link" data-toggle="tab">
                                            <span class="step-number">02</span>
                                            <span class="step-title"> Images</span>
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#metadata" class="nav-link" data-toggle="tab">
                                            <span class="step-number">03</span>
                                            <span class="step-title">Price Details</span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content twitter-bs-wizard-tab-content">
                                    <div class="tab-pane" id="basic-info">
                                        <h4 class="card-title">Basic Information</h4>
                                        <p class="card-title-desc">Fill all information below</p>

                                        <form>
                                            <div class="form-group">
                                                <label for="productname">Celebrity Name</label>
                                                <input id="productname" name="productname" type="text"
                                                    class="form-control"/>
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

                                                        <select class="select2 form-control select2-multiple"
                                                            multiple="multiple" data-placeholder="Choose ...">
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
                                                <textarea class="form-control" id="productdesc"
                                                    rows="5"></textarea>
                                            </div>
                                        </form>

                                    </div>
                                    <div class="tab-pane" id="product-img">
                                        <h4 class="card-title">Celebrity Images</h4>
                                        <p class="card-title-desc">Upload Cover image</p>
                                        <form action="/" method="post" class="dropzone">
                                            <div class="fallback">
                                                <input name="file" type="file" multiple />
                                            </div>

                                            <div class="dz-message needsclick">
                                                <div class="mb-3">
                                                    <i class="display-4 text-muted ri-upload-cloud-2-line"></i>
                                                </div>

                                                <h4>Drop files here or click to upload.</h4>
                                            </div>
                                        </form>

                                        <p class="card-title-desc mt-5">Upload Profile image</p>
                                        <form action="/" method="post" class="dropzone">
                                            <div class="fallback">
                                                <input name="file" type="file" multiple />
                                            </div>

                                            <div class="dz-message needsclick">
                                                <div class="mb-3">
                                                    <i class="display-4 text-muted ri-upload-cloud-2-line"></i>
                                                </div>

                                                <h4>Drop files here or click to upload.</h4>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane" id="metadata">
                                        <h4 class="card-title">Price Details</h4>
                                        <p class="card-title-desc">Fill all information below</p>

                                        <form>
                                            <div class="row ServiceTable">
                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <label class="control-label">Select Service </label>
                                                        <select class="form-control select2">
                                                            <option>Select</option>
                                                            <option value="MO">Live Selfie</option>
                                                            <option value="SP">Photo Selfie</option>
                                                            <option value="PO">Video Message </option>

                                                        </select>

                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="form-group position-relative">
                                                        <label for="validationTooltipUsername">Price </label>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"
                                                                    id="validationTooltipUsernamePrepend">$</span>
                                                            </div>
                                                            <input type="text" class="form-control"
                                                                id="validationTooltipUsername"
                                                                placeholder="Enter Price"/>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <button type="button"
                                                        class="btn btn-primary waves-effect waves-light">Add</button>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="table-responsive">
                                                        <table
                                                            class="table table-centered datatable dt-responsive nowrap"
                                                            data-page-length="5"
                                                            style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%"}}>
                                                            <thead class="thead-light">
                                                                <tr>

                                                                    <th>ID</th>
                                                                    <th>Service</th>
                                                                    <th>Price</th>
                                                                    <th style={{width: "120px"}}>Action</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>


                                                                    <td><a href="javascript: void(0);"
                                                                            class="text-dark font-weight-bold">1</a>
                                                                    </td>

                                                                    <td>Live Selfie</td>

                                                                    <td>
                                                                        $50
                                                                    </td>

                                                                    <td>

                                                                        <a href="javascript:void(0);"
                                                                            class="text-danger"
                                                                            data-toggle="tooltip"
                                                                            data-placement="top" title=""
                                                                            data-original-title="Delete"><i
                                                                                class="mdi mdi-trash-can font-size-18"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>


                                                                    <td><a href="javascript: void(0);"
                                                                            class="text-dark font-weight-bold">2</a>
                                                                    </td>

                                                                    <td>Photo Selfie</td>

                                                                    <td>
                                                                        $25
                                                                    </td>

                                                                    <td>

                                                                        <a href="javascript:void(0);"
                                                                            class="text-danger"
                                                                            data-toggle="tooltip"
                                                                            data-placement="top" title=""
                                                                            data-original-title="Delete"><i
                                                                                class="mdi mdi-trash-can font-size-18"></i></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>


                                                                    <td><a href="javascript: void(0);"
                                                                            class="text-dark font-weight-bold">3</a>
                                                                    </td>

                                                                    <td>Video Message</td>

                                                                    <td>
                                                                        $252
                                                                    </td>

                                                                    <td>

                                                                        <a href="javascript:void(0);"
                                                                            class="text-danger"
                                                                            data-toggle="tooltip"
                                                                            data-placement="top" title=""
                                                                            data-original-title="Delete"><i
                                                                                class="mdi mdi-trash-can font-size-18"></i></a>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>


                                        </form>

                                        <div class="text-center mt-4">
                                            <button type="submit"
                                                class="btn btn-primary mr-2 waves-effect waves-light">Save
                                                Changes</button>
                                            <button type="submit"
                                                class="btn btn-light waves-effect">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                <ul class="pager wizard twitter-bs-wizard-pager-link">
                                    <li class="previous"><a href="#">Previous</a></li>
                                    <li class="next"><a href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end row --> */}

        </div> {/* <!-- container-fluid --> */}
    </div>
    {/* <!-- End Page-content --> */}

<Footer/>
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

export default AddCelebrity

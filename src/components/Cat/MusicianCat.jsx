import React, { Component } from 'react'
import Footer from '../commons/Footer'
import Header from '../commons/Header'
import LeftSidebar from '../commons/LeftSidebar'
import RightSidebar from '../commons/RightSidebar'

export class MusicianCat extends Component {
    render() {
        return (
            <div>
                <div id="layout-wrapper">

       <Header/>

{/* <!-- ========== Left Sidebar Start ========== --> */}
       <LeftSidebar/>
{/* <!-- Left Sidebar End --> */}

{/* <!-- ============================================================== -->
<!-- Start right Content here -->
<!-- ============================================================== --> */}
<div class="main-content">

    <div class="page-content">
        <div class="container-fluid">

            {/* <!-- start page title --> */}
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-flex align-items-center justify-content-between">
                        <h4 class="mb-0">Celebrity View</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Celebrity</a></li>
                                <li class="breadcrumb-item active">Celebrity View </li>
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


                            <h4 class="card-title mb-4">Latest Added</h4>

                            <div class="table-responsive no-dataTable">
                                <table class="table table-centered "
                            style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%"}}>

                                    <thead class="thead-light">
                                        <tr>

                                            <th>ID</th>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Category </th>
                                            <th>Service </th>
                                            <th style={{width: "120px"}}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="javascript: void(0);"
                                                    class="text-dark font-weight-bold">#1</a> </td>
                                            <td>
                                                04 Apr, 2020
                                            </td>
                                            <td>Walter Brown</td>

                                            <td>
                                                Musicians
                                            </td>
                                            <td>
                                                Live Selfie / Photo Selfie / Video Message
                                            </td>

                                            <td>
                                                <a href="javascript:void(0);" class="mr-3 text-primary"
                                                    data-toggle="modal" data-target="#exampleModalScrollable"><i
                                                        class="mdi mdi-pencil font-size-18"></i></a>
                                                <a href="javascript:void(0);" class="text-danger"
                                                    data-toggle="tooltip" data-placement="top" title=""
                                                    data-original-title="Delete"><i
                                                        class="mdi mdi-trash-can font-size-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="javascript: void(0);"
                                                    class="text-dark font-weight-bold">#2</a> </td>
                                            <td>
                                                20 Dec, 2019
                                            </td>
                                            <td>Walter Brown</td>

                                            <td>
                                                Musicians
                                            </td>
                                            <td>
                                                Live Selfie / Photo Selfie / Video Message
                                            </td>

                                            <td>
                                                <a href="javascript:void(0);" class="mr-3 text-primary"
                                                    data-toggle="modal" data-target="#exampleModalScrollable"><i
                                                        class="mdi mdi-pencil font-size-18"></i></a>
                                                <a href="javascript:void(0);" class="text-danger"
                                                    data-toggle="tooltip" data-placement="top" title=""
                                                    data-original-title="Delete"><i
                                                        class="mdi mdi-trash-can font-size-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="javascript: void(0);"
                                                    class="text-dark font-weight-bold">#3</a> </td>
                                            <td>
                                                04 June, 2019
                                            </td>
                                            <td>Walter Brown</td>

                                            <td>
                                                Musicians
                                            </td>
                                            <td>
                                                Live Selfie / Photo Selfie / Video Message
                                            </td>

                                            <td>
                                                <a href="javascript:void(0);" class="mr-3 text-primary"
                                                    data-toggle="modal" data-target="#exampleModalScrollable"><i
                                                        class="mdi mdi-pencil font-size-18"></i></a>
                                                <a href="javascript:void(0);" class="text-danger"
                                                    data-toggle="tooltip" data-placement="top" title=""
                                                    data-original-title="Delete"><i
                                                        class="mdi mdi-trash-can font-size-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="javascript: void(0);"
                                                    class="text-dark font-weight-bold">#4</a> </td>
                                            <td>
                                                04 May, 2019
                                            </td>
                                            <td>Walter Brown</td>

                                            <td>
                                                Musicians
                                            </td>
                                            <td>
                                                Live Selfie / Photo Selfie / Video Message
                                            </td>

                                            <td>
                                                <a href="javascript:void(0);" class="mr-3 text-primary"
                                                    data-toggle="modal" data-target="#exampleModalScrollable"><i
                                                        class="mdi mdi-pencil font-size-18"></i></a>
                                                <a href="javascript:void(0);" class="text-danger"
                                                    data-toggle="tooltip" data-placement="top" title=""
                                                    data-original-title="Delete"><i
                                                        class="mdi mdi-trash-can font-size-18"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="javascript: void(0);"
                                                    class="text-dark font-weight-bold">#5</a> </td>
                                            <td>
                                                04 Feb, 2019
                                            </td>
                                            <td>Walter Brown</td>

                                            <td>
                                                Musicians
                                            </td>
                                            <td>
                                                Live Selfie / Photo Selfie / Video Message
                                            </td>

                                            <td>
                                                <a href="javascript:void(0);" class="mr-3 text-primary"
                                                    data-toggle="modal" data-target="#exampleModalScrollable"><i
                                                        class="mdi mdi-pencil font-size-18"></i></a>
                                                <a href="javascript:void(0);" class="text-danger"
                                                    data-toggle="tooltip" data-placement="top" title=""
                                                    data-original-title="Delete"><i
                                                        class="mdi mdi-trash-can font-size-18"></i></a>
                                            </td>
                                        </tr>



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end row -->
            <!-- end row --> */}

        </div> {/* <!-- container-fluid --> */}
    </div>
    {/* <!-- End Page-content --> */}
    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="exampleModalScrollableTitle">Change Category</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>


                        <div class="row">
                            <div class="col-md-12">
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

                        </div>



                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light waves-effect" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light">Save changes</button>
                </div>
            </div>{/* <!-- /.modal-content --> */}
        </div>{/* <!-- /.modal-dialog --> */}
    </div>{/* <!-- /.modal --> */}
 <Footer/>
 
</div>
{/* <!-- end main content--> */}

</div>
{/* <!-- END layout-wrapper --> */}

{/* <!-- Right Sidebar --> */}
<RightSidebar/>
            </div>
        )
    }
}

export default MusicianCat

import React, { Component } from 'react'
import Header from '../commons/Header'
import LeftSidebar from '../commons/LeftSidebar'
import RightSidebar from '../commons/RightSidebar'

export class OrderView extends Component {
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


                                    <h4 class="card-title mb-4">Latest Transactions</h4>

                                    <div class="table-responsive">
                                        <table class="table table-centered datatable dt-responsive nowrap"
                                            data-page-length="5"
                                            style={{borderCollapse: "collapse", borderSpacing: "0", width: "100%"}}>
                                            <thead class="thead-light">
                                                <tr>

                                                    <th>Order ID</th>
                                                    <th>Date</th>
                                                    <th>Celebrity Name</th>
                                                    <th>Service</th>
                                                    <th>Total</th>
                                                    <th>Payment Status</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><a href="javascript: void(0);"
                                                            class="text-dark font-weight-bold">#NZ1572</a> </td>
                                                    <td>
                                                        04 Apr, 2020
                                                    </td>
                                                    <td>Walter Brown</td>
                                                    <td>Live Selfie</td>
                                                    <td>
                                                        $172
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-soft-success font-size-12">Paid</div>
                                                    </td>

                                                </tr>
                                                <tr>

                                                    <td><a href="javascript: void(0);"
                                                            class="text-dark font-weight-bold">#NZ1571</a> </td>
                                                    <td>
                                                        03 Apr, 2020
                                                    </td>
                                                    <td>Jimmy Barker</td>
                                                    <td>Photo Selfie</td>
                                                    <td>
                                                        $165
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-soft-warning font-size-12">unpaid</div>
                                                    </td>

                                                </tr>

                                                <tr>


                                                    <td><a href="javascript: void(0);"
                                                            class="text-dark font-weight-bold">#NZ1570</a> </td>
                                                    <td>
                                                        03 Apr, 2020
                                                    </td>
                                                    <td>Donald Bailey</td>
                                                    <td>Video Message</td>
                                                    <td>
                                                        $146
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-soft-success font-size-12">Paid</div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td><a href="javascript: void(0);"
                                                            class="text-dark font-weight-bold">#NZ1572</a> </td>
                                                    <td>
                                                        04 Apr, 2020
                                                    </td>
                                                    <td>Walter Brown</td>
                                                    <td>Live Selfie</td>
                                                    <td>
                                                        $172
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-soft-success font-size-12">Paid</div>
                                                    </td>

                                                </tr>
                                                <tr>

                                                    <td><a href="javascript: void(0);"
                                                            class="text-dark font-weight-bold">#NZ1571</a> </td>
                                                    <td>
                                                        03 Apr, 2020
                                                    </td>
                                                    <td>Jimmy Barker</td>
                                                    <td>Photo Selfie</td>
                                                    <td>
                                                        $165
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-soft-warning font-size-12">unpaid</div>
                                                    </td>

                                                </tr>

                                                <tr>


                                                    <td><a href="javascript: void(0);"
                                                            class="text-dark font-weight-bold">#NZ1570</a> </td>
                                                    <td>
                                                        03 Apr, 2020
                                                    </td>
                                                    <td>Donald Bailey</td>
                                                    <td>Video Message</td>
                                                    <td>
                                                        $146
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-soft-success font-size-12">Paid</div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td><a href="javascript: void(0);"
                                                            class="text-dark font-weight-bold">#NZ1572</a> </td>
                                                    <td>
                                                        04 Apr, 2020
                                                    </td>
                                                    <td>Walter Brown</td>
                                                    <td>Live Selfie</td>
                                                    <td>
                                                        $172
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-soft-success font-size-12">Paid</div>
                                                    </td>

                                                </tr>
                                                <tr>

                                                    <td><a href="javascript: void(0);"
                                                            class="text-dark font-weight-bold">#NZ1571</a> </td>
                                                    <td>
                                                        03 Apr, 2020
                                                    </td>
                                                    <td>Jimmy Barker</td>
                                                    <td>Photo Selfie</td>
                                                    <td>
                                                        $165
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-soft-warning font-size-12">unpaid</div>
                                                    </td>

                                                </tr>

                                                <tr>


                                                    <td><a href="javascript: void(0);"
                                                            class="text-dark font-weight-bold">#NZ1570</a> </td>
                                                    <td>
                                                        03 Apr, 2020
                                                    </td>
                                                    <td>Donald Bailey</td>
                                                    <td>Video Message</td>
                                                    <td>
                                                        $146
                                                    </td>
                                                    <td>
                                                        <div class="badge badge-soft-success font-size-12">Paid</div>
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

                </div>{/*  <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}


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

export default OrderView

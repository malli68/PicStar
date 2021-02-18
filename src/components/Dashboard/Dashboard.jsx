import React, { Component } from 'react'
import Footer from '../commons/Footer'
import Header from '../commons/Header'
import LeftSidebar from '../commons/LeftSidebar'

export class Dashboard extends Component {
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
                                <h4 class="mb-0">Dashboard</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">PicStar</a></li>
                                        <li class="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}


                    <div class="row">
                        <div class="col-xl-8">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="media">
                                                <div class="media-body overflow-hidden">
                                                    <p class="text-truncate font-size-14 mb-2">Number of Celebrities</p>
                                                    <h4 class="mb-0">1452</h4>
                                                </div>
                                                <div class="text-primary">
                                                    <i class=" ri-team-fill
                                                    font-size-24"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-body border-top py-3">
                                            <div class="text-truncate">
                                                <span class="badge badge-soft-success font-size-11"><i
                                                        class="mdi mdi-menu-up"> </i> 2.4% </span>
                                                <span class="text-muted ml-2">From previous period</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="media">
                                                <div class="media-body overflow-hidden">
                                                    <p class="text-truncate font-size-14 mb-2">Sales Revenue</p>
                                                    <h4 class="mb-0">$ 38452</h4>
                                                </div>
                                                <div class="text-primary">
                                                    <i class="ri-store-2-line font-size-24"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body border-top py-3">
                                            <div class="text-truncate">
                                                <span class="badge badge-soft-success font-size-11"><i
                                                        class="mdi mdi-menu-up"> </i> 2.4% </span>
                                                <span class="text-muted ml-2">From previous period</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="media">
                                                <div class="media-body overflow-hidden">
                                                    <p class="text-truncate font-size-14 mb-2">Average Price</p>
                                                    <h4 class="mb-0">$ 15.4</h4>
                                                </div>
                                                <div class="text-primary">
                                                    <i class="ri-briefcase-4-line font-size-24"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body border-top py-3">
                                            <div class="text-truncate">
                                                <span class="badge badge-soft-success font-size-11"><i
                                                        class="mdi mdi-menu-up"> </i> 2.4% </span>
                                                <span class="text-muted ml-2">From previous period</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end row --> */}

                            <div class="card">
                                <div class="card-body">
                                    <div class="float-right d-none d-md-inline-block">
                                        <div class="btn-group mb-2">
                                            <button type="button" class="btn btn-sm btn-light">Today</button>
                                            <button type="button" class="btn btn-sm btn-light active">Weekly</button>
                                            <button type="button" class="btn btn-sm btn-light">Monthly</button>
                                        </div>
                                    </div>
                                    <h4 class="card-title mb-4">Revenue Analytics</h4>
                                    <div>
                                        <div id="line-column-chart" class="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>

                                <div class="card-body border-top text-center">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="d-inline-flex">
                                                <h5 class="mr-2">$12,253</h5>
                                                <div class="text-success">
                                                    <i class="mdi mdi-menu-up font-size-14"> </i>2.2 %
                                                </div>
                                            </div>
                                            <p class="text-muted text-truncate mb-0">This month</p>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="mt-4 mt-sm-0">
                                                <p class="mb-2 text-muted text-truncate"><i
                                                        class="mdi mdi-circle text-primary font-size-10 mr-1"></i> This
                                                    Year :</p>
                                                <div class="d-inline-flex">
                                                    <h5 class="mb-0 mr-2">$ 34,254</h5>
                                                    <div class="text-success">
                                                        <i class="mdi mdi-menu-up font-size-14"> </i>2.1 %
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="mt-4 mt-sm-0">
                                                <p class="mb-2 text-muted text-truncate"><i
                                                        class="mdi mdi-circle text-success font-size-10 mr-1"></i>
                                                    Previous Year :</p>
                                                <div class="d-inline-flex">
                                                    <h5 class="mb-0">$ 32,695</h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="float-right">
                                        <select class="custom-select custom-select-sm">
                                            <option selected>Apr</option>
                                            <option value="1">Mar</option>
                                            <option value="2">Feb</option>
                                            <option value="3">Jan</option>
                                        </select>
                                    </div>
                                    <h4 class="card-title mb-4">Sales Analytics</h4>

                                    <div id="donut-chart" class="apex-charts"></div>

                                    <div class="row">
                                        <div class="col-4">
                                            <div class="text-center mt-4">
                                                <p class="mb-2 text-truncate"><i
                                                        class="mdi mdi-circle text-primary font-size-10 mr-1"></i>
                                                    Product A</p>
                                                <h5>42 %</h5>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="text-center mt-4">
                                                <p class="mb-2 text-truncate"><i
                                                        class="mdi mdi-circle text-success font-size-10 mr-1"></i>
                                                    Product B</p>
                                                <h5>26 %</h5>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="text-center mt-4">
                                                <p class="mb-2 text-truncate"><i
                                                        class="mdi mdi-circle text-warning font-size-10 mr-1"></i>
                                                    Product C</p>
                                                <h5>42 %</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <div class="dropdown float-right">
                                        <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown"
                                            aria-expanded="false">
                                            <i class="mdi mdi-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            {/* <!-- item--> */}
                                            <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                            {/* <!-- item--> */}
                                            <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                            {/* <!-- item--> */}
                                            <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                            {/* <!-- item--> */}
                                            <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                        </div>
                                    </div>

                                    <h4 class="card-title mb-4">Earning Reports</h4>
                                    <div class="text-center">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div>
                                                    <div class="mb-3">
                                                        <div id="radialchart-1" class="apex-charts"></div>
                                                    </div>

                                                    <p class="text-muted text-truncate mb-2">Weekly Earnings</p>
                                                    <h5 class="mb-0">$2,523</h5>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="mt-5 mt-sm-0">
                                                    <div class="mb-3">
                                                        <div id="radialchart-2" class="apex-charts"></div>
                                                    </div>

                                                    <p class="text-muted text-truncate mb-2">Monthly Earnings</p>
                                                    <h5 class="mb-0">$11,235</h5>
                                                </div>
                                            </div>

                                        </div>

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



    <!-- Right bar overlay--> */}
    <div class="rightbar-overlay"></div>
            </div>
        )
    }
}

export default Dashboard

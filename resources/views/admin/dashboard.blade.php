@extends('layout.admin_app')
@section('title')
    Dashboard
@endsection
@section('content')
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="row">
            <!-- Staustic card 6 Start -->
            <div class="col-xl-3 col-md-6">
                <div class="card ui-proj mb-4">
                    <div class="card-body">
                        <h5>Statistics</h5>
                        <p class="pt-3 mb-0 text-primary">Compared to last week</p>
                        <i class="feather icon-activity pt-badge badge-light-primary"></i>
                        <div class="text-left">
                            <h3 class="d-inline-block mb-0 mt-3">5,456</h3>
                            <i class="feather icon-arrow-up display-4 text-success"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card ui-proj mb-4">
                    <div class="card-body">
                        <h5>Unique Visitor</h5>
                        <p class="pt-3 mb-0 text-success">55% From last 28 hours</p>
                        <i class="feather icon-users pt-badge badge-light-success"></i>
                        <div class="text-left">
                            <h3 class="d-inline-block mb-0 mt-3">3,874</h3>
                            <i class="feather icon-arrow-down display-4 text-danger"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card ui-proj mb-4">
                    <div class="card-body">
                        <h5>New Orders</h5>
                        <p class="pt-3 mb-0 text-danger">54% From last month</p>
                        <i class="feather icon-shopping-cart pt-badge badge-light-danger"></i>
                        <div class="text-left">
                            <h3 class="d-inline-block mb-0 mt-3">5,456</h3>
                            <i class="feather icon-arrow-up display-4 text-success"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card ui-proj mb-4">
                    <div class="card-body">
                        <h5>Current Profit</h5>
                        <p class="pt-3 mb-0 text-warning">20% less from last Year</p>
                        <i class="feather icon-pie-chart pt-badge badge-light-warning"></i>
                        <div class="text-left">
                            <h3 class="d-inline-block mb-0 mt-3">$456.76</h3>
                            <i class="feather icon-arrow-down display-4 text-danger"></i>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Staustic card 6 end -->
            <!-- widger start -->
            <div class="col-xl-8 col-md-12">
                <div class="card sale-card table-card">
                    <div class="card-header">
                        <h5>Recent Sales</h5>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead class="thead-light">
                                <tr>
                                    <th class="border-top-0">Product</th>
                                    <th class="border-top-0">Customers</th>
                                    <th class="border-top-0">Categories</th>
                                    <th class="border-top-0">Popularity</th>
                                    <th class="border-top-0">Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="">iPone X</td>
                                    <td class=" p-1">
                                        <ul class="list-inline cust-img-list m-0">
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Kimberly Simmons" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/4.png" alt="Avatar">
                                            </li>
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Willie Torres" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/5.png" alt="Avatar">
                                            </li>
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Rebecca Jones" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/3.png" alt="Avatar">
                                            </li>
                                            <li class="list-inline-item mr-n3">
                                                <span class="badge badge-primary">+8</span>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <span class="badge badge-danger badge-pill">Mobile</span>
                                    </td>
                                    <td>
                                        <div class="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td class="">$ 1200.00</td>
                                </tr>
                                <tr>
                                    <td class="">iPad</td>
                                    <td class=" p-1">
                                        <ul class="list-inline cust-img-list m-0">
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Kimberly Simmons" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/2.png" alt="Avatar">
                                            </li>
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Willie Torres" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/1.png" alt="Avatar">
                                            </li>
                                            <li class="list-inline-item mr-n3">
                                                <span class="badge badge-primary">+5</span>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <span class="badge badge-success badge-pill">Tablet</span>
                                    </td>
                                    <td>
                                        <div class="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td class="">$ 1190.00</td>
                                </tr>
                                <tr>
                                    <td class="">OnePlus</td>
                                    <td class=" p-1">
                                        <ul class="list-inline cust-img-list m-0">
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Kimberly Simmons" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/1.png" alt="Avatar">
                                            </li>
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Willie Torres" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/2.png" alt="Avatar">
                                            </li>
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Rebecca Jones" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/3.png" alt="Avatar">
                                            </li>
                                            <li class="list-inline-item mr-n3">
                                                <span class="badge badge-primary">+3</span>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <span class="badge badge-danger badge-pill">Mobile</span>
                                    </td>
                                    <td>
                                        <div class="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td class="">$ 999.00</td>
                                </tr>
                                <tr>
                                    <td class="">ZenPad</td>
                                    <td class=" p-1">
                                        <ul class="list-inline cust-img-list m-0">
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Kimberly Simmons" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/3.png" alt="Avatar">
                                            </li>
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Willie Torres" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/4.png" alt="Avatar">
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <span class="badge badge-success badge-pill">Tablet</span>
                                    </td>
                                    <td>
                                        <div class="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td class="">$ 1150.00</td>
                                </tr>
                                <tr>
                                    <td class="">Pixel 2</td>
                                    <td class=" p-1">
                                        <ul class="list-inline cust-img-list m-0">
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Kimberly Simmons" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/3.png" alt="Avatar">
                                            </li>
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" title="Willie Torres" class="list-inline-item mr-n3">
                                                <img class="w-user-img rounded-circle ui-w-30" src="{{asset('adminAsset')}}/img/avatars/4.png" alt="Avatar">
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <span class="badge badge-danger badge-pill">Mobile</span>
                                    </td>
                                    <td>
                                        <div class="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td class="">$ 1180.00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-12">
                <div class="card ui-feed">
                    <h5 class="card-header">Feeds</h5>
                    <div id="feeds-scroll" style="max-height: 285px;">
                        <div class="card-body">
                            <div class="row mb-4">
                                <div class="col-auto pr-0">
                                    <i class="fa fa-bell bg-primary feed-icon "></i>
                                </div>
                                <div class="col">
                                    <h6 class="mb-1">You have 3 pending tasks. <span class="text-muted float-right small">Just Now</span></h6>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-auto pr-0">
                                    <i class="fa fa-shopping-cart bg-danger feed-icon "></i>
                                </div>
                                <div class="col">
                                    <h6 class="mb-1">New order received <span class="text-muted float-right small">Just Now</span></h6>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-auto pr-0">
                                    <i class="fas fa-file bg-success feed-icon "></i>
                                </div>
                                <div class="col">
                                    <h6 class="mb-1">You have 3 pending tasks. <span class="text-muted float-right small">Just Now</span></h6>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-auto pr-0">
                                    <i class="fa fa-bell bg-primary feed-icon "></i>
                                </div>
                                <div class="col">
                                    <h6 class="mb-1">You have 3 pending tasks. <span class="text-muted float-right small">Just Now</span></h6>
                                </div>
                            </div>
                            <div class="row mb-0">
                                <div class="col-auto pr-0">
                                    <i class="fa fa-shopping-cart bg-warning feed-icon "></i>
                                </div>
                                <div class="col">
                                    <h6 class="mb-4">New order received <span class="text-muted float-right small">Just Now</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- widger end -->
        </div>
    </div>
@endsection

<!DOCTYPE html>
<html lang="en" class="material-style layout-fixed layout-header-fixed">
<head>
    <title>@yield('title')</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="description" content="Auric Bootstrap admin template made using Bootstrap 4, it has tons of ready made feature, UI components, pages which completely fulfills any dashboard needs." />
    <meta name="keywords" content="Auric, bootstrap admin template, bootstrap admin panel, bootstrap 4 admin template, admin template">
    <link rel="icon" type="image/x-icon" href="{{asset('adminAsset')}}/img/favicon.ico">

    <!-- Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">

    <!-- Toastr -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />

    <!-- Core stylesheets -->
    <link rel="stylesheet" href="{{asset('adminAsset')}}/css/style.css" class="style-link">

</head>

<body>
<!-- [ Preloader ] Start -->
<div class="page-loader">
    <div class="bg-primary"></div>
</div>
<!-- [ Preloader ] End -->
<!-- [ Layout wrapper ] Start -->
<div class="layout-wrapper layout-2">
    <div class="layout-inner">
        <!-- [ Layout sidenav ] Start -->
        @include('admin.elements.sidenav')
        <!-- [ Layout sidenav ] End -->

        <!-- [ Layout container ] Start -->
        <div class="layout-container">
            <!-- [ Layout navbar ( Header ) ] Start -->
            @include('admin.elements.navbar')
            <!-- [ Layout navbar ( Header ) ] End -->

            <!-- [ Layout content ] Start -->
            <div class="layout-content">
                <!-- [ content ] Start -->
                @yield('content')
                <!-- [ content ] End -->
                <!-- [ Layout footer ] Start -->
                @include('admin.elements.footer')
                <!-- [ Layout footer ] End -->
                <!-- [ theme customizer ] start -->
                @include('admin.elements.rightNav')
                <!-- [ theme customizer ] End -->
            </div>
            <!-- [ Layout content ] Start -->
        </div>
        <!-- [ Layout container ] End -->
    </div>
    <!-- Overlay -->
    <div class="layout-overlay layout-sidenav-toggle"></div>
</div>
<!-- [ Layout wrapper] End -->
<!-- Toastr -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

<!-- Core scripts -->
<script src="{{asset('adminAsset')}}/js/vendor.js"></script>

<!-- apexcharts -->
<script src="{{asset('adminAsset')}}/libs/apexchart/apexcharts.min.js"></script>
<script src="{{asset('adminAsset')}}/js/pages/dashboard-ecommerce.js"></script>
<!-- Demo -->
<script src="{{asset('adminAsset')}}/js/script.js"></script>

</body>
</html>

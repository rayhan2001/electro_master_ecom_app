<!DOCTYPE html>

<html lang="en" class="material-style layout-fixed layout-header-fixed">

<head>
    <title>Forgot Password</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="description" content="Auric Bootstrap admin template made using Bootstrap 4, it has tons of ready made feature, UI components, pages which completely fulfills any dashboard needs." />
    <meta name="keywords" content="Auric, bootstrap admin template, bootstrap admin panel, bootstrap 4 admin template, admin template">
    <link rel="icon" type="image/x-icon" href="{{asset('adminAsset')}}/img/favicon.ico">

    <!-- Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">

    <!-- Core stylesheets -->
    <link rel="stylesheet" href="{{asset('adminAsset')}}/css/style.css" class="style-link">

</head>

<body>
<!-- [ Preloader ] Start -->
<div class="page-loader">
    <div class="bg-primary"></div>
</div>
<!-- [ Preloader ] End -->

<!-- [ content ] Start -->
<div class="authentication-wrapper authentication-2 px-4">
    <div class="authentication-inner py-5">

        <!-- [ Form ] Start -->
        <form class="card" method="POST" action="{{ route('password.email') }}">
            @csrf
            <div class="p-4 p-sm-5">
                <!-- [ Logo ] Start -->
                <div class="d-flex justify-content-center align-items-center pb-2 mb-4">
                    <div class="ui-w-60">
                        <div class="w-100 position-relative">
                            <img src="{{asset('adminAsset')}}/img/logo-dark.png" alt="Brand Logo" class="img-fluid">
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <!-- [ Logo ] End -->
                <h5 class="text-center text-muted font-weight-normal mb-4">Reset Your Password</h5>
                <hr class="mt-0 mb-4">
                <p>Enter your email address and we will send you a link to reset your password.</p>
                <div class="form-group">
                    <input type="email" name="email" class="form-control" placeholder="Enter your email address">
                    <div class="clearfix"></div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Send password reset email</button>
            </div>
        </form>
        <!-- [ Form ] End -->

    </div>
</div>
<!-- [ content ] End -->

<!-- Core scripts -->
<script src="{{asset('adminAsset')}}/js/vendor.js"></script>

<!-- Demo -->
<script src="{{asset('adminAsset')}}/js/script.js"></script>

</body>


</html>

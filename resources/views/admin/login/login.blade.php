<!DOCTYPE html>

<html lang="en" class="material-style layout-fixed layout-header-fixed">
<head>
    <title>Login</title>

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

<!-- [ Content ] Start -->
<div class="authentication-wrapper authentication-2 ui-bg-cover ui-bg-overlay-container px-4" style="background-image: url('{{asset('adminAsset')}}/img/bg/1.jpg');">
    <div class="ui-bg-overlay bg-dark opacity-25"></div>

    <div class="authentication-inner py-5">

        <div class="card">
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

                <h5 class="text-center text-muted font-weight-normal mb-4">Login to Your Account</h5>

                <!-- Form -->
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" name="email" class="form-control">
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label d-flex justify-content-between align-items-end">
                            <span>Password</span>
                            <a href="{{ route('password.request') }}" class="d-block small">Forgot password?</a>
                        </label>
                        <input type="password" name="password" class="form-control">
                        <div class="clearfix"></div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center m-0">
                        <label class="custom-control custom-checkbox m-0">
                            <input type="checkbox" name="remember" class="custom-control-input">
                            <span class="custom-control-label">Remember me</span>
                        </label>
                        <button type="submit" class="btn btn-primary">Sign In</button>
                    </div>
                </form>
                <!-- [ Form ] End -->

            </div>
            <div class="card-footer py-3 px-4 px-sm-5">
                <div class="text-center text-muted">
                    Don't have an account yet?
                    <a href="{{ route('register') }}">Sign Up</a>
                </div>
            </div>
        </div>

    </div>
</div>
<!-- / Content -->

<!-- Core scripts -->
<script src="{{asset('adminAsset')}}/js/vendor.js"></script>

<!-- Demo -->
<script src="{{asset('adminAsset')}}/js/script.js"></script>


</body>
</html>

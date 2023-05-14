<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>

    <!-- Google font -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">

    <!-- Bootstrap -->
    <link type="text/css" rel="stylesheet" href="{{asset('frontendAsset')}}/css/bootstrap.min.css"/>

    <!-- Slick -->
    <link type="text/css" rel="stylesheet" href="{{asset('frontendAsset')}}/css/slick.css"/>
    <link type="text/css" rel="stylesheet" href="{{asset('frontendAsset')}}/css/slick-theme.css"/>

    <!-- nouislider -->
    <link type="text/css" rel="stylesheet" href="{{asset('frontendAsset')}}/css/nouislider.min.css"/>

    <!-- Font Awesome Icon -->
    <link rel="stylesheet" href="{{asset('frontendAsset')}}/css/font-awesome.min.css">

    <!-- Custom stlylesheet -->
    <link type="text/css" rel="stylesheet" href="{{asset('frontendAsset')}}/css/style.css"/>

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body>
<!-- HEADER -->
<header>
    <!-- TOP HEADER -->
    @include('frontend.elements.top_header')
    <!-- /TOP HEADER -->

    <!-- MAIN HEADER -->
    @include('frontend.elements.main_header')
    <!-- /MAIN HEADER -->
</header>
<!-- /HEADER -->

<!-- NAVIGATION -->
@include('frontend.elements.navigation')
<!-- /NAVIGATION -->

<!-- SECTION -->
@yield('content')
<!-- /SECTION -->

<!-- NEWSLETTER -->
@include('frontend.elements.newsletter')
<!-- /NEWSLETTER -->

<!-- FOOTER -->
<footer id="footer">
    <!-- top footer -->
    @include('frontend.elements.top_footer')
    <!-- /top footer -->

    <!-- bottom footer -->
    @include('frontend.elements.bottom_footer')
    <!-- /bottom footer -->
</footer>
<!-- /FOOTER -->

<!-- jQuery Plugins -->
<script src="{{asset('frontendAsset')}}/js/jquery.min.js"></script>
<script src="{{asset('frontendAsset')}}/js/bootstrap.min.js"></script>
<script src="{{asset('frontendAsset')}}/js/slick.min.js"></script>
<script src="{{asset('frontendAsset')}}/js/nouislider.min.js"></script>
<script src="{{asset('frontendAsset')}}/js/jquery.zoom.min.js"></script>
<script src="{{asset('frontendAsset')}}/js/main.js"></script>

</body>
</html>

<div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical sidenav-dark bg-dark">
    <!-- Brand demo (see assets/css/demo/demo.css) -->
    <div class="app-brand demo">
                    <span class="app-brand-logo demo">
                        <img src="{{asset('adminAsset')}}/img/logo.png" alt="Brand Logo" class="img-fluid">
                    </span>
        <a href="{{route('dashboard')}}" class="app-brand-text demo sidenav-text font-weight-normal ml-2">Dashboard</a>
        <a href="javascript:" class="layout-sidenav-toggle sidenav-link text-large ml-auto">
            <i class="ion ion-md-menu align-middle"></i>
        </a>
    </div>
    <div class="sidenav-divider mt-0"></div>
    <ul class="sidenav-inner py-1">

        <!-- Dashboards -->
        <li class="sidenav-item">
            <a href="{{route('dashboard')}}" class="sidenav-link">
                <i class="sidenav-icon feather icon-monitor"></i>
                <div>Dashboard</div>
            </a>
        </li>
        <li class="sidenav-item">
            <a href="javascript:" class="sidenav-link sidenav-toggle">
                <i class="sidenav-icon feather icon-airplay"></i>
                <div>Categories</div>
            </a>
            <ul class="sidenav-menu">
                <li class="sidenav-item">
                    <a href="{{route('categories.create')}}" class="sidenav-link">
                        <div>Add Category</div>
                    </a>
                </li>
                <li class="sidenav-item">
                    <a href="{{route('categories.index')}}" class="sidenav-link">
                        <div>All Categories</div>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>

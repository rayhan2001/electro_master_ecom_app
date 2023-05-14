@extends('layout.admin_app')
@section('title')
    Brands
@endsection
@section('content')
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <h6 class="card-header">All Brands</h6>
                    <div class="card-datatable table-responsive">
                        <table class="datatables-demo table table-striped table-bordered">
                            <thead>
                            <tr class="text-center">
                                <th>Sl</th>
                                <th>Brand Name</th>
                                <th>Unit</th>
                                <th>Size</th>
                                <th>Color</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($brands as $brand)
                            <tr class="text-center">
                                <td>{{$loop->iteration}}</td>
                                <td>{{$brand->brand_name}}</td>
                                <td>{{$brand->unit}}</td>
                                <td>
                                    @foreach(Json_decode($brand->size) as $sizes)
                                        <span class="mr-2">{{$sizes}},</span>
                                    @endforeach
                                </td>
                                <td>
                                    @foreach(Json_decode($brand->color) as $colors)
                                        <span class="mr-2">{{$colors}},</span>
                                    @endforeach
                                </td>
                                <td>
                                    <span class="{{$brand->status==1? 'badge badge-pill badge-primary':'badge badge-pill badge-warning'}}">{{$brand->status==1? 'Active':'Inactive'}}</span>
                                </td>
                                <td>
                                    @if($brand->status ==1)
                                        <a href="#" class="btn btn-success statusBtn" data-toggle="tooltip" data-placement="top" title="Active" data-id="{{ $brand->id }}"><i class="fa fa-thumbs-up"></i></a>
                                    @else
                                        <a href="#" class="btn btn-warning statusBtn" data-toggle="tooltip" data-placement="top" title="Inactive" data-id="{{ $brand->id }}"><i class="fa fa-thumbs-down"></i></a>
                                    @endif
                                    <a href="{{route('brands.edit',$brand->id)}}" class="btn btn-primary update_brand_form" data-toggle="tooltip" data-placement="top" title="Edit" data-id="{{ $brand->id }}" data-name="{{ $brand->category_name }}" data-unit="{{ $brand->unit }}" data-size="{{$sizes}}" data-color="{{$colors}}">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a href="#" class="btn btn-danger deleteBtn" data-toggle="tooltip" data-placement="top" title="Delete" data-id="{{ $brand->id }}"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
    $(document).ready(function() {
        $('.statusBtn').click(function(e) {
            e.preventDefault();
            var id = $(this).data('id');
            var url = '{{ route("brand-status", ":id") }}';
            url = url.replace(':id', id);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be change the status!",
                icon: 'warning',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: "Yes, change it!",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'JSON',
                        data: {
                            '_token': '{{ csrf_token() }}',
                            'id':id,
                        },
                        success: function(response) {
                            if(response.status==200){
                                swal.fire({
                                    title: 'Changed!',
                                    text: 'The status has been changed successfully.',
                                    icon: 'success',
                                }).then(function() {
                                    window.location.reload();
                                });
                            }
                        },
                        error: function(response) {
                            swal.fire({
                                title: 'Error!',
                                text: 'An error occurred while changed the item.',
                                icon: 'error',
                            });
                        }
                    });
                }
            });
        })
    })
    $(document).ready(function() {
        $('.deleteBtn').click(function(e) {
            e.preventDefault();
            var id = $(this).data('id');
            var url = '{{ route("brands.destroy", ":id") }}';
            url = url.replace(':id', id);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonClass: 'btn btn-warning',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "Cancel",
                customClass: {
                    confirmButton: 'btn btn-warning'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: url,
                        type: 'DELETE',
                        dataType: 'JSON',
                        data: {
                            '_token': '{{ csrf_token() }}',
                            'id':id,
                        },
                        success: function(response) {
                            if(response.status==200){
                                swal.fire({
                                    title: 'Deleted!',
                                    text: 'The item has been deleted successfully.',
                                    icon: 'success',
                                }).then(function() {
                                    window.location.reload();
                                });
                            }
                        },
                        error: function(response) {
                            swal.fire({
                                title: 'Error!',
                                text: 'An error occurred while deleting the item.',
                                icon: 'error',
                            });
                        }
                    });
                }
            });
        });
    });

</script>

@extends('layout.admin_app')
@section('title')
    Categories
@endsection
@section('content')
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <h6 class="card-header">All Categories</h6>
                    <div class="card-datatable table-responsive">
                        <table class="datatables-demo table table-striped table-bordered">
                            <thead>
                            <tr class="text-center">
                                <th>Sl</th>
                                <th>Category</th>
                                <th>Parent Category</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($categories as $category)
                            <tr class="text-center">
                                <td>{{$loop->iteration}}</td>
                                <td>{{$category->category_name}}</td>
                                <td>
                                    @if ($category->parent()->exists())
                                        {{$category->parent->category_name}}
                                    @else
                                        <p>No parent category</p>
                                    @endif
                                </td>
                                <td>
                                    <img src="{{$category->image}}" alt="" width="50" height="50" class="img-fluid">
                                </td>
                                <td>
                                    <span class="{{$category->status==1? 'badge badge-pill badge-primary':'badge badge-pill badge-warning'}}">{{$category->status==1? 'Active':'Inactive'}}</span>
                                </td>
                                <td>
                                    @if($category->status ==1)
                                        <a href="#" class="btn btn-success statusBtn" data-toggle="tooltip" data-placement="top" title="Active" data-id="{{ $category->id }}"><i class="fa fa-thumbs-up"></i></a>
                                    @else
                                        <a href="#" class="btn btn-warning statusBtn" data-toggle="tooltip" data-placement="top" title="Inactive" data-id="{{ $category->id }}"><i class="fa fa-thumbs-down"></i></a>
                                    @endif
                                    <a href="{{route('categories.edit',$category->id)}}" class="btn btn-primary update_category_form" data-toggle="tooltip" data-placement="top" title="Edit" data-id="{{ $category->id }}" data-name="{{ $category->category_name }}">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a href="#" class="btn btn-danger deleteBtn" data-toggle="tooltip" data-placement="top" title="Delete" data-id="{{ $category->id }}"><i class="fa fa-trash"></i></a>
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
            var url = '{{ route("category-status", ":id") }}';
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
            var url = '{{ route("categories.destroy", ":id") }}';
            url = url.replace(':id', id);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "Cancel",
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

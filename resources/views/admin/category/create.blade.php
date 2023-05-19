@extends('layout.admin_app')
@section('title')
    Add Category
@endsection
@section('content')
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <h6 class="card-header">Add Category</h6>
                    <div class="card-body">
                        <form id="store-category" method="post" action="{{route('categories.store')}}" enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Category Name<span class="text-danger ml-2">*</span></label>
                                        <input type="text" name="category_name" id="category_name" class="form-control" placeholder="Please enter a category name" autocomplete="off">
                                        <span id="categoryNameError" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Select Parent Category</label>
                                        <select name="parent_cat_id" id="parent_cat_id" class="form-control" autocomplete="off">
                                            <option value="">--</option>
                                            @foreach($categories as $category)
                                                <option value="{{$category->id}}">{{$category->category_name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label w-100">Image</label>
                                <input type="file" name="image">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary" id="categoryBtn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function() {
        $('#categoryBtn').click(function (e) {
            e.preventDefault();
            alert('gdsgssgs');
            $('#categoryBtn').attr("disabled", true);
            $('#categoryBtn').html("Processing...");

            var data = new FormData();
            data.append('_token', "{{ csrf_token() }}");
            data.append('category_name', document.getElementById("category_name").value);
            data.append('parent_cat_id', document.getElementById("parent_cat_id").value);
            data.append('image', $('input[type=file]')[0].files[0]);

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                type: "POST",
                url: "{{route('categories.store')}}",
                data: data,
                dataType: "json",
                processData: false,
                contentType: false,
                success: function (response) {
                    $('#store-category').trigger("reset");
                    toastr.success('Category Added Successfully');
                    window.location.reload();
                    $('#categoryBtn').attr("disabled", false);
                    $('#categoryBtn').html("Save");
                },
                error: function(error) {
                    if(error.responseJSON.errors.category_name){
                        $('#categoryNameError').text(error.responseJSON.errors.category_name);
                    }else{
                        $('#categoryNameError').text('');
                    }
                    $('#categoryBtn').attr("disabled", false);
                    $('#categoryBtn').html("Save");
                }
            });
        });
    });
</script>

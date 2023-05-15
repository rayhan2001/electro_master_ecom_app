@extends('layout.admin_app')
@section('title')
    Update Category
@endsection
@section('content')
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <h6 class="card-header">Update Category</h6>
                    <div class="card-body">
                        <form id="edit-category-form" data-url="{{ route('categories.update', $category->id) }}">
                            @csrf
                            @method('PUT')
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="category_name">Category Name</label>
                                        <input type="text" class="form-control" id="category_name" name="category_name" value="{{ $category->category_name }}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="parent_cat_id">Parent Category</label>
                                        <select class="form-control" id="parent_cat_id" name="parent_cat_id">
                                            <option value="">Select Parent Category</option>
                                            @foreach ($categories as $cat)
                                                <<option value="{{ $cat->id }}" {{ $cat->id == $category->parent_cat_id ? 'selected' : '' }}>{{ $cat->category_name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="status">Status</label>
                                        <select name="status" id="status" class="form-control">
                                            <option value="1" {{$category->status==1? 'selected':''}}>Active</option>
                                            <option value="0" {{$category->status==0? 'selected':''}}>Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row col-md-6">
                                <label for="image">Image</label>
                                <input type="file" class="form-control-file" id="image" name="image">
                                <img id="categoryImage" src="{{asset($category->image)}}" alt="" width="100" class="img-thumbnail mt-2">
                            </div>
                            <button type="submit" class="btn btn-primary" id="categoryUpdateBtn">Save</button>
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
        $('#edit-category-form').submit(function(e) {
            e.preventDefault();
            $('#categoryUpdateBtn').attr("disabled", true);
            $('#categoryUpdateBtn').html("Processing...");
            var url = $(this).data('url');
            var formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: url,
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    if (response.status==200){
                        toastr.success('Category updated successfully.');
                        $(location).prop('href', '{{route('categories.index')}}');
                        $('#categoryUpdateBtn').attr("disabled", false);
                        $('#categoryUpdateBtn').html("Save");
                    }
                },
                error: function(error) {
                    $('#categoryUpdateBtn').attr("disabled", false);
                    $('#categoryUpdateBtn').html("Save");
                }
            });

            // Update the image URL
            var fileInput = document.getElementById('image');
            var file = fileInput.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    $('#categoryImage').attr('src', event.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
    });
</script>



@extends('layout.admin_app')
@section('title')
    Update Brand
@endsection
@section('content')
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <h6 class="card-header">Update Brand</h6>
                    <div class="card-body">
                        <form id="edit-category-form" data-url="{{ route('brands.update', $brand->id) }}">
                            @csrf
                            @method('PUT')
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="category_name">Brand Name</label>
                                        <input type="text" class="form-control" id="brand_name" name="brand_name" value="{{ $brand->brand_name }}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="category_name">Unit</label>
                                        <input type="text" class="form-control" id="unit" name="unit" value="{{ $brand->unit }}">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="category_name">Size</label>
                                        <input type="text" name="size" id="size" data-role="tagsinput" class="form-control" value="{{ implode(',',Json_decode($brand->size)) }}">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="category_name">Color</label>
                                        <input type="text" name="color" id="color" data-role="tagsinput" class="form-control" value="{{implode(',',Json_decode($brand->color))}}">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="status">Status</label>
                                <select name="status" id="status" class="form-control">
                                    <option value="1" {{$brand->status==1? 'selected':''}}>Active</option>
                                    <option value="0" {{$brand->status==0? 'selected':''}}>Inactive</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary" id="brandUpdate">Update</button>
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
            $('#brandUpdate').attr("disabled", true);
            $('#brandUpdate').html("Processing...");
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
                        toastr.success('Brand updated successfully.');
                        $(location).prop('href', '{{route('brands.index')}}');
                        $('#brandUpdate').attr("disabled", false);
                        $('#brandUpdate').html("Save");
                    }
                },
                error: function(error) {
                    $('#brandUpdate').attr("disabled", false);
                    $('#brandUpdate').html("Save");
                }
            });
        });
    });
</script>



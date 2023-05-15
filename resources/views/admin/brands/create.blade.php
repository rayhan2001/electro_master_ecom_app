@extends('layout.admin_app')
@section('title')
    Add Brand
@endsection
@section('content')
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <h6 class="card-header">Add Brand</h6>
                    <div class="card-body">
                        <form id="store-brand" method="post" action="{{route('brands.store')}}">
                            @csrf
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Brand Name<span class="text-danger ml-2">*</span></label>
                                        <input type="text" name="brand_name" id="brand_name" class="form-control" placeholder="Please enter a brand name" autocomplete="off">
                                        <span id="categoryNameError" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Unit<span class="text-danger ml-2">*</span></label>
                                        <input type="text" name="unit" id="unit" class="form-control" placeholder="Please enter a unit name" autocomplete="off">
                                        <span id="unitError" class="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Size<span class="text-danger ml-2">*</span></label>
                                        <input type="text" name="size" id="size" data-role="tagsinput" class="form-control" placeholder="Xl">
                                        <span id="sizeError" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Color<span class="text-danger ml-2">*</span></label>
                                        <input type="text" name="color" id="color" data-role="tagsinput" class="form-control" placeholder="#">
                                        <span id="colorError" class="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary" id="saveBtn">Save</button>
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
        $('#saveBtn').click(function (e) {
            e.preventDefault();
            $('#saveBtn').attr("disabled", true);
            $('#saveBtn').html("Processing...");

            var data= {
                '_token': "{{ csrf_token() }}",
                'brand_name': document.getElementById("brand_name").value,
                'unit': document.getElementById("unit").value,
                'size': document.getElementById("size").value,
                'color': document.getElementById("color").value,
            }
            // console.log(data);
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                type: "POST",
                url: "{{route('brands.store')}}",
                data: data,
                dataType: "json",
                success: function (response) {
                    $('#store-brand').trigger("reset");
                    toastr.success('Brand Added Successfully');
                    window.location.reload();
                    $('#saveBtn').attr("disabled", false);
                    $('#saveBtn').html("Save");
                },
                error: function(error) {
                    // console.log(response);
                    if(error.responseJSON.errors.brand_name){
                        $('#brand_nameError').text(error.responseJSON.errors.brand_name);
                    }else{
                        $('#brand_nameError').text('');
                    }
                    if(error.responseJSON.errors.unit){
                        $('#unitError').text(error.responseJSON.errors.unit);
                    }else{
                        $('#unitError').text('');
                    }
                    if(error.responseJSON.errors.size){
                        $('#sizeError').text(error.responseJSON.errors.size);
                    }else{
                        $('#sizeError').text('');
                    }
                    if(error.responseJSON.errors.color){
                        $('#colorError').text(error.responseJSON.errors.color);
                    }else{
                        $('#colorError').text('');
                    }
                    $('#saveBtn').attr("disabled", false);
                    $('#saveBtn').html("Save");
                }
            });
        });
    });
</script>

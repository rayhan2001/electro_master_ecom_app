@extends('layout.admin_app')
@section('title')
    Add Product
@endsection
@section('content')
{{--    <meta name="csrf-token" content="{{ csrf_token() }}">--}}
    <style>
        input[type="file"] {
            display: block;
        }

        .imageContainer {
            display: inline-block;
            position: relative;
        }

        .imageThumb {
            max-height: 80px;
            border: 3px solid;
            margin: 15px 15px 0 0;
            padding: 1px;
        }

        .removeImage {
            position: absolute;
            top: 18px;
            right: 19px;
            width: 15px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
            color: white;
            text-align: center;
            font-size: 10px;
            line-height: 15px;
            cursor: pointer;
        }
    </style>
    <div class="container-fluid flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <h6 class="card-header">Add Product</h6>
                    <div class="card-body">
                        <form id="store-product" method="post" action="{{route('products.store')}}">
                            @csrf
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Category Name<span class="text-danger ml-2">*</span></label>
                                        <select name="cat_id" id="cat_id" class="select2-demo form-control" style="width: 100%" data-allow-clear="true">
                                            <option></option>
                                            @foreach($categories as $category)
                                                <option value="{{$category->id}}">{{$category->category_name}}</option>
                                            @endforeach
                                        </select>
                                        <span id="cat_id_error" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Subcategory Name<span class="text-danger ml-2">*</span></label>
                                        <select name="subcat_id" id="subcat_id" class="select2-demo form-control" style="width: 100%" data-allow-clear="true">
                                        </select>
                                        <span id="subcat_id_error" class="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Brand Name<span class="text-danger ml-2">*</span></label>
                                        <select name="brand_id" id="brand_id" class="select2-demo form-control" style="width: 100%" data-allow-clear="true">
                                            <option></option>
                                            @foreach($brands as $brand)
                                            <option value="{{$brand->id}}">{{$brand->brand_name}}</option>
                                            @endforeach
                                        </select>
                                        <span id="brand_id_error" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Unit<span class="text-danger ml-2">*</span></label>
                                        <select name="unit_id" id="unit_id" class="select2-demo form-control" style="width: 100%" data-allow-clear="true">
                                            <option></option>
                                            @foreach($brands as $brand)
                                                <option value="{{$brand->id}}">{{$brand->unit}}</option>
                                            @endforeach
                                        </select>
                                        <span id="unit_id_error" class="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Size<span class="text-danger ml-2">*</span></label>
                                        <select name="size_id" id="size_id" class="select2-demo form-control" data-allow-clear="true">
                                            <option></option>
                                            @foreach($brands as $brand)
                                                <option value="{{$brand->id}}">{{implode(',',Json_decode($brand->size))}}</option>
                                            @endforeach
                                        </select>
                                        <span id="size_id_error" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Color<span class="text-danger ml-2">*</span></label>
                                        <select name="color_id" id="color_id" class="select2-demo form-control" style="width: 100%" data-allow-clear="true">
                                            <option></option>
                                            @foreach($brands as $brand)
                                                <option value="{{$brand->id}}">{{implode(',',Json_decode($brand->color))}}</option>
                                            @endforeach
                                        </select>
                                        <span id="color_id_error" class="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-label">Product Code<span class="text-danger ml-2">*</span></label>
                                        <input type="text" name="product_code" id="product_code" class="form-control" placeholder="Please enter a product code" autocomplete="off">
                                        <span id="product_code_error" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-label">Product Name<span class="text-danger ml-2">*</span></label>
                                        <input type="text" name="product_name" id="product_name" class="form-control" placeholder="Please enter a product name" autocomplete="off">
                                        <span id="product_name_error" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="form-label">Product Price<span class="text-danger ml-2">*</span></label>
                                        <input type="number" name="product_price" id="product_price" class="form-control" placeholder="Please enter a product price" autocomplete="off">
                                        <span id="product_price_error" class="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Description<span class="text-danger ml-2">*</span></label>
                                <textarea class="ckeditor form-control" name="description" id="descriptionText"></textarea>
                                <span id="description_error" class="text-danger"></span>
                            </div>
                            <div class="field mb-3" align="left">
                                <span>
                                    <label for="form-label">Product Image<span class="text-danger ml-2">*</span></label>
                                    <input type="file" id="files" name="files[]" multiple />
                                    <label id="product_image_error" class="text-danger mt-2"></label>
                                </span>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary" id="productBtn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="//cdn.ckeditor.com/4.14.0/standard/ckeditor.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('.ckeditor').ckeditor({
            height: 100,
            resize_enabled: false
        });
    });
</script>
<script>
    $(document).ready(function() {
        if(window.File && window.FileList && window.FileReader) {
            $("#files").on("change",function(e) {
                var files = e.target.files,
                    filesLength = files.length;
                for (var i = 0; i < filesLength; i++) {
                    var f = files[i];
                    var fileReader = new FileReader();
                    fileReader.onload = (function(e) {
                        var file = e.target;
                        var imageContainer = $("<div></div>", {
                            class: "imageContainer"
                        }).insertAfter("#files");
                        $("<img></img>", {
                            class: "imageThumb",
                            src: e.target.result,
                            title: file.name
                        }).appendTo(imageContainer);
                        $("<div></div>", {
                            class: "removeImage",
                            text: "X"
                        }).appendTo(imageContainer).click(function() {
                            $(this).parent(".imageContainer").remove();
                        });
                    });
                    fileReader.readAsDataURL(f);
                }
            });
        } else { alert("Your browser doesn't support to File API") }
    });

    $(document).ready(function() {
        $('#productBtn').click(function (e) {
            e.preventDefault();
            $('#productBtn').attr("disabled", true);
            $('#productBtn').html("Processing...");

            var description = CKEDITOR.instances.descriptionText.getData();
            var formData = new FormData();
            formData.append('_token', "{{ csrf_token() }}");
            formData.append('cat_id', document.getElementById("cat_id").value);
            formData.append('subcat_id', document.getElementById("subcat_id").value);
            formData.append('brand_id', document.getElementById("brand_id").value);
            formData.append('unit_id', document.getElementById("unit_id").value);
            formData.append('size_id', document.getElementById("size_id").value);
            formData.append('color_id', document.getElementById("color_id").value);
            formData.append('product_code', document.getElementById("product_code").value);
            formData.append('product_name', document.getElementById("product_name").value);
            formData.append('product_price', document.getElementById("product_price").value);
            formData.append('description', description);

            var files = $('#files')[0].files;
            for (var i = 0; i < files.length; i++) {
                formData.append('product_images[]', files[i]);
            }

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({
                type: "POST",
                url: "{{ route('products.store') }}",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                success: function (response) {
                    $('#store-product').trigger("reset");
                    toastr.success('Product Added Successfully');
                    window.location.reload();
                    $('#productBtn').attr("disabled", false);
                    $('#productBtn').html("Save");
                },
                error: function (error) {
                    if(error.responseJSON.errors.cat_id){
                        $('#cat_id_error').text(error.responseJSON.errors.cat_id);
                    }else{
                        $('#cat_id_error').text('');
                    }
                    if(error.responseJSON.errors.subcat_id){
                        $('#subcat_id_error').text(error.responseJSON.errors.subcat_id);
                    }else{
                        $('#subcat_id_error').text('');
                    }
                    if(error.responseJSON.errors.brand_id){
                        $('#brand_id_error').text(error.responseJSON.errors.brand_id);
                    }else{
                        $('#brand_id_error').text('');
                    }
                    if(error.responseJSON.errors.unit_id){
                        $('#unit_id_error').text(error.responseJSON.errors.unit_id);
                    }else{
                        $('#unit_id_error').text('');
                    }
                    if(error.responseJSON.errors.size_id){
                        $('#size_id_error').text(error.responseJSON.errors.size_id);
                    }else{
                        $('#size_id_error').text('');
                    }
                    if(error.responseJSON.errors.color_id){
                        $('#color_id_error').text(error.responseJSON.errors.color_id);
                    }else{
                        $('#color_id_error').text('');
                    }
                    if(error.responseJSON.errors.product_code){
                        $('#product_code_error').text(error.responseJSON.errors.product_code);
                    }else{
                        $('#product_code_error').text('');
                    }
                    if(error.responseJSON.errors.product_name){
                        $('#product_name_error').text(error.responseJSON.errors.product_name);
                    }else{
                        $('#product_name_error').text('');
                    }
                    if(error.responseJSON.errors.product_price){
                        $('#product_price_error').text(error.responseJSON.errors.product_price);
                    }else{
                        $('#product_price_error').text('');
                    }
                    if(error.responseJSON.errors.description){
                        $('#description_error').text(error.responseJSON.errors.description);
                    }else{
                        $('#description_error').text('');
                    }
                    if (error.responseJSON.errors.product_images) {
                        $('#product_image_error').text(error.responseJSON.errors.product_images[0]);
                    } else {
                        $('#product_image_error').text('');
                    }
                    $('#productBtn').attr("disabled", false);
                    $('#productBtn').html("Save");
                }
            });
        });
    });

    $(document).ready(function () {
        $('#cat_id').change(function () {
            var cat_id = $(this).val();
            if (cat_id) {
                $.ajax({
                    url: '/products/get-sub-category/' + cat_id,
                    type: "GET",
                    dataType: "json",
                    success: function (data) {
                        $.each(data, function (index, subcat_id) {
                            $('#subcat_id').append('<option value="' + subcat_id.id + '">' + subcat_id.category_name + '</option>');
                        });
                    }
                });
            } else {
                $('#subcat_id').empty();
            }
        });
    });

</script>

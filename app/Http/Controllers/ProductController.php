<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.products.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::whereNull('parent_cat_id')->get();
        $brands = Brand::where('status',1)->get();
        return view('admin.products.create',compact('categories','brands'));
    }
    public function getSubCategory($cat_id)
    {
        $subcat_id = Category::find($cat_id)->child;
        return response()->json($subcat_id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        dd($request->product_images);
        $validator = $request->validate([
            'cat_id' => 'required',
            'subcat_id' => 'required',
            'brand_id' => 'required',
            'unit_id' => 'required',
            'size_id' => 'required',
            'color_id' => 'required',
            'product_code' => 'required',
            'product_name' => 'required',
            'product_price' => 'required',
            'description' => 'required',
            'product_images' => 'required|array',
        ], [
            'cat_id.required' => 'This filed is required!',
            'subcat_id.required' => 'This filed is required!',
            'brand_id.required' => 'This filed is required!',
            'unit_id.required' => 'This filed is required!',
            'size_id.required' => 'This filed is required!',
            'color_id.required' => 'This filed is required!',
            'product_code.required' => 'This filed is required!',
            'product_name.required' => 'This filed is required!',
            'product_price.required' => 'This filed is required!',
            'description.required' => 'This filed is required!',
            'product_images.required' => 'At least one image is required!',
            'product_images.array' => 'The images must be an array!',
        ]);
        $product = new Product();
        $product->cat_id = $request->cat_id;
        $product->subcat_id = $request->subcat_id;
        $product->brand_id = $request->brand_id;
        $product->unit_id = $request->unit_id;
        $product->size_id = $request->size_id;
        $product->color_id = $request->color_id;
        $product->product_code = $request->product_code;
        $product->product_name = $request->product_name;
        $product->product_price = $request->product_price;
        $product->description = $request->description;
        $images = array();
        $files = $request->file('product_images');
        if (!empty($files)){
            foreach ($files as $file){
                $imageName = md5(rand(1000, 10000));
                $ext = strtolower($file->getClientOriginalExtension());
                $imageFullName = $imageName.'.'.$ext;
                $dir = 'upload/product_image/';
                $imageUrl=$dir.$imageFullName;
                $file->move($dir,$imageFullName);
                $images[]=$imageUrl;
            }
            $product['image']=implode("|",$images);
        }
        $product->save();
        return response()->json(['status'=>200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

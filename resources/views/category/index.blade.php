@extends('layouts.app')

@section('page-title')
    {{ __('Categories') }}
@endsection


@section('content')
    <div class="content-page">
        <!-- Start content -->
        <div class="content">
            <div class="container">

                <!-- Page-Title -->
                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="pull-left page-title"><b>CATEGORIES</b></h4>
                        <ol class="breadcrumb pull-right">
                            <li><a href="{{ route('home') }}">Home</a></li>
                            <li class="active">Categories</li>
                        </ol>
                    </div>
                </div>
                <div class="row">
                    <!-- USER LIST -->
                    <div class="col-lg-4">
                        <div id="userdiv">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h4 class="panel-title"> New Category</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <form action="{{ route('admin.category.store') }}" method="POST">
                                        @csrf
                                        Product<br />
                                        <select name="product" id="product" class="select2 form-control"
                                            placeholder="Select Product">
                                            <option value="">Select Product</option>
                                            <option value="sunglasses">SunGlasses</option>
                                            <option value="lens">Lens</option>
                                        </select><br /><br />
                                        Category Name<br />
                                        <input type="text" name="category_name" id="" class="form-control"
                                            placeholder="Category Name"><br />
                                        <br />
                                        <button type="submit" class="btn btn-success">Add
                                            Category</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> <!-- end col -->


                    <!-- RESULT TABLE -->
                    <div class="col-lg-8">
                        <div class="panel panel-default">
                            <div class="panel-heading" id="usersList">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="panel-title">List of Categories</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div id="listTable" class="inbox-widget nicescroll mx-box">
                                    <table width="100%" class="table table-striped table-bordered">
                                        <thead>
                                            <th>Product Name</th>
                                            <th>Category Name</th>
                                            <th>Created At</th>
                                            <th>Actions</th>
                                        </thead>
                                        <tbody>
                                            @php
                                                $groupedData = $data->groupBy('product');
                                            @endphp

                                            @foreach ($groupedData as $product => $items)
                                                <tr>
                                                    <td rowspan="{{ $items->count() + 1 }}">{{ $product }}</td>
                                                </tr>
                                                @foreach ($items as $item)
                                                    <tr>
                                                        <td>{{ $item->category_name }}</td>
                                                        <td>{{ $item->created_at->format('Y-m-d') }}</td>
                                                        <td>
                                                            <span class="btn btn-primary rounded p-2">
                                                                <a href="" style="text-decoration: none"
                                                                    class="t-decoration-none text-white">{{ __('edit') }}</a>
                                                            </span>

                                                            <span class="btn btn-danger rounded p-2 m-2">
                                                                <a href="{{ route('admin.category.delete', ['id' => $item->id]) }}"
                                                                    onclick="event.preventDefault();
                                                                         if (confirm('Are you sure you want to delete this category?')) {
                                                                             document.getElementById('delete-form-{{ $item->id }}').submit();
                                                                         }"
                                                                    style="text-decoration: none"
                                                                    class="text-white">{{ __('delete') }}</a>
                                                            </span>
                                                            <form id="delete-form-{{ $item->id }}"
                                                                action="{{ route('admin.category.delete', ['id' => $item->id]) }}"
                                                                method="POST" style="display: none;">
                                                                @csrf
                                                                @method('DELETE')
                                                            </form>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> <!-- End Row -->

            </div> <!-- container -->

        </div> <!-- content -->

    </div>

@endsection

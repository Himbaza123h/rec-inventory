@extends('layouts.app')
@section('page-title')
    {{ __('Stock') }}
@endsection


@section('content')
    <div class="content-page">
        <!-- Start content -->
        <div class="content">
            <div class="container">

                <!-- Page-Title -->
                <div class="row">
                    <div class="col-sm-4">
                        <h3 class="pull-left page-title"><b>REMAIN IN STOCK </b><i class="ion-ios7-cart-outline"></i></h3>

                    </div>
                    <div class="col-sm-4" style="margin-bottom: 14px">
                        <div class="panel-heading" style="background-color: #3e4550;">
                            <div class="row" style="color: #ffffff;">
                                <div class="col-md-12">
                                    VALUE OF <br><br>

                                    RWF REMAINING
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-4" style="margin-bottom: 10px">
                        <div class="panel-heading" style="background-color: #3e4550;">
                            <div class="row" style="color: #ffffff;">
                                <div class="col-md-12">
                                    PRODUCT
                                    <select class="select2 form-control" name="product" id="product">
                                        <option>Choose Product</option>
                                        <option value="sunglasses">SUN GLASSES</option>
                                        <option value="lens">LENS</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>

                @php
                    $totalAmount;
                @endphp
                <div class="row">
                    <div class="col-md-12">





                        <div class="panel panel-success product-section" id="sunglasses-field">
                            <div class="panel-heading" style="background-color:#3e4550;">
                                <h3 class="panel-title" style="color: #ffffff;">
                                    VALUE OF

                                    RWF Remain in Glasses stock</h3>
                            </div>
                            <div class="panel-body">
                                <div id="itamePlace">
                                    <table id="datatable-buttons" class="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>N/O</th>
                                                <th>MARK OF GLASSES</th>
                                                <th>CODE</th>
                                                <th>SIZE</th>
                                                <th>COLOR</th>
                                                <th>QUANTITY</th>
                                                <th>GONE</th>
                                                <th>REMAINING</th>
                                            </tr>
                                        </thead>

                                        @foreach ($data as $index => $item)
                                            <tr>
                                                <td>{{ $index + 1 }}</td>
                                                <td>{{ $item->item?->category?->category_name }}</td>
                                                <td>{{ $item->item?->code }}</td>
                                                <td>{{ $item->item?->lens_width }}-{{ $item->item?->bridge_width }}-{{ $item->item?->temple_length }}
                                                <td>{{ $item->item?->color }}</td>
                                                <td>{{ $item->item_quantity }}</td>
                                                <td>{{ $item->gone }}</td>
                                                <td>{{ $item->remaining }}</td>
                                            </tr>
                                        @endforeach
                                        <tbody>



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>



                        <div class="panel panel-success product-section" id="lens-field">
                            <div class="panel-heading" style="background-color:#3e4550;">
                                <h3 class="panel-title" style="color: #ffffff;">
                                    VALUE OF

                                    RWF Remain in Lens stock</h3>
                            </div>
                            <div class="panel-body">
                                <div id="itamePlace">
                                    <table id="datatable-buttons" class="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>N/O</th>
                                                <th>CATEGORY</th>
                                                <th>ATTRIBUTES</th>
                                                <th>POWER</th>
                                                <th>QUANTITY</th>
                                                <th>GONE</th>
                                                <th>REMAINING</th>
                                                <th class="hidden-print">Actions</th>
                                            </tr>
                                        </thead>


                                        <tbody>



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
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $('.product-section').hide();

            $('#product').change(function() {
                var selectedProduct = $(this).val();
                // Hide all product sections
                $('.product-section').hide();
                // Show the selected product section
                $('#' + selectedProduct + '-field').show();
            });
        });
    </script>
@endsection

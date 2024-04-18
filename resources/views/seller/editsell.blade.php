@extends('layouts.app')

@section('page-title')
    {{ __('Dashboard') }}
@endsection

@section('content')
    <div class="container">
        <div class="content-page">
            <!-- Start content -->
            <div class="content">
                <div class="container">

                    <!-- Page-Title -->
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="pull-left page-title"><b>EDIT ITEMS</b><i class="ion-ios7-cart-outline"></i></h3>
                        </div>
                    </div>

                    <div>
                        @if (session('success'))
                            <div class="alert alert-success" id="success-alert">
                                {{ session('success') }}
                            </div>
                        @endif

                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="container" style="background-color: #b5b5b6;">
                                <form id="get_sold_data" action="{{ route('seller.sales.update', $sale->id) }}"
                                    method="POST">
                                    @csrf
                                    @method('PUT')
                                    <div class="panel-heading">
                                        <div style="color: #ffffff;">
                                            <div class="col-md-4">
                                                Product
                                                <select class="select2 form-control" name="product">
                                                    <option value="Grace"
                                                        {{ $sale->product == 'Grace' ? 'selected' : '' }}>Grace</option>
                                                    <option value="Lense"
                                                        {{ $sale->product == 'Lense' ? 'selected' : '' }}>Lense</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4">
                                                Targeted Client
                                                <select class="select2 form-control" name="client">
                                                    <option value="Adult" {{ $sale->client == 'Adult' ? 'selected' : '' }}>
                                                        Adult</option>
                                                    <option value="Kid" {{ $sale->client == 'Kid' ? 'selected' : '' }}>
                                                        Kid</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4">
                                                Brand
                                                <select class="select2 form-control" name="brand">
                                                    <option value="Gucci" {{ $sale->brand == 'Gucci' ? 'selected' : '' }}>
                                                        Gucci</option>
                                                    <option value="Nike" {{ $sale->brand == 'Nike' ? 'selected' : '' }}>
                                                        Nike</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4">
                                                Item Code
                                                <input type="text" name="item_code" class="form-control"
                                                    value="{{ $sale->item_code }}">
                                            </div>
                                            <div class="col-md-4">
                                                Item Price
                                                <input type="number" name="price" class="form-control"
                                                    value="{{ $sale->price }}">
                                            </div>
                                            <div class="col-md-4">
                                                Discount
                                                <input type="number" name="discount" class="form-control"
                                                    value="{{ $sale->discount }}">
                                            </div>
                                            <div class="col-md-4">
                                                Item Qty
                                                <input type="number" name="qty" class="form-control"
                                                    value="{{ $sale->qty }}">
                                            </div>
                                            <div class="col-md-4">
                                                Color
                                                <input type="text" name="color" class="form-control"
                                                    value="{{ $sale->color }}">
                                            </div>
                                            <div class="col-md-4">
                                                Customer Name
                                                <input type="text" name="customer_name" class="form-control"
                                                    value="{{ $sale->customer_name }}">
                                            </div>
                                            <div class="col-md-4">
                                                Contact
                                                <input type="text" name="contact" class="form-control"
                                                    placeholder="07**********" value="{{ $sale->contact }}">
                                            </div>
                                            <div class="col-md-4">
                                                VAT
                                                <select class="select2 form-control" name="vat">
                                                    <option value="Include"
                                                        {{ $sale->vat == 'Include' ? 'selected' : '' }}>Include</option>
                                                    <option value="Exclude"
                                                        {{ $sale->vat == 'Exclude' ? 'selected' : '' }}>Exclude</option>
                                                </select>
                                            </div>
                                            <div class="col-md-12">
                                                Note:
                                                <textarea class="form-control autogrow" name="operation_notes" placeholder="Write something about this operation"
                                                    style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px">{{ $sale->operation_notes }}</textarea>
                                            </div>
                                            <div class="col-md-6">
                                                <button type="submit" class="btn btn-success" id="sell_item">APDATE <i class="fa fa-shopping-cart"></i></button>
                                            </div>
                                            <div class="col-md-6 text-right">
                                                <a href="{{ route('seller.sell.index') }}" type="submit" class="btn btn-primary " id="sell_item">Back <i
                                                        class="ion-ios7-cart-outline"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    <script>
        setTimeout(function() {
            document.getElementById('success-alert').style.display = 'none';
        }, 5000);
    </script>
@endsection

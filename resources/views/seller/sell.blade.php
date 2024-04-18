@extends('layouts.app')

@section('page-title')
    {{ __('Dashboard') }}
@endsection

@section('content')
    <div class="container">
        <div class="content-page">
            <!-- Start content -->
            <div class="content" >
                <div class="container" >

                    <!-- Page-Title -->
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="pull-left page-title"><b>SELL ITEMS</b><i class="ion-ios7-cart-outline"></i></h3>
                        </div>
                    </div>
                    <div>
                        @if(session('success'))
                        <div class="alert alert-success" id="success-alert">
                            {{ session('success') }}
                        </div>
                    @endif
                    
                    </div>
                    

                    <div class="row" >
                        <div class="col-md-12" >
                            <div class="container" style="background-color: #b5b5b6;">
                                <form id="get_sold_data" action="{{ route('seller.sell.store') }}" method="POST">
                                    @csrf
                                    <div class="panel-heading" >
                                        <div style="color: #ffffff;">
                                            <div class="col-md-4">
                                                Product
                                                <select class="select2 form-control" name="product">
                                                    <option value="Grace">Grace</option>
                                                    <option value="Lense">Lense</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4">
                                                Targeted Client
                                                <select class="select2 form-control" name="client">
                                                    <option value="Adult">Adult</option>
                                                    <option value="Kid">Kid</option>
                                                </select>
                                            </div>

                                            <div class="col-md-4">
                                                Brand
                                                <select class="select2 form-control" name="brand">
                                                    <option value="Gucci">Gucci</option>
                                                    <option value="Gucci">Gucci</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4">
                                                Item Code
                                                <input type="text" name="item_code" class="form-control">
                                            </div>
                                            <div class="col-md-4">
                                                Item Price
                                                <input type="number" name="price" class="form-control">
                                            </div>
                                            <div class="col-md-4">
                                                Discount
                                                <input type="number" name="discount" class="form-control" placeholder="0.0">
                                            </div>
                                            <div class="col-md-4">
                                                Item Qty
                                                <input type="number" name="qty" class="form-control">
                                            </div>
                                            <div class="col-md-4">
                                                Color<input type="text" name="color" class="form-control"></div>
                                            <div class="col-md-4">
                                                Customer Name<input type="text" name="customer_name"
                                                    class="form-control"></div>
                                        </div>
                                        <div class="col-md-4">
                                            Contact<input type="text" name="contact" class="form-control"
                                                placeholder="07**********">
                                        </div>

                                        <div class="col-md-4">
                                            VAT
                                            <select class="select2 form-control" name="vat">
                                                <option value="Include">Include</option>
                                                <option value="Exclude">Exclude</option>
                                            </select>
                                        </div>
                                        
                                        <div class="col-md-12">
                                            Note:
                                            <textarea class="form-control autogrow" name="operation_notes" placeholder="Write something about this operation"
                                                style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px"></textarea>

                                        </div>
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-success "
                                                id="sell_item">SELL <i class="ion-ios7-cart-outline"></i></button>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-success">
                                <div class="panel-heading" style="background-color:#3e4550;">
                                    <h3 class="panel-title" style="color: #ffffff;">SOLD ITEMS LIST</h3>
                                </div>
                                <div class="panel-body">

                                    <table id="datatable-buttons" class="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Item Name</th>
                                                <th>Item Code</th>
                                                <th>Color</th>
                                                <th>Quantity</th>
                                                <th>Unit Price</th>
                                                <th>Total Price</th>
                                                <th>Customer</th>
                                                <th>Done On</th>
                                                <th>Actions</th> 
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($sales as $key => $sale)
                                            <tr>
                                                <td>{{ $key + 1 }}</td>
                                                <td>{{ $sale->product }}</td>
                                                <td>{{ $sale->item_code }}</td>
                                                <td>{{ $sale->color }}</td>
                                                <td>{{ $sale->qty }}</td>
                                                <td>{{ $sale->price }} Rwf</td>
                                                <td>{{ $sale->qty * $sale->price }} Rwf</td>
                                                <td>{{ $sale->customer_name }}</td>
                                                <td>{{ $sale->created_at->format('d/m/Y') }}</td>
                                                <td>
                                                    <a href=" {{ route('seller.sales.edit', $sale->id) }}" class="btn btn-sm btn-primary">Edit</a>
                                                    
                                                    <form action="{{ route('seller.sales.destroy', $sale->id) }}" method="POST" style="display: inline;">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure you want to delete this sale?')">Delete</button>
                                                    </form>
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

            </div>
        </div>
    </div>
    <!--  ITEM HISTORY INFO -->
    <div class="modal fade bs-example-modal-lg" id="itemHist" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none">
        <div class="modal-dialog modal-lg">
            <div class="modal-content p-0 b-0">
                <div id="itemInfoPop">
                    <div class="panel panel-color panel-primary">
                        <div class="panel-heading">
                            Loadding...</div>
                        <div class="panel-body">

                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <div class="loader"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="pull-right">
                                        <div id="printInvoice">
                                            <button type="button" class="btn btn-danger waves-effect"
                                                data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

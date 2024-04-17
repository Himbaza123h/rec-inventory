// Number Format
Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
 
// 1 HOME PAGE
	
// 2 SETUP PAGE



// 3 BUY AND SELL PAGE //////////////////////////////////////////////////////////
	// START 3A INJECT IN THE STOCK------------------------------------------------------
function initItem(){
	var initItem = '1';
	$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				initItem : initItem,
			},
			success : function(html, textStatus){
				$("#itamePlace").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}
		//5 Load product to Edit-->
function editItem(itemId){
	var editItem = itemId
	$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				editItem : editItem,
			},
			success : function(html, textStatus){
				$("#itamePlace").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}

//REQUESTED ITEMS
// GET CATEGORY 
// function getRequestedCategory(){
// 	var requestedItemCategory = $("#requestedItemCategory").val();	
// 	$.ajax({
// 			type : "GET",
// 			url : "adminscript",
// 			dataType : "html",
// 			cache : "false",
// 			data : {
				
// 				requestedItemCategory : requestedItemCategory,
// 			},
// 			success : function(html, textStatus){
// 				$("#qtydiv").html(html);
// 			},
// 			error : function(xht, textStatus, errorThrown){
// 				alert("Error : " + errorThrown);
// 			}
// 	});
// }

// function getRequestedItemsDet(){
// 	var requestedItemCode = $("#requestedItemCode").val();	
// 	$.ajax({
// 			type : "GET",
// 			url : "adminscript",
// 			dataType : "html",
// 			cache : "false",
// 			data : {
				
// 				requestedItemCode : requestedItemCode,
// 			},
// 			success : function(html, textStatus){
// 				$("#showrequestedform").html(html);
// 			},
// 			error : function(xht, textStatus, errorThrown){
// 				alert("Error : " + errorThrown);
// 			}
// 	});
// }

function getPurchaseOrder(){
	var itemIdtoGet1 = $("#itemCode1").val();	
	$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				pOrderItemIdtoGet : itemIdtoGet1,
			},
			success : function(html, textStatus){
				$("#qtydiv").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}

		//5 Load product to Edit-->
function checkExistance(){
	var purchaseOrder1 = document.getElementById('purchaseOrder').value;
	var deliverlyNote1 = document.getElementById('deliverlyNote').value;
	$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				purchaseOrder : purchaseOrder1,
				deliverlyNote : deliverlyNote1,
			},
			success : function(html, textStatus){
				$("#listTable").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}
	

//ADD REQUESTED STOCK IN PURCHASE REQUEST
// function insertRequestedItem()
// {
// 	var unityPrice 		  = document.getElementById('unityPrice').value;
// 	var requestedItemCode = document.getElementById('requestedItemCode').value;
// 	var itemCategory 	  = document.getElementById('requestedItemCategory').value;
// 	var qty = document.getElementById('qty').value;
// 	if (qty == null || qty == "") {
//         alert("Quantity must be filled out");
//         return false;
//     }
// 	var operationNotes = document.getElementById('operationNotes').value;
// 	var companyId = document.getElementById('companyId').value;
	
// 	$.ajax({
// 		type : "GET",
// 		url : "adminscript",
// 		dataType : "html",
// 		cache : "false",
// 		data : {
// 			companyId : companyId,
// 			unityPrice : unityPrice,
// 			requestedItemCode : requestedItemCode,
// 			itemCategory : itemCategory,
// 			qty : qty,
// 			requestOperationNotes : operationNotes
			
			
// 		},
// 		success : function(html, textStatus){
// 			alert('You have successfully request for stock');
// 			window.location.href = '';
// 		},
// 		error : function(xht, textStatus, errorThrown){
// 			alert("Error : " + errorThrown);
// 		}
// 	});
// }

		// ADD ITEM INTO PURCHASE ORDER LIST
function insertPOrderItem(){
	
	var purchaseOrder = document.getElementById('purchaseOrder').value;
	//alert(purchaseOrder);
	if (purchaseOrder == null || purchaseOrder == "") {
        alert("Purchase Order must be filled out");
        return false;
    }
    var invoiceQtyToAdd = document.getElementById('qty').value; 
	var unityPrice = document.getElementById('unityPrice').value;
	
	var pricePerItem = Number(unityPrice) * Number(invoiceQtyToAdd);
	if (pricePerItem == null || unityPrice == "") {
        alert("Purchased Price  must be filled out");
        return false;
    }
	var itemCode1 = document.getElementById('itemCode1').value;
	var qty = document.getElementById('qty').value;
	if (qty == null || qty == "") {
        alert("Quantity must be filled out");
        return false;
    }
	var supplierName = document.getElementById('supplierName').value;
	if (supplierName == "Choose Supplier" || supplierName == "") {
        alert("Please Select Supplier");
        return false;
    }
	var supplierRef = document.getElementById('supplierRef').value;
	var operationNotes = document.getElementById('operationNotes').value;
	var companyId = document.getElementById('companyId').value;
	
	
	//document.getElementById('tempTable').innerHTML = '';
		$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				companyId : companyId,
				purchaseOrder : purchaseOrder,
				unityPrice : pricePerItem,
				itemCode1 : itemCode1,
				qty : qty,
				supplierName : supplierName,
				supplierRef : supplierRef,
				POrderOperationNotes : operationNotes,
				
				
			},
			success : function(html, textStatus){
				$("#listTable").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}
		// 4 REMOVE AN ITEM
function removeOnPo(removeTransaction){
	//var txt;
    var r = confirm("Are you sure you want to remove this item from the list");
    if (r == true)
		{
      //  txt = "You pressed OK!";
    
	
	
	var InvoinceNo = document.getElementById('purchaseOrder').value;
	var DocNo = document.getElementById('deliverlyNote').value;
	
	$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				removeTransaction : removeTransaction,
				purchaseOrder : InvoinceNo,
				deliverlyNote : DocNo,
				
			},
			success : function(html, textStatus){
				$("#listTable").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
	
	}
	else 
	{
       // txt = "You pressed Cancel!";
    }
    //document.getElementById("demo").innerHTML = txt;
	
}
	// END 3A INJECT IN THE STOCK-----------------------------------------------------------------------------


	// START 3B INJECT IN THE STOCK------------------------------------------------------
		//1 CHECK IF THE INVOICE EXISTS
function generateInvoice(){
	var generateINV = '1';
	$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				generateINV : generateINV,
			},
			success : function(html, textStatus){
				$("#generatedInv").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}
		//1 CHECK IF THE INVOICE EXISTS
function checkInvoince(){
	var InvoinceNo = document.getElementById('InvoinceNo').value;
	var DocNo = document.getElementById('DocNo').value;
	$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				InvoinceNo : InvoinceNo,
				DocNo : DocNo,
			},
			success : function(html, textStatus){
				$("#listInvoiceTable").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}
		// 2 SELECT ITEMS FROM DB
function getInvoiceItemsDet(){
	var thenthis = $("#itemInvoiceCode").val();	
	$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				thenthis : thenthis,
			},
			success : function(html, textStatus){
				$("#putthetest").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}// 2 SELECT ITEMS FROM DB
		//
	// END	

//SELL AND PURCHASE ITEM TRANSACTIONS
$(document).ready(function(){
	//FUNCTION CALL
	sellMore();
	getItemsDet();
	getItemsRequested();

	//PURCHASE ITEMS 
	$("#buttonAddPurchase").click(function(){
		getItemsDet();
	})
	function getItemsDet(){
		$.ajax({
				type : "GET",
				url : "adminscript",
				dataType : "html",
				cache : "false",
				data : {
					
					itemIdtoGet : 1,
				},
				success : function(data){
					$("#addNewPurchase").append(data);
				},
				error : function(xht, textStatus, errorThrown){
					alert("Error : " + errorThrown);
				}
		});
	}
	//REMOVE ITEM ON LIST
	$("#removeItem").click(function(){
		$("#addNewPurchase").children("div:last").remove();
	})
	//ITEM CATEGORY
	$("#addNewPurchase").delegate(".itemCategory","change",function(){
		var categoryId = $(this).val();
		var div = $(this).parent().parent().parent();
		$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				purchaseCategory:1,categoryId:categoryId
			},
			success : function(html, textStatus){
				div.find('.selectedItems').html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	})
	// ITEMS
	$("#addNewPurchase").delegate(".itemCode1","change",function(){
		var itemId = $(this).val();
		var div = $(this).parent().parent().parent();
		var cat = $(this).parent().parent().parent().parent();
		var categoryId = cat.find(".itemCategory").val();
		$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "json",
			cache : "false",
			data : {
				
				purchaseItemCode:1,itemId:itemId,categoryId:categoryId
			},
			success : function(data){
				// div.find(".InvioceUnityPrice").val(data["unityPrice"]);
				// div.find(".limitQty").val(data["Balance"]);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	})
	// AUTP GENERATE PRICES
	$("#addNewPurchase").delegate(".qty,.unityPrice,.taxport,.taxborder,.transportfees,.profit","keyup",function(){
		var qty = $(this);
		var div = $(this).parent().parent().parent().parent();
		if (isNaN(qty.val())) {
			alert("Please enter valid quantity");
		}
		else{
			var sumPricePerItem = (div.find(".qty").val() * div.find(".unityPrice").val() + Number(div.find(".taxport").val()) + Number(div.find(".taxborder").val()) + Number(div.find(".transportfees").val()));
			var findprofit = (Number(sumPricePerItem) * Number(div.find(".profit").val()))/100;
			var totalPrice = sumPricePerItem + findprofit;
			var pricePerItem = totalPrice / div.find(".qty").val()
			// console.log(pricePerItem);
			div.find(".purchaseTotalPrice").val(totalPrice);
			div.find(".pricePerItem").val(pricePerItem);
		}
	})

	//START PURCHASEING ITEMS
	$("#purchase_item").click(function(){
		var purchaseOrder = document.getElementById('InvoinceNo').value;
		var itemCategory = document.getElementById('itemCategory').value;
		if (itemCategory == null || itemCategory == "") {
	        alert("Item category must be selected");
	        return false;
	    }
		var deliverlyNote = document.getElementById('deliverlyNote').value;
		if (deliverlyNote == null || deliverlyNote == "") {
	        alert("Deliverly Note must be filled out");
	        return false;
	    }
		var unityPrice = document.getElementById('unityPrice').value;
		if (unityPrice == null || unityPrice == "") {
	        alert("Product Price must be filled out");
	        return false;
	    }
	    var qty = document.getElementById('qty').value;
		if (qty == null || qty == "") {
	        alert("Quantity must be filled out");
	        return false;
	    }
		var itemCode1 = document.getElementById('itemCode1').value;
		if (itemCode1 == null || itemCode1 == "") {
	        alert("Please Select Item");
	        return false;
	    }
		
		var supplierName = document.getElementById('supplierName').value;
		if (supplierName == "Choose Supplier" || supplierName == "") {
	        alert("Please Select Supplier");
	        return false;
	    }
		var docRefNumber = document.getElementById('docRefNumber').value;
		if (docRefNumber == "Choose Payment" || docRefNumber == "") {
	        alert("Please Choose Payment Way");
	        return false;
	    }
	    var weight = document.getElementById('weight').value;
		if (weight == "Select Item Measure" || weight == "") {
	        alert("Item weight must be filled");
	        return false;
	    }
		// var invoiceQtyToAdd = document.getElementById('qty').value; 
		var invoiceTaxportToAdd = document.getElementById('taxport').value;
		var invoiceTaxborderToAdd = document.getElementById('taxborder').value;
		var invoiceTransportFeesToAdd = document.getElementById('transportfees').value;
		var invoiceProfitToAdd = document.getElementById('profit').value;
		
		var supplierRef = document.getElementById('supplierRef').value;
		var operationNotes = document.getElementById('operationNotes').value;
		var companyId = document.getElementById('companyId').value;
		var expiredDate = document.getElementById('expiredDate').value;
	
		var data = $("#get_purchased_data").serialize();
		$.ajax({
			type : "GET",
			url : "adminscript",
			data : data,
			success : function(data,html){
				alert("Item Purchased Succesfuly added on the list");
				window.location.href='';
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	})

	//OUT ITEMS OR SELL ITEMS
	$("#buttonAddSells").click(function(){
		sellMore();
	})
	function sellMore(){
		$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				invioceItemIdtoGet : 1,
			},
			success : function(data){
				$("#addNewSell").append(data);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	}
	// REMOVE ITEM ON LIST
	$("#remove").click(function(){
		$("#addNewSell").children("div:last").remove();
	})
	// ITEM CATEGORIES
	$("#addNewSell").delegate(".itemCategory","change",function(){
		var categoryId = $(this).val();
		var div = $(this).parent().parent().parent();
		$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				sellInvoiceCategory:1,categoryId:categoryId
			},
			success : function(data){
				div.find(".selectedInvoiceItems").html(data).show();
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	})
	$("#addNewSell").delegate(".itemInvoiceCode","change",function(){
		var itemId = $(this).val();
		var div = $(this).parent().parent().parent();
		$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "json",
			cache : "false",
			data : {
				
				getinvioceItemIdtoGet:1,itemId:itemId
			},
			success : function(data){
				div.find(".InvioceUnityPrice").val(data["unityPrice"]);
				div.find(".limitQty").val(data["Balance"]);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	})
	$("#addNewSell").delegate(".InvoiceQty, .discount","keyup",function(){
		var qty = $(this);
		var div = $(this).parent().parent().parent().parent();
		if (isNaN(qty.val())) {
			alert("Please enter valid quantity");
		}
		else{
			if ((qty.val() - 0) > (div.find(".limitQty").val() - 0)) {
				alert("Sorry Quantity must be less than "+div.find(".limitQty").val()+" ");
			}
			else{
				var calculateDiscount = ((div.find(".InvoiceQty").val() * div.find(".InvioceUnityPrice").val()) * div.find(".discount").val() /100);
				var totalPrice = ((div.find(".InvoiceQty").val() * div.find(".InvioceUnityPrice").val())) - calculateDiscount;
				div.find(".invoiceTotalPrice").val(totalPrice);
			}
		}
	})
	$("#addNewSell").delegate(".InvoicePaidAmount","change",function(){
		var paidAmount = $(this);
		var div = $(this).parent().parent().parent().parent();
		var calculateDiscount = ((div.find(".InvoiceQty").val() * div.find(".InvioceUnityPrice").val()) * div.find(".discount").val() /100);
		var totalPrice = ((div.find(".InvoiceQty").val() * div.find(".InvioceUnityPrice").val())) - calculateDiscount;
		if (paidAmount.val() == 'Full Paid') {
			var html = '<input name="totalPaidAmount[]" class="form-control totalPaidAmount" value="'+totalPrice+'" id="finalPaidAmount" readonly/>';
			div.find(".totalPaidAmount").replaceWith(html);
		}
		else if(paidAmount.val() == 'Partial Paid'){
			var html = '<input name="totalPaidAmount[]" class="form-control totalPaidAmount" value="" id="finalPaidAmount"/>';
			div.find(".totalPaidAmount").replaceWith(html);
		}
		else{
			var html = '<input name="totalPaidAmount[]" class="form-control totalPaidAmount" value="0" id="finalPaidAmount" readonly/>';
			div.find(".totalPaidAmount").replaceWith(html);
		}
	})
	$("#sell_item").click(function(){
		var InvoinceNo = $('#InvoinceNo').val();
		if (InvoinceNo == null || InvoinceNo == "") {
	        alert("InvoinceNo must be filled out");
	        return false;
	    }
	    var PaymentMethod = $('#docRefNumber').val();
		if (PaymentMethod == "Choose Payment" || PaymentMethod == "") {
	        alert("Select Payment Method");
	        return false;
	    }
	    var InvoiceCustomerName = $('#InvoiceCustomerName').val();
		if (InvoiceCustomerName == 'N/A' || InvoiceCustomerName == "") {
	        alert("Customer Name must be filled out");
	        return false;
	    }
	    var InvoiceCustomerAddress = $('#InvoiceCustomerAddress').val();
		if (InvoiceCustomerAddress == null || InvoiceCustomerAddress == "") {
	        alert("Customer Address must be filled out");
	        return false;
	    }
	    var InvoiceCustomerPhone = $('#InvoiceCustomerPhone').val();
	    if (InvoiceCustomerPhone == "" || InvoiceCustomerPhone == null) {
	        alert("Customer contacts must be filled out");
	        return false;
	    }
	    var InvoicePaidAmount = $('#InvoicePaidAmount').val();
		if (InvoicePaidAmount == "Select Paid Amount" || InvoicePaidAmount == "") {
	        alert("Select paid amount");
	        return false;
	    }
	    var InvoiceTotalPaidAmount = $('#finalPaidAmount').val();
		if (InvoiceTotalPaidAmount == null || InvoiceTotalPaidAmount == "") {
	        alert("Total paid amount must be filled out");
	        return false;
	    }
	    var vatselection = $('#vat').val();
		if (vatselection == "Vat Selection" || vatselection == "") {
	        alert("Include or Exclude Vat");
	        return false;
	    }
	    var itemCategory = $('#itemCategory').val();
	    if (itemCategory == null || itemCategory == "") {
	    	alert("Category must be selected");
	        return false;
	    }
		var data = $("#get_sold_data").serialize();
		$.ajax({
			type : "GET",
			url : "adminscript",
			data : data,
			success : function(data,html){
				alert("Item Sold Succesfuly added on the list");
				window.location.href='';
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	})

	//REQUEST ITEMS 
	$("#buttonAddRequest").click(function(){
		getItemsRequested();
	})
	function getItemsRequested(){
		$.ajax({
				type : "GET",
				url : "adminscript",
				dataType : "html",
				cache : "false",
				data : {
					
					requestedItemCategory : 1,
				},
				success : function(data){
					$("#addNewRequest").append(data);
				},
				error : function(xht, textStatus, errorThrown){
					alert("Error : " + errorThrown);
				}
		});
	}
	//REMOVE ITEM ON LIST
	$("#removeItem").click(function(){
		$("#addNewRequest").children("div:last").remove();
	})
	$("#addNewRequest").delegate(".requestedItemCategory","change",function(){
		var categoryId = $(this).val();
		var div = $(this).parent().parent().parent();
		$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				requestedItemCode:1,categoryId:categoryId
			},
			success : function(data){
				div.find(".showrequestedform").html(data).show();
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	})
	$("#addNewRequest").delegate(".requestedItemCode","change",function(){
		var itemId = $(this).val();
		var div = $(this).parent().parent().parent();
		// var categoryId = cat.find(".requestedItemCategory").val();
		$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "json",
			cache : "false",
			data : {
				
				getRequestedItemIdtoGet:1,itemId:itemId
			},
			success : function(data){
				div.find(".unityPrice").val(data["unityPrice"]);
				div.find(".limitQty").val(data["Balance"]);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	})
	$("#addNewRequest").delegate(".requestedQty","keyup",function(){
		var qty = $(this);
		var div = $(this).parent().parent().parent();
		var p = $(this).parent().parent().parent().parent();
		if (isNaN(qty.val())) {
			alert("Please enter valid quantity");
		}
		else{
				var totalPrice = div.find(".requestedQty").val() * p.find(".unityPrice").val();
				p.find(".requestedTotalPrice").val(totalPrice);
		}
	})
	$("#request_item").click(function(){
		
		var data = $("#get_requested_data").serialize();
		$.ajax({
			type : "GET",
			url : "adminscript",
			data : data,
			success : function(data,html){
				alert("Items Requested Succesfuly added on the list");
				window.location.href='';
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
		});
	})


});	
	// START 3C  TAKE OUT AN ITEM
function ouItem(){
	
	var InvoinceNo = document.getElementById('InvoinceNo').value;
	if (InvoinceNo == null || InvoinceNo == "") {
        alert("InvoinceNo must be filled out");
        return false;
    }
    var PaymentMethod = document.getElementById('docRefNumber').value;
	if (PaymentMethod == "Choose Payment" || PaymentMethod == "") {
        alert("Select Payment Method");
        return false;
    }
    var InvoiceCustomerName = document.getElementById('InvoiceCustomerName').value;
	if (InvoiceCustomerName == 'N/A' || InvoiceCustomerName == "") {
        alert("Customer Name must be filled out");
        return false;
    }
    var InvoiceCustomerAddress = document.getElementById('InvoiceCustomerAddress').value;
	if (InvoiceCustomerAddress == null || InvoiceCustomerAddress == "") {
        alert("Customer Address must be filled out");
        return false;
    }
    var InvoiceCustomerPhone = document.getElementById('InvoiceCustomerPhone').value;
    if (InvoiceCustomerPhone == "" || InvoiceCustomerPhone == null) {
        alert("Customer contacts must be filled out");
        return false;
    }
	var itemInvoiceCode = document.getElementById('itemInvoiceCode').value;
	var InvioceQty = parseInt(document.getElementById('InvoiceQty').value);
	if (InvioceQty == NaN || InvioceQty == "") {
        alert("InvoiceQty must be filled out");
        return false;
    }

	var InvoiceUnityPrice = document.getElementById('InvioceUnityPrice').value;
	if (InvoiceUnityPrice == null || InvoiceUnityPrice == "") {
        alert("InvoiceUnityPrice must be filled out");
        return false;
    }
    var InvoicePaidAmount = document.getElementById('InvoicePaidAmount').value;
	if (InvoicePaidAmount == "Select Paid Amount" || InvoicePaidAmount == "") {
        alert("Select paid amount");
        return false;
    }
	var InvioceOperationNotes = document.getElementById('inOpNote').value;
	var InvoiceDiscount = document.getElementById('discount').value;
	
	var limiter = parseInt(document.getElementById('limiter').value);
	if (limiter == null || limiter == "") {
        alert("You sell what you purchase, make sure you have stock");
        return false;
    }
    var InvioceDiscount = document.getElementById('discount').value;
    //calculate profit
    var calculateDiscount = (Number(InvoiceUnityPrice) * Number(InvioceQty))*Number(InvioceDiscount)/100;
	var InvoiceTotalTobePaidAmount = (Number(InvoiceUnityPrice) * Number(InvioceQty)) - Number(calculateDiscount);

	var InvoiceTotalPaidAmount = document.getElementById('finalPaidAmount').value;
	if (InvoiceTotalPaidAmount == null || InvoiceTotalPaidAmount == "") {
        alert("Total paid amount must be filled out");
        return false;
    }
	
	if (InvioceQty > limiter)
	{
	   alert("The qty: "+InvioceQty+" must be less than: "+limiter+", change the qty and try again, ...");
        return false;	
	}
	
	//alert(InvioceOperationNotes);
	//alert('HELLO!');
	// document.getElementById('tempTable').innerHTML = '';
		$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				InvoinceNo : InvoinceNo,
				PaymentMethod: PaymentMethod,	
				InvoiceUnityPrice : InvoiceUnityPrice,
				itemInvoiceCode : itemInvoiceCode,
				InvioceQty : InvioceQty,
				limiter : limiter,
				InvoiceCustomerName : InvoiceCustomerName,
				InvoiceCustomerAddress: InvoiceCustomerAddress,
				InvoiceCustomerPhone: InvoiceCustomerPhone,
				InvioceDiscount	  : InvioceDiscount,
				InvoicePaidAmount : InvoicePaidAmount,
				InvoiceTotalTobePaidAmount : InvoiceTotalTobePaidAmount,
				InvoiceTotalPaidAmount : InvoiceTotalPaidAmount,
				InvioceOperationNotes : InvioceOperationNotes,
				
			},
			success : function(html, textStatus){
				$("#listInvoiceTable").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}
		// 4 REMOVE AN ITEM
function removeOnInv(removeTransaction){
	//var txt;
    var r = confirm("Are you sure you want to remove this item from the list");
    if (r == true)
		{
      //  txt = "You pressed OK!";
    
	
	
	var InvoinceNo = document.getElementById('InvoinceNo').value;
	var DocNo = document.getElementById('DocNo').value;
	
	$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				removeTransaction : removeTransaction,
				InvoinceNo : InvoinceNo,
				DocNo : DocNo,
				
			},
			success : function(html, textStatus){
				$("#listInvoiceTable").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
	
	}
	else 
	{
       // txt = "You pressed Cancel!";
    }
    //document.getElementById("demo").innerHTML = txt;
	
}
		// 5 INVOICE ITEM TOTAL

function paidAmount(){
	var unityPriceToAdd = document.getElementById('InvioceUnityPrice').value;
	var invoiceQtyToAdd = document.getElementById('InvoiceQty').value;
	var discountToAdd 	= document.getElementById('discount').value;
	var calculateProfit = (Number(unityPriceToAdd) * Number(invoiceQtyToAdd))*Number(discountToAdd)/100;
	var totalPrice = (Number(unityPriceToAdd) * Number(invoiceQtyToAdd)) - Number(calculateProfit);
	var paidAmount = $('#InvoicePaidAmount').val();
	if (paidAmount == 'Full Paid') {
		document.getElementById("totalPaidAmount").innerHTML = '<input class="form-control" value="'+totalPrice+'" id="finalPaidAmount" disabled/><span class="input-group-addon">F</span>';
	}
	else if(paidAmount == 'Partial Paid'){
		document.getElementById("totalPaidAmount").innerHTML = '<input class="form-control" value="" id="finalPaidAmount"/><span class="input-group-addon">F</span>';
	}	
	else{
		document.getElementById("totalPaidAmount").innerHTML = '<input class="form-control" value="0" id="finalPaidAmount" disabled/><span class="input-group-addon">F</span>';
	}
	
}
		// 5 INVOICE ITEM TOTAL
function purchaseTotal(){
	var unityPriceToAdd = document.getElementById('unityPrice').value;
	var invoiceQtyToAdd = document.getElementById('qty').value; 
	var invoiceTaxportToAdd = document.getElementById('taxport').value;
	var invoiceTaxborderToAdd = document.getElementById('taxborder').value;
	var invoiceTransportFeesToAdd = document.getElementById('transportfees').value;
	
	var totalPrice = Number(unityPriceToAdd) * Number(invoiceQtyToAdd) + Number(invoiceTaxportToAdd) + Number(invoiceTaxborderToAdd) + Number(invoiceTransportFeesToAdd);
	// console.log(totalPrice);
	var itemPrice = (unityPriceToAdd + invoiceTaxportToAdd + invoiceTaxborderToAdd + invoiceTransportFeesToAdd)/invoiceQtyToAdd; 
	var totalprice1 = (totalPrice).formatMoney(0);
	document.getElementById("purchaseTotalPrice").innerHTML = '<input class="form-control" value="'+totalprice1+'"disabled/><span class="input-group-addon">F</span>';
	
}

function purchaseOrderTotal(){
	var unityPriceToAdd = document.getElementById('unityPrice').value;
	var invoiceQtyToAdd = document.getElementById('qty').value; 
	
	var totalPrice = Number(unityPriceToAdd) * Number(invoiceQtyToAdd);
	var totalprice1 = (totalPrice).formatMoney(0);
	document.getElementById("purchaseOrderTotal").innerHTML = '<input class="form-control" value="'+totalprice1+'"disabled/><span class="input-group-addon">F</span>';
	
}

function requestPurchaseTotal(){
	var unityPriceToAdd = document.getElementById('unityPrice').value;
	var invoiceQtyToAdd = document.getElementById('qty').value; 
	
	var totalPrice = Number(unityPriceToAdd) * Number(invoiceQtyToAdd);
	var totalprice1 = (totalPrice).formatMoney(0);
	document.getElementById("purchaseRequestTotal").innerHTML = '<input class="form-control" value="'+totalprice1+'"disabled/><span class="input-group-addon">F</span>';
	
}

function bringPrint(){ 
	var InvoinceNo = document.getElementById('InvoinceNo').value;
	document.getElementById("printInvoice").innerHTML = '<button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Close</button> <a href="invoices?invoiceNo='+InvoinceNo+'" class="btn btn-inverse waves-effect waves-light"><i class="fa fa-print"></i></button>';
}						
	// END 3B INJECT IN THE STOCK-----------------------------------------------------------------------------


	// START 3C ITEM INFO------------------------------------------------------
function itemInfo(itemInfoId){ 
$.ajax({
			type : "GET",
			url : "adminscript",
			dataType : "html",
			cache : "false",
			data : {
				
				itemInfoId : itemInfoId,
				
				
				
			},
			success : function(html, textStatus){
				$("#itemInfoPop").html(html);
			},
			error : function(xht, textStatus, errorThrown){
				alert("Error : " + errorThrown);
			}
	});
}
	
// 4 USERS PAGE

// 5 CLIENTS PAGE

// 6 SUPPLIER PAGE

// 7 INVOICE PAGE

// 8 PROFORMA INVOICE PAGE

// 9 PURCHASE ORDER PAGE

// 10 GENERAL REPORTS

// 11 FASTER / SLOW ITEMS PAGE

// 12 RETURN ON INVESTIMENT PAGE
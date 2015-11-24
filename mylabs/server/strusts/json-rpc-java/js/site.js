
function fnSum(form) {
	 try {
			jsonrpc = new JSONRpcClient("JSON-RPC");
	       // Call a Java method on the server
        	result = jsonrpc.BusinessObject.sum(form.a.value, form.b.value);
        	alert(result);

    } catch(e) {
		alert(e.description);
    }
}

function fnPushArray(form) {
	 try {
			jsonrpc = new JSONRpcClient("JSON-RPC");
	       // Call a Java method on the server
        	result = jsonrpc.pushArray.push(form.num.value);
        	//alert(result);
			
			document.getElementById("spanPushArray").innerHTML = "";
			for(var i=0; i < result.list.length; i++) {
				document.getElementById("spanPushArray").innerHTML
				= document.getElementById("spanPushArray").innerHTML + "<br/>" + result.list[i];
			}
			
			
    } catch(e) {
		alert(e.description);
    }
}
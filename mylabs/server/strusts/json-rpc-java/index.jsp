<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="com.infosys.jsonrpc.BusinessObject"%>
<%@page import="com.infosys.jsonrpc.PushArray"%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>JSON-RPC-Java Demo</title>
	<script type="text/javascript" src="js/jsonrpc.js"></script>
	<script type="text/javascript" src="js/site.js"></script>
	<script type="text/javascript" src="js/site.js">
	function fnSum(form) {
		 try {
			//Create a jsonrpc object for doing RPC.
			jsonrpc = new JSONRpcClient("JSON-RPC");
				
		    // Call a Java method on the server
	        result = jsonrpc.BusinessObject.sum(form.a.value, form.b.value);
	        //Display the result
	        alert(result);
	
	    } catch(e) {
			alert(e.description);
	    }
	}
	</script>
</head>
<body>

	<jsp:useBean id="JSONRPCBridge" scope="session"
	   class="com.metaparadigm.jsonrpc.JSONRPCBridge" />

<% 
	BusinessObject businessObject = new BusinessObject();
	PushArray pushArray = new PushArray();
	
	JSONRPCBridge.registerObject("BusinessObject", businessObject); 
	JSONRPCBridge.registerObject("pushArray", pushArray); 
%>


	<h1>JSON-RPC-JAVA</h1> 
	
	<form>
		<input type="text" name="a"/>
		<input type="text" name="b"/>
		<input type="button" onclick="fnSum(this.form)" value="Sum"/>
		
	</form>
	
</body>
</html>
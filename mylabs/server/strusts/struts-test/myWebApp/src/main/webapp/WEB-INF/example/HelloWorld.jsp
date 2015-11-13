<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<%@ taglib prefix="f" uri="/flex-tags" %>
<html>
<head>
    <title><s:text name="HelloWorld.message"/></title>
</head>

<body>
<h2><s:property value="message"/></h2>

<h3>Languages</h3>
<ul>
    <li>
        <s:url id="url" action="HelloWorld">
            <s:param name="request_locale">en</s:param>
        </s:url>
        <s:a href="%{url}">English</s:a>
    </li>
    <li>
        <s:url id="url" action="HelloWorld">
            <s:param name="request_locale">es</s:param>
        </s:url>
        <s:a href="%{url}">Espanol</s:a>
    </li>
    
    <f:website theme="flex">
    	<div>
    		<button class="bt"> bt in website </button>
    	</div>
    </f:website>
    
    <f:webpage > <div id="nest"></div></f:webpage>
    
    <s:label>ssss</s:label>
</ul>

</body>
</html>

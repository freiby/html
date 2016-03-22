package com.wxxr.callcenterlog;

import com.googlecode.jsonrpc4j.JsonRpcParam;
public interface ServiceInterfaceWithParamNameAnnotation {
	public String testMethod(@JsonRpcParam("param1") String param1);    
	public String overloadedMethod();
	public String overloadedMethod(@JsonRpcParam("param1") String stringParam1);
	public String overloadedMethod(@JsonRpcParam("param1") String stringParam1, @JsonRpcParam("param2") String stringParam2);
	public String overloadedMethod(@JsonRpcParam("param1") int intParam1);
	public String overloadedMethod(@JsonRpcParam("param1") int intParam1, @JsonRpcParam("param2") int intParam2);
	
	public String methodWithoutRequiredParam(@JsonRpcParam("param1") String stringParam1, @JsonRpcParam(value="param2") String stringParam2);
}
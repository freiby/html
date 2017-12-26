package com.wxxr.callcenterlog;

import com.googlecode.jsonrpc4j.JsonRpcMethod;

public interface ServiceInterfaceWithCustomMethodNameAnnotation {
        @JsonRpcMethod("Test.custom")
        public String customMethod();

        @JsonRpcMethod("Test.custom2")
        public String customMethod2(String stringParam1);
    }
package com.wxxr.callcenterlog;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import com.wxxr.callcenterlog.bean.Bean;
import com.wxxr.callcenterlog.bean.SmsInfo;

public interface ServiceInterface {        
		public String testMethod(String param1);
		public String overloadedMethod();
		public String overloadedMethod(String stringParam1);
		public String overloadedMethod(String stringParam1, String stringParam2);
		public String overloadedMethod(int intParam1);
		public String overloadedMethod(int intParam1, int intParam2);
		void doSomethingObjects(Bean beanParam, Map mapParam, List listParam);
		List<SmsInfo> queryList(long number,Date start, Date end, String pindao, int mode, int page, int pageTotal);
	}
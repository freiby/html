package com.wxxr.tiles.example;

import java.util.HashMap;
import java.util.Map;

public class JsonTestAction extends ExampleSupport{
	@Override
	public String execute() throws Exception {
		return super.execute();
	}
	
	private Map<String ,Object> dataMap = new HashMap<String ,Object>();
	public String testByAction() {
        // dataMap中的数据将会被Struts2转换成JSON字符串，所以这里要先清空其中的数据
        dataMap.clear();
        User user = new User();
        user.setId("123");
        user.setName("JSONActionStruts2");
        user.setPassword("123");
        user.setSay("Hello world !");
        dataMap.put("user", user);
        // 放入一个是否操作成功的标识
        dataMap.put("success", true);
        // 返回结果
        return SUCCESS;
    }
	
}

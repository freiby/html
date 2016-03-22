package com.wxxr.callcenterlog;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.wxxr.callcenterlog.bean.Bean;
import com.wxxr.callcenterlog.bean.SmsInfo;

public class Service implements ServiceInterface, ServiceInterfaceWithParamNameAnnotation,
            ServiceInterfaceWithCustomMethodNameAnnotation {
		public String testMethod(String param1) {
			return "success";
		}
        public String customMethod() {
            return "custom";
        }

        public String customMethod2(String stringParam1) {
            return "custom2";
        }

		public String overloadedMethod() {
			return "noParam";
		}
		public String overloadedMethod(String stringParam1) {
			return stringParam1;
		}
		public String overloadedMethod(String stringParam1, String stringParam2) {
			return stringParam1+", "+stringParam2;
		}
		public String overloadedMethod(int intParam1) {
			return "intParam"+intParam1;
		}
		public String overloadedMethod(int intParam1, int intParam2) {
			return "intParam"+intParam1+", intParam"+intParam2;
		}

		public String methodWithoutRequiredParam(String stringParam1, String stringParam2) {
			return stringParam1+", "+stringParam2;
		}
		public void doSomethingObjects(Bean beanParam, Map mapParam,
				List listParam) {
			System.out.println(beanParam.toString()  );
			
			Set keys = mapParam.keySet();
			Iterator it = keys.iterator();
			System.out.print("mapParam ");
			while(it.hasNext()){
				Object key = it.next();
				System.out.println("key " + key + " value" + mapParam.get(key));
			}
			
			it = listParam.iterator();
			System.out.print("listParam ");
			while(it.hasNext()){
				System.out.println("list valueitem  " + it.next());
			}
		}
		
		public List<SmsInfo> queryList(long number,Date start, Date end, String pindao, int mode, int page, int pageTotal){
			List<SmsInfo> list = new ArrayList<SmsInfo>();
			if(page == 1){
				
				SmsInfo info = new SmsInfo();
				info.setArea("CM_GUANGDONG");
				info.setDate(new Date(System.currentTimeMillis()));
				info.setMesg("将导航条内放置品牌标志的地方替换为 元素即可展示自己的品牌图标。由于已经被设置了内补（padding）和高度（height），你需要根据自己的情况添加一些 CSS 代码从而覆盖默认设置");
				info.setSendNumber(1065800711);
				info.setReceiveNumber(13655554545L);
				info.setStatus("普通");
				info.setType("下行短信");
				list.add(info);
				
				info = new SmsInfo();
				info.setArea("CM_GUANGDONG");
				info.setDate(new Date(System.currentTimeMillis()));
				info.setMesg("将导航条内放置品牌标志的地方替换为 元素即可展示自己的品牌图标");
				info.setSendNumber(1065800711);
				info.setReceiveNumber(13655554545L);
				info.setStatus("普通");
				info.setType("下行短信");
				list.add(info);
				
				
				info = new SmsInfo();
				info.setArea("CM_GUANGDONG");
				info.setDate(new Date(System.currentTimeMillis()));
				info.setMesg("两只大熊猫将赴韩，一只火辣霸道一只活泼胆小。3月3日，雄性大熊猫'园欣'与雌性大熊猫\"华妮\"将赴韩，开始为期15年的大熊猫国际科研合作。据悉，韩国已经为它们准备了3300平米的主题熊猫馆");
				info.setSendNumber(1065800711);
				info.setReceiveNumber(13655554545L);
				info.setStatus("普通");
				info.setType("下行短信");
				list.add(info);
			}else{
				SmsInfo info = new SmsInfo();
				info = new SmsInfo();
				info.setArea("CM_GUANGDONG");
				info.setDate(new Date(System.currentTimeMillis()));
				info.setMesg("两只大熊猫将赴韩，一只火辣霸道一只活泼胆小。3月3日，雄性大熊猫'园欣'与雌性大熊猫\"华妮\"将赴韩，开始为期15年的大熊猫国际科研合作。据悉，韩国已经为它们准备了3300平米的主题熊猫馆");
				info.setSendNumber(1065800711);
				info.setReceiveNumber(13655554545L);
				info.setStatus("普通");
				info.setType("上行短信");
				list.add(info);
				
				
				info.setArea("CM_GUANGDONG");
				info.setDate(new Date(System.currentTimeMillis()));
				info.setMesg("将导航条内放置品牌标志的地方替换为 元素即可展示自己的品牌图标。由于已经被设置了内补（padding）和高度（height），你需要根据自己的情况添加一些 CSS 代码从而覆盖默认设置");
				info.setSendNumber(1065800711);
				info.setReceiveNumber(13655554545L);
				info.setStatus("普通");
				info.setType("上行短信");
				list.add(info);
				
				info = new SmsInfo();
				info.setArea("CM_GUANGDONG");
				info.setDate(new Date(System.currentTimeMillis()));
				info.setMesg("将导航条内放置品牌标志的地方替换为 元素即可展示自己的品牌图标");
				info.setSendNumber(1065800711);
				info.setReceiveNumber(13655554545L);
				info.setStatus("普通");
				info.setType("上行短信");
				list.add(info);
			}
			
			
			return list;
			
		}
		
		
		
	}
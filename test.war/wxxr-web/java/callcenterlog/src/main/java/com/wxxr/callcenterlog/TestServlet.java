package com.wxxr.callcenterlog;

import java.io.IOException;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.googlecode.jsonrpc4j.JsonRpcServer;

/**
 * Servlet implementation class TestServlet
 */
public class TestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private JsonRpcServer jsonRpcServer;

	private JsonRpcServer jsonRpcServerAnnotatedParam;

    private JsonRpcServer jsonRpcServerAnnotatedMethod;
    /**
     * Default constructor. 
     */
    public TestServlet() {
    	System.out.println("==================TestServlet===========================");
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("==================doGet===========================");
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("==================doPost===========================");
		Map parameter = request.getParameterMap();
		Set keys = parameter.keySet();
		Iterator it = keys.iterator();
		while(it.hasNext()){
			String key = (String) it.next();
			System.out.println("key: " + key + " value: " + request.getParameter(key));
		}
//		response.sendRedirect("/test.war/wxxr-web/list.html");
//		response.setStatus(HttpServletResponse.SC_SEE_OTHER);
//		response.setHeader("Location", "/test.war/wxxr-web/list.html");
		jsonRpcServer.handle(request, response);
	}
	
	@Override
	public void init() throws ServletException {
		super.init();
		jsonRpcServer = new JsonRpcServer( new Service(), ServiceInterface.class);
		jsonRpcServerAnnotatedParam = new JsonRpcServer( new Service(), ServiceInterfaceWithParamNameAnnotation.class);
        jsonRpcServerAnnotatedMethod = new JsonRpcServer( new Service(), ServiceInterfaceWithCustomMethodNameAnnotation.class);
	}

}

/*
 * $Id$
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package com.mycompany.mysystem.example;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.StrutsTestCase;

public class HelloWorldTest extends StrutsTestCase {

	public void testHelloWorld() throws Exception {
		HelloWorld hello_world = new HelloWorld();
		String result = hello_world.execute();
		assertTrue("Expected a success result!",
				ActionSupport.SUCCESS.equals(result));
		assertTrue(
				"Expected the default message!",
				hello_world.getText(HelloWorld.MESSAGE).equals(
						hello_world.getMessage()));
	}
}

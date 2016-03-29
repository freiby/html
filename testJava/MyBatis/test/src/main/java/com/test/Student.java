package com.test;

/**
 * @author gacl 定义student表所对应的实体类
 * 		   CREATE TABLE student( s_id INT PRIMARY KEY
 *         AUTO_INCREMENT, s_name VARCHAR(20), class_id INT ); 
 *         INSERT INTO
 *         student(s_name, class_id) VALUES('student_A', 1); INSERT INTO
 *         student(s_name, class_id) VALUES('student_B', 1); INSERT INTO
 *         student(s_name, class_id) VALUES('student_C', 1); INSERT INTO
 *         student(s_name, class_id) VALUES('student_D', 2); INSERT INTO
 *         student(s_name, class_id) VALUES('student_E', 2); INSERT INTO
 *         student(s_name, class_id) VALUES('student_F', 2);
 */
public class Student {

	// 定义属性，和student表中的字段对应
	private int id; // id===>s_id
	private String name; // name===>s_name

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + "]";
	}
}
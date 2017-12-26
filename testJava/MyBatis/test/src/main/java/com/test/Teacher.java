package com.test;

/**
 * @author gacl 定义teacher表对应的实体类
 * 
 *         CREATE TABLE teacher( t_id INT PRIMARY KEY AUTO_INCREMENT, t_name
 *         VARCHAR(20) ); CREATE TABLE class( c_id INT PRIMARY KEY
 *         AUTO_INCREMENT, c_name VARCHAR(20), teacher_id INT ); ALTER TABLE
 *         class ADD CONSTRAINT fk_teacher_id FOREIGN KEY (teacher_id)
 *         REFERENCES teacher(t_id);
 * 
 *         INSERT INTO teacher(t_name) VALUES('teacher1'); INSERT INTO
 *         teacher(t_name) VALUES('teacher2');
 * 
 *         INSERT INTO class(c_name, teacher_id) VALUES('class_a', 1); INSERT
 *         INTO class(c_name, teacher_id) VALUES('class_b', 2);
 */
public class Teacher {

	// 定义实体类的属性，与teacher表中的字段对应
	private int id; // id===>t_id
	private String name; // name===>t_name

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
		return "Teacher [id=" + id + ", name=" + name + "]";
	}
}
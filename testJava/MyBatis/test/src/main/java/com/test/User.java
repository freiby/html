package com.test;

import java.io.Serializable;

/**
 * @author gacl
 * users表所对应的实体类
 * 
 * create database mybatis;
   use mybatis;
   CREATE TABLE users(id INT PRIMARY KEY AUTO_INCREMENT, NAME VARCHAR(20), age INT);
   INSERT INTO users(NAME, age) VALUES('孤傲苍狼', 27);
   INSERT INTO users(NAME, age) VALUES('白虎神皇', 27);
 */
public class User implements Serializable{

    //实体类的属性和表的字段名称一一对应
    private int id;
    private String name;
    private int age;

    public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int i, String string, int j) {
    	this.id = i;
    	this.name = string;
    	this.age = j;
	}

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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", name=" + name + ", age=" + age + " hascode= " + hashCode() + "]";
    }
}
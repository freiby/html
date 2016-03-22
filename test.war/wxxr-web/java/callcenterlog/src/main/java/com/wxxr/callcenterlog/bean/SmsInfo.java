package com.wxxr.callcenterlog.bean;

import java.sql.Date;


public class SmsInfo {
	private String mesg;
	private int sendNumber;
	private long receiveNumber;
	private Date date;
	private String status;
	private String type;
	private String area;
	public String getMesg() {
		return mesg;
	}
	public void setMesg(String mesg) {
		this.mesg = mesg;
	}
	public int getSendNumber() {
		return sendNumber;
	}
	public void setSendNumber(int sendNumber) {
		this.sendNumber = sendNumber;
	}
	public long getReceiveNumber() {
		return receiveNumber;
	}
	public void setReceiveNumber(long receiveNumber) {
		this.receiveNumber = receiveNumber;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	
	
	
	
}

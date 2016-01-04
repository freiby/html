package test;

import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class WriteReadLock {
	private static ReadWriteLock lock = new ReentrantReadWriteLock();
	public static class Thread1 extends Thread{
		@Override
		public void run() {
			lock.readLock().lock();
			System.out.println("Thread1");
		}
	}
	
	public static class Thread2 extends Thread{
		@Override
		public void run() {
			lock.readLock().lock();
			try {
				sleep(5000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println("Thread2");
		}
	}
	
	public static class Thread3 extends Thread{
		@Override
		public void run() {
			lock.readLock().lock();
			System.out.println("Thread3");
		}
	}
	
	public static void main(String[] args) throws InterruptedException {
		Thread1 t1 = new Thread1();
		Thread2 t2 = new Thread2();
		Thread3 t3 = new Thread3();
//		t1.setDaemon(true);
//		t2.setDaemon(true);
//		t3.setDaemon(true);
		
		
		t2.start();
//		t2.join();
		t1.start();
		t3.start();
		
//		t1.join();
//		t2.join();
//		t3.join();
	}

}

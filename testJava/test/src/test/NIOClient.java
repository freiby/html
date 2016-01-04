package test;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.SocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.SocketChannel;
import java.util.Iterator;
import java.util.Scanner;

/**
 * NIO客户端
 * 
 * @author 小路
 */
public class NIOClient {
	// 通道管理器
	private Selector selector;

	/**
	 * 获得一个Socket通道，并对该通道做一些初始化的工作
	 * 
	 * @param ip
	 *            连接的服务器的ip
	 * @param port
	 *            连接的服务器的端口号
	 * @throws IOException
	 */
	public void initClient(String ip, int port) throws IOException {
		// 获得一个Socket通道
		SocketChannel channel = SocketChannel.open();
		// 设置通道为非阻塞
		channel.configureBlocking(false);
		// 获得一个通道管理器
		this.selector = Selector.open();

		// 客户端连接服务器,其实方法执行并没有实现连接，需要在listen（）方法中调
		// 用channel.finishConnect();才能完成连接
		channel.connect(new InetSocketAddress(ip, port));
		// 将通道管理器和该通道绑定，并为该通道注册SelectionKey.OP_CONNECT事件。
		channel.register(selector, SelectionKey.OP_CONNECT);
	}

	/**
	 * 采用轮询的方式监听selector上是否有需要处理的事件，如果有，则进行处理
	 * 
	 * @throws IOException
	 */
	@SuppressWarnings("unchecked")
	public void listen() throws IOException {
		// 轮询访问selector
		while (true) {
			selector.select();
			// 获得selector中选中的项的迭代器
			Iterator ite = this.selector.selectedKeys().iterator();
			while (ite.hasNext()) {
				SelectionKey key = (SelectionKey) ite.next();
				// 删除已选的key,以防重复处理
				ite.remove();
				// 连接事件发生
				if (key.isConnectable()) {
					SocketChannel channel = (SocketChannel) key.channel();
					// 如果正在连接，则完成连接
					if (channel.isConnectionPending()) {
						channel.finishConnect();

					}
					// 设置成非阻塞
					channel.configureBlocking(false);

					// 在这里可以给服务端发送信息哦
					channel.write(ByteBuffer.wrap(new String("你好，为了接受俩你姐")
							.getBytes("utf-8")));
					// 在和服务端连接成功之后，为了可以接收到服务端的信息，需要给通道设置读的权限。
					channel.register(this.selector, SelectionKey.OP_READ);

					// 获得了可读的事件
				} else if (key.isReadable()) {
					try{
						read(key);
					}catch(IOException E){
						E.printStackTrace();
					}
					
				}

			}

		}
	}

	/**
	 * 处理读取服务端发来的信息 的事件
	 * 
	 * @param key
	 * @throws IOException
	 */
	public void read(SelectionKey key) throws IOException {
		// 服务器可读取消息:得到事件发生的Socket通道
		SocketChannel channel = (SocketChannel) key.channel();
		// 创建读取的缓冲区
		ByteBuffer buffer = ByteBuffer.allocate(1024);
		long bytesRead = channel.read(buffer);
//		if(bytesRead == -1){
//			channel.close();
//		}
		byte[] data = buffer.array();
		String msg = new String(data, "UTF-8").trim();
		System.out.println("客户端收到信息：" + msg);
		ByteBuffer outBuffer = ByteBuffer.wrap(msg.getBytes("utf-8"));
//		channel.write(outBuffer);// 将消息回送给客户端
	}

	/**
	 * 启动客户端测试
	 * 
	 * @throws IOException
	 */
	public static void main(String[] args) throws IOException {
		NIOClient client = new NIOClient();
		client.initClient("localhost", 8888);
		client.listen();
		// Socket client = new Socket();
		// SocketAddress address = new InetSocketAddress("localhost",8888);
		// client.connect(address);
		// OutputStream os = client.getOutputStream();
		// InputStream inStram=client.getInputStream();
		// PrintWriter sbis = new PrintWriter(os);
		// sbis.println("和服务端的read方法一样");
		// sbis.flush();
		// client.shutdownOutput();// 输出结束
		//
		// // 输入
		// Scanner in=new Scanner(inStram);
		// StringBuilder sb=new StringBuilder();
		// while(in.hasNextLine()){
		// String line=in.nextLine();
		// sb.append(line);
		// }
		// String response=sb.toString();
		// System.out.println("response="+response);

	}

}

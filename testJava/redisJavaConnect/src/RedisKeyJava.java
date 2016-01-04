
import java.util.Iterator;
import java.util.Set;

import redis.clients.jedis.Jedis;
public class RedisKeyJava {
   public static void main(String[] args) {
      //连接本地的 Redis 服务
      Jedis jedis = new Jedis("localhost");
      System.out.println("Connection to server sucessfully");
      
     // 获取数据并输出
     Set<String> sets = jedis.keys("*");
     Iterator<String> it = sets.iterator();
     while(it.hasNext()){
    	 System.out.println("List of stored keys:: "+it.next());
     }
   }
}
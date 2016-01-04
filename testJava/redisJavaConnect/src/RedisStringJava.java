import java.util.HashMap;
import java.util.List;
import java.util.Map;

import redis.clients.jedis.Jedis;

public class RedisStringJava {
	public static void main(String[] args) {
		// 连接本地的 Redis 服务
		Jedis jedis = new Jedis("localhost");
		// jedis.auth("foobared");
		System.out.println("Connection to server sucessfully");
		// 设置 redis 字符串数据
		jedis.set("w3ckey", "Redis tutorial");
		// 获取存储的数据并输出
		System.out.println("Stored string in redis:: " + jedis.get("w3ckey"));
		Map<String, String> map = new HashMap<String, String>();
		map.put("name", "zhangsan");
		jedis.hmset("user:2", map);
		System.out.println("Stored string in redis:: "
				+ jedis.hgetAll("user:2"));
		jedis.save();

		jedis.lpush("list", "a", "b");
		List<String> list = jedis.lrange("list", 0, -1);
		System.out.println("Stored string in redis:: "
				+ list);

	}
}
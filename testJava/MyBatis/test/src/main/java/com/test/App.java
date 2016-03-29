package com.test;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) throws IOException
    {
        System.out.println( "Hello World!" );
        
        String resource = "com/test/mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        
        
        SqlSession session = sqlSessionFactory.openSession();
        try {
          Blob blog = session.selectOne("org.mybatis.example.BlogMapper.selectBlog", Blob.class);
        } finally {
          session.close();
        }
    }
}

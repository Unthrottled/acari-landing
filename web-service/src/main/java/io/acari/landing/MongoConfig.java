package io.acari.landing;

import com.mongodb.reactivestreams.client.MongoClient;
import com.mongodb.reactivestreams.client.MongoClients;
import com.mongodb.reactivestreams.client.gridfs.GridFSBucket;
import com.mongodb.reactivestreams.client.gridfs.GridFSBuckets;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.config.AbstractReactiveMongoConfiguration;

@Configuration
public class MongoConfig extends AbstractReactiveMongoConfiguration {
    private static final Logger LOGGER = LoggerFactory.getLogger(MongoConfig.class);
    private final Environment environment;

    @Autowired
    public MongoConfig(Environment environment) {
        this.environment = environment;
    }


    @Bean
    @Override
    public MongoClient reactiveMongoClient() {
        String property = environment.getProperty("acari.mongo.connectionString", "localhost:27017");
        LOGGER.info(property);
        return MongoClients.create(property);
    }

    @Override
    protected String getDatabaseName() {
        return "landing";
    }

    @Bean
    public GridFSBucket gridFsTemplate(MongoClient reactiveMongoClient) throws Exception {
        return GridFSBuckets.create(reactiveMongoClient.getDatabase(environment.getProperty("acari.mongo.landingDatabase", "landing")));
    }
}

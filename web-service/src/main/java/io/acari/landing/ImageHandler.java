package io.acari.landing;

import com.mongodb.reactivestreams.client.gridfs.GridFSBucket;
import com.mongodb.reactivestreams.client.gridfs.helpers.AsyncStreamHelper;
import org.bson.types.ObjectId;
import org.reactivestreams.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import reactor.core.publisher.Mono;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class ImageHandler {

    private final GridFSBucket gridFSBucket;

    @Autowired
    public ImageHandler(GridFSBucket gridFSBucket) {
        this.gridFSBucket = gridFSBucket;
    }

    public Publisher<ObjectId> saveImage(File file) {
        try {
            return gridFSBucket.uploadFromStream(file.getName(), AsyncStreamHelper.toAsyncInputStream(new FileInputStream(file)));
        } catch (FileNotFoundException e) {
            return Mono.error(e);
        }
    }
}

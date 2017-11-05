package io.acari.landing;

import com.mongodb.reactivestreams.client.gridfs.GridFSBucket;
import com.mongodb.reactivestreams.client.gridfs.helpers.AsyncStreamHelper;
import org.bson.types.ObjectId;
import org.reactivestreams.Publisher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.codec.multipart.Part;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

@Component
public class ImageHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(ImageHandler.class);
    private final GridFSBucket gridFSBucket;

    @Autowired
    public ImageHandler(GridFSBucket gridFSBucket) {
        this.gridFSBucket = gridFSBucket;
    }

    public Flux<ObjectId> saveImage(Flux<Part> partFlux) {
        return partFlux.flatMap(part -> {
            String name = part.name();
            return part.content()
                .map(DataBuffer::asInputStream)
                .flatMap(inputStream -> gridFSBucket.uploadFromStream(name, AsyncStreamHelper.toAsyncInputStream(inputStream)));
        });
    }
}

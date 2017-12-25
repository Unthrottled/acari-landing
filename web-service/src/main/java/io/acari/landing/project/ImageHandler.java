package io.acari.landing.project;

import com.mongodb.reactivestreams.client.gridfs.GridFSBucket;
import com.mongodb.reactivestreams.client.gridfs.GridFSDownloadStream;
import com.mongodb.reactivestreams.client.gridfs.helpers.AsyncStreamHelper;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DefaultDataBufferFactory;
import org.springframework.http.codec.multipart.Part;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.Objects;

@Component
public class ImageHandler {
  private static final Logger LOGGER = LoggerFactory.getLogger(ImageHandler.class);
  private final GridFSBucket gridFSBucket;

  @Autowired
  public ImageHandler(GridFSBucket gridFSBucket) {
    this.gridFSBucket = gridFSBucket;
  }

  public Mono<String> saveImage(Flux<Part> multipartFile) {
    return null;
  }

  public Flux<byte[]> fetchImage(String imageId) {
    return null;
  }

  public Mono<byte[]> fetchImageBinary(String imageId) {
    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    return Mono.from(gridFSBucket.downloadToStream(new ObjectId(imageId),
        AsyncStreamHelper.toAsyncOutputStream(outputStream)))
        .map(l -> outputStream.toByteArray());
  }

  public Mono<Boolean> removeImage(String imageId) {
    return Mono.from(gridFSBucket.delete(new ObjectId(imageId)))
        .map(Objects::nonNull);
  }
}

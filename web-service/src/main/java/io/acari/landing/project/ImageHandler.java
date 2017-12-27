package io.acari.landing.project;

import com.mongodb.reactivestreams.client.gridfs.GridFSBucket;
import io.acari.landing.flux.DownloadStreamToFluxFactory;
import io.acari.landing.flux.FluxAsyncStreamConverter;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.codec.multipart.Part;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Component
public class ImageHandler {
  private static final Logger LOGGER = LoggerFactory.getLogger(ImageHandler.class);
  private final GridFSBucket gridFSBucket;
  private final DownloadStreamToFluxFactory downloadStreamToFluxFactory = new DownloadStreamToFluxFactory();

  @Autowired
  public ImageHandler(GridFSBucket gridFSBucket) {
    this.gridFSBucket = gridFSBucket;
  }

  public Flux<String> saveImage(Flux<Part> multipartFile) {
    return multipartFile
            .flatMap(part -> Mono.from(gridFSBucket.uploadFromStream(part.name(),
                    FluxAsyncStreamConverter.convert(part.content()))))
            .map(ObjectId::toHexString);
  }

  public Flux<byte[]> fetchImage(String imageId) {
    return downloadStreamToFluxFactory
            .convert(gridFSBucket.openDownloadStream(getId(imageId)));
  }

  public Mono<Boolean> removeImage(String imageId) {
    return Mono.from(gridFSBucket.delete(getId(imageId)))
            .map(Objects::nonNull)
            .onErrorReturn(false);
  }

  private ObjectId getId(String imageId) {
    return new ObjectId(imageId);
  }
}

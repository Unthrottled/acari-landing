package io.acari.landing;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.Part;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Objects;

@RestController
public class LandingRestController {
  private static final Logger LOGGER = LoggerFactory.getLogger(LandingRestController.class);

  private final ImageHandler imageHandler;

  @Autowired
  public LandingRestController(ImageHandler imageHandler) {
    this.imageHandler = imageHandler;
  }


  @GetMapping("/")
  public Mono<String> fetchBase() {
    return Mono.just("Hello Werld!\n");
  }

  @PostMapping(value = "save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  Mono<Boolean> createEntry(@RequestBody Flux<Part> partFlux) {
    return imageHandler.saveImage(partFlux)
        .all(Objects::nonNull);
  }
}

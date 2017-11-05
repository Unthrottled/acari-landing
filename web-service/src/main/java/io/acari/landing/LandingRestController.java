package io.acari.landing;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.FormFieldPart;
import org.springframework.http.codec.multipart.Part;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Objects;

@RestController
@RequestMapping("/api")
public class LandingRestController {
  private static final Logger LOGGER = LoggerFactory.getLogger(LandingRestController.class);

  private final ImageHandler imageHandler;

  @Autowired
  public LandingRestController(ImageHandler imageHandler) {
    this.imageHandler = imageHandler;
  }


  @GetMapping("")
  public Mono<String> fetchBase() {
    return Mono.just("Hello Werld!\n");
  }

  @PostMapping(value = "save", consumes = {
      MediaType.MULTIPART_FORM_DATA_VALUE,
      MediaType.IMAGE_PNG_VALUE,
      MediaType.IMAGE_JPEG_VALUE,
      MediaType.IMAGE_GIF_VALUE,
      MediaType.APPLICATION_FORM_URLENCODED_VALUE,

  })
  Mono<Boolean> createEntry(@RequestPart MultipartFile file) {
    return Mono.just(true);
//    return imageHandler.saveImage(partFlux)
//        .all(Objects::nonNull);
  }
}

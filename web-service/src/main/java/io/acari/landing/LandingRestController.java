package io.acari.landing;


import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import reactor.core.publisher.Mono;

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
  Mono<String> createEntry(@RequestPart MultipartFile file) {
    return imageHandler.saveImage(file);
  }
}

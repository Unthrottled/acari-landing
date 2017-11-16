package io.acari.landing;


import io.acari.landing.model.BaseProject;
import io.acari.landing.model.ResponseProject;
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
  private final ProjectCreationHandler projectCreationHandler;

  @Autowired
  public LandingRestController(ImageHandler imageHandler, ProjectCreationHandler projectCreationHandler) {
    this.imageHandler = imageHandler;
    this.projectCreationHandler = projectCreationHandler;
  }


  @GetMapping("")
  public Mono<String> fetchBase() {
    return Mono.just("Hello Werld!\n");
  }

  @PostMapping(value = "image/save", consumes = {
      MediaType.MULTIPART_FORM_DATA_VALUE,
      MediaType.IMAGE_PNG_VALUE,
      MediaType.IMAGE_JPEG_VALUE,
      MediaType.IMAGE_GIF_VALUE,
      MediaType.APPLICATION_FORM_URLENCODED_VALUE,

  })
  public Mono<String> saveImage(@RequestPart MultipartFile reach) {
    return imageHandler.saveImage(reach);
  }

    @PostMapping(value = "project/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<ResponseProject> saveProject(@RequestBody BaseProject newProject){
      return projectCreationHandler.create(Mono.just(newProject));
    }
}

package io.acari.landing;


import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.Part;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class LandingRestController {

    @GetMapping("/")
    public Mono<String> fetchBase() {
        return Mono.just( "Hello Werld!\n");
    }

    @PostMapping(value = "save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    Mono<Boolean> createEntry(@RequestBody Flux<Part> partFlux){
        partFlux.subscribe(part -> {
            part.content().subscribe(dataBuffer -> {
                part.name();
            });
        });
        return Mono.just(true);
    }
}

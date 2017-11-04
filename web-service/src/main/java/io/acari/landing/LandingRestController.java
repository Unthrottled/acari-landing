package io.acari.landing;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class LandingRestController {

    @GetMapping("/")
    public Mono<String> fetchBase() {
        return Mono.fromSupplier(() -> "Hello Werld!\n");
    }
}

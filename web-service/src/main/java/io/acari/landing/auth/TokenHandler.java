package io.acari.landing.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.nio.file.AccessDeniedException;
import java.util.ArrayList;

@Component
public class TokenHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(TokenHandler.class);
    private final ReactiveAuthenticationManager authenticationManager;

    public TokenHandler(ReactiveAuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    public Mono<String> handleUser(Mono<ApplicationUser> maybeAlex) {

        return maybeAlex.flatMap(probablyAlex -> authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        probablyAlex.getUsername(),
                        probablyAlex.getPassword(),
                        new ArrayList<>())))
                .filter(Authentication::isAuthenticated)
                //Is Alex!!
                .map(auth -> AuthConfigs.Configs.USERNAME.getValue())
                .map(TokenGenerator::generateToken)
                .switchIfEmpty(Mono.error(new AccessDeniedException("YOU SHALL NOT PASS!!")));
    }
}

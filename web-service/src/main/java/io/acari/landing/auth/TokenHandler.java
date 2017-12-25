package io.acari.landing.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.nio.file.AccessDeniedException;
import java.util.ArrayList;

@Component
public class TokenHandler {

  private final AuthenticationManager authenticationManager;

  public TokenHandler(AuthenticationManager authenticationManager) {
    this.authenticationManager = authenticationManager;
  }

  public Mono<String> handleUser(Mono<ApplicationUser> maybeAlex) {
    return maybeAlex.map(alex-> authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            alex.getUsername(),
            alex.getPassword(),
            new ArrayList<>())))
        .filter(Authentication::isAuthenticated)
        //Is Alex!!
        .flatMap(auth -> maybeAlex.map(ApplicationUser::getUsername))
        .map(TokenGenerator::generateToken)
        .switchIfEmpty(Mono.error(new AccessDeniedException("YOU SHALL NOT PASS!!")));
  }
}

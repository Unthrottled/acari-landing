package io.acari.landing.filter;

import com.google.common.base.Preconditions;
import io.acari.landing.auth.AuthConfigs;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;
import reactor.util.annotation.NonNull;

import java.nio.file.AccessDeniedException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static io.acari.landing.auth.SecurityUtils.HEADER_KEY;
import static io.acari.landing.auth.SecurityUtils.TOKEN_PREFIX;

@Component
public class JWTForwarder implements WebFilter {

    private final ReactiveAuthenticationManager authenticationManager;

    @Autowired
    public JWTForwarder(ReactiveAuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    @NonNull
    public Mono<Void> filter(@NonNull ServerWebExchange exchange, @NonNull WebFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        ServerHttpResponse response = exchange.getResponse();
        List<String> authHeaders = request.getHeaders().get(HEADER_KEY);

        if (authHeaders == null || authHeaders.stream().noneMatch(s -> s.startsWith(TOKEN_PREFIX))) {
            //reject
            response.setStatusCode(HttpStatus.UNAUTHORIZED);
            return response.setComplete();
        }

        return getAuthentication(authHeaders)
                .flatMap(authenticationManager::authenticate)
                .filter(Authentication::isAuthenticated)
                .switchIfEmpty(Mono.error(new AccessDeniedException("YOU SHALL NOT PASS!!")))
                .flatMap(goodToken -> chain.filter(exchange));

    }

    private Mono<UsernamePasswordAuthenticationToken> getAuthentication(List<String> request) {
        return Mono.just(request)
                .filter(Objects::nonNull)
                .filter(headers -> !headers.isEmpty())
                .map(headers -> headers.get(0))
                .filter(Objects::nonNull)
                .map(token ->
                        Jwts.parser()
                                .setSigningKey(AuthConfigs.Configs.SECRET.getValue().getBytes())
                                .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                                .getBody()
                                .getSubject()
                ).filter(Objects::nonNull)
                .map(user -> new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>()));

    }
}

package io.acari.landing.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpRequestDecorator;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Component
public class RootForwarder implements WebFilter {
  private static final Logger LOGGER = LoggerFactory.getLogger(RootForwarder.class);
  @Override
  public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
    ServerHttpRequest request = exchange.getRequest();
    if (request.getURI().getPath().equals("/")) {
      return chain.filter(exchange.mutate().request(request.mutate().path("/index.html").build()).build());
    }
    return chain.filter(exchange);
  }
}

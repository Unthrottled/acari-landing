package io.acari.landing.filter;

import io.acari.landing.auth.AuthConfigs;
import io.jsonwebtoken.Jwts;
import org.springframework.http.server.reactive.ServerHttpRequest;

import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.util.ArrayList;

import static io.acari.landing.auth.SecurityUtils.HEADER_STRING;
import static io.acari.landing.auth.SecurityUtils.TOKEN_PREFIX;

@Component
public class JWTForwarder implements WebFilter {
  @Override
  public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
    ServerHttpRequest request = exchange.getRequest();
    if (request.getURI().getPath().equals("/")) {
      return chain.filter(exchange.mutate().request(request.mutate().path("/index.html").build()).build());
    }

    return chain.filter(exchange);
  }

//  protected void doFilterInternal(HttpServletRequest req,
//                                  HttpServletResponse res,
//                                  FilterChain chain) throws IOException, ServletException {
//    String header = req.getHeader(HEADER_STRING);
//
//    if (header == null || !header.startsWith(TOKEN_PREFIX)) {
//      res.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Access Denied");
//      return;
//    }
//
//    UsernamePasswordAuthenticationToken authentication = getAuthentication(req);
//
//    SecurityContextHolder.getContext().setAuthentication(authentication);
//    chain.doFilter(req, res);
//  }
//
//  private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
//    String token = request.getHeader(HEADER_STRING);
//    if (token != null) {
//      // parse the token.
//      String user = Jwts.parser()
//              .setSigningKey(AuthConfigs.Configs.SECRET.getValue().getBytes())
//              .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
//              .getBody()
//              .getSubject();
//
//      if (user != null) {
//        return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
//      }
//      return null;
//    }
//    return null;
//  }
}

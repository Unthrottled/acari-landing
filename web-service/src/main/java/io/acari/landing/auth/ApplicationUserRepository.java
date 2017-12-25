package io.acari.landing.auth;


import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.Optional;

@Service
public class ApplicationUserRepository implements ReactiveUserDetailsService {
    ApplicationUser afindByUsername(String username) {
        return null;
    }


    @Override
    public Mono<UserDetails> findByUsername(String username) {
        return Mono.just(username)
                .filter(u -> AuthConfigs.Configs.USERNAME.getValue().equals(u))
                .map(u -> User.builder()
                        .username(AuthConfigs.Configs.USERNAME.getValue())
                        .password(AuthConfigs.Configs.PASSWORD.getValue()).build());
    }
}

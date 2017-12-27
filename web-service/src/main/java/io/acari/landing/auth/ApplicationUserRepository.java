package io.acari.landing.auth;


import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class ApplicationUserRepository implements ReactiveUserDetailsService {

    @Override
    public Mono<UserDetails> findByUsername(String username) {
        return Mono.just(username)
                .filter(u -> AuthConfigs.Configs.USERNAME.getValue().equals(u))
                .map(u -> User.builder()
                        .roles("ADMIN")
                        .username(AuthConfigs.Configs.USERNAME.getValue())
                        .password(AuthConfigs.Configs.PASSWORD.getValue()).build());
    }
}

package io.acari.landing.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UserDetailsRepositoryReactiveAuthenticationManager;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;


@Configuration
public class SecurityConfiguration implements WebFluxConfigurer {


    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");

    }

    @Bean
    public ReactiveAuthenticationManager authenticationManager(ReactiveUserDetailsService reactiveUserDetailsService) {
        return new UserDetailsRepositoryReactiveAuthenticationManager(reactiveUserDetailsService);
    }
}

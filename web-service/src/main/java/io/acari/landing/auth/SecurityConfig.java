package io.acari.landing.auth;


//@EnableWebSecurity
public class SecurityConfig {

//  private UserDetailsService userDetailsService;
//
//
//  public SecurityConfig(UserDetailsServiceImpl userDetailsService) {
//    this.userDetailsService = userDetailsService;
//  }
//
//  @Override
//  protected void configure(HttpSecurity http) throws Exception {
//    super.configure(http);
//    http.headers().defaultsDisabled().cacheControl();
//    http.cors().and().csrf().disable().authorizeRequests()
//        .anyRequest().authenticated()
//        .and()
//        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//  }
//
//  @Override
//  public void configure(WebSecurity webSecurity) {
//    webSecurity.ignoring().antMatchers(HttpMethod.GET, "/api/projects")
//        .antMatchers(HttpMethod.POST, "/api/token")
//        .antMatchers(HttpMethod.GET, "/*")
//        .antMatchers(HttpMethod.GET, "/api/image/get/*");
//  }
//
//  @Bean
//  public AuthenticationManager authenticationManagerBean() throws Exception {
//    return authenticationManager();
//  }
//
//  @Override
//  public void configure(AuthenticationManagerBuilder auth) throws Exception {
//    auth.userDetailsService(userDetailsService);
//  }
}

//package com.jobportal;
//
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//import com.jobportal.jwt.JwtAuthenticationEntryPoint;
//import com.jobportal.jwt.JwtAuthenticationFilter;
//
//@Configuration
//public class SecurityConfig {
//	
//	@Autowired
//	private JwtAuthenticationEntryPoint point;
//	@Autowired
//	private JwtAuthenticationFilter filter;
//
//	
//	
//
//
//	
//	
//	@Bean
//	 SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception 
//	{
//
//		
//		http.csrf(csrf->csrf.disable())
//
//		.authorizeRequests()
//		.requestMatchers("/auth/login","/users/register","/users/verifyOtp/**","/users/sendOtp/**").permitAll()
//		.anyRequest()
//		.authenticated()
//		.and()
//		.exceptionHandling(ex->ex.authenticationEntryPoint(point))
//		.sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//		http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//		return http.build();
//	}
//}



package com.jobportal;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.http.HttpMethod;

import com.jobportal.jwt.JwtAuthenticationEntryPoint;
import com.jobportal.jwt.JwtAuthenticationFilter;

import java.util.List;

@Configuration
public class SecurityConfig {
    private final JwtAuthenticationEntryPoint authEntry;
    private final JwtAuthenticationFilter jwtFilter;

    public SecurityConfig(JwtAuthenticationEntryPoint authEntry,
                          JwtAuthenticationFilter jwtFilter) {
        this.authEntry = authEntry;
        this.jwtFilter = jwtFilter;
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
      CorsConfiguration config = new CorsConfiguration().applyPermitDefaultValues();
      config.setAllowedOrigins(List.of("http://localhost:5173"));
      config.setAllowedMethods(List.of("GET","POST","PUT","DELETE","OPTIONS"));
      config.setAllowedHeaders(List.of("*"));
      config.setAllowCredentials(true);
      UrlBasedCorsConfigurationSource src = new UrlBasedCorsConfigurationSource();
      src.registerCorsConfiguration("/**", config);
      return src;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
          .csrf(csrf -> csrf.disable())
          .cors(cors -> cors.configurationSource(corsConfigurationSource()))
          .authorizeHttpRequests(auth -> auth
            .requestMatchers("/auth/login","/users/register","/jobs/getall","/profiles/getAll","/users/verifyOtp/**","/users/sendOtp/**").permitAll()
            .requestMatchers(HttpMethod.OPTIONS).permitAll()
            .anyRequest().authenticated()
          )
          .exceptionHandling(ex -> ex.authenticationEntryPoint(authEntry))
          .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
          .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}


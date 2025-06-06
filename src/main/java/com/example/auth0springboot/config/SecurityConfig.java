package com.example.auth0springboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .authorizeHttpRequests(authz -> authz
                // Permitir acceso a recursos estáticos, páginas de error, raíz, login de Auth0 y API health
                .requestMatchers("/css/**", "/js/**", "/images/**", "/error", "/", "/oauth2/authorization/auth0", "/api/health").permitAll()
                // Proteger las rutas de la API
                .requestMatchers("/api/**").authenticated()
                // Todas las demás rutas requieren autenticación
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                // Página de login personalizada (opcional)
                .loginPage("/oauth2/authorization/auth0")
                // Página de éxito después del login - redirigir a React
                .defaultSuccessUrl("http://localhost:3000", true)
                // Página de fallo en el login
                .failureUrl("/login?error")
            )
            .logout(logout -> logout
                // URL para hacer logout
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                // Limpiar la autenticación
                .clearAuthentication(true)
                // Invalidar la sesión
                .invalidateHttpSession(true)
                // Eliminar cookies
                .deleteCookies("JSESSIONID")
                // Redirigir después del logout a React
                .logoutSuccessUrl("http://localhost:3000")
            );

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
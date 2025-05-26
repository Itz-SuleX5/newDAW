package com.example.auth0springboot.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.ResponseEntity;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @GetMapping("/user")
    public ResponseEntity<Map<String, Object>> getUser(@AuthenticationPrincipal OAuth2User principal) {
        if (principal != null) {
            Map<String, Object> userInfo = new HashMap<>();
            userInfo.put("name", principal.getAttribute("name"));
            userInfo.put("email", principal.getAttribute("email"));
            userInfo.put("picture", principal.getAttribute("picture"));
            userInfo.put("nickname", principal.getAttribute("nickname"));
            userInfo.put("locale", principal.getAttribute("locale"));
            userInfo.put("updated_at", principal.getAttribute("updated_at"));
            userInfo.put("sub", principal.getAttribute("sub"));
            return ResponseEntity.ok(userInfo);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @GetMapping("/dashboard/stats")
    public ResponseEntity<Map<String, Object>> getDashboardStats(@AuthenticationPrincipal OAuth2User principal) {
        if (principal != null) {
            Map<String, Object> stats = new HashMap<>();
            stats.put("totalBalance", 15750.50);
            stats.put("monthlyIncome", 4200.00);
            stats.put("monthlyExpenses", 2850.75);
            stats.put("savings", 1349.25);
            return ResponseEntity.ok(stats);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        Map<String, String> status = new HashMap<>();
        status.put("status", "OK");
        status.put("service", "Auth0 Spring Boot API");
        return ResponseEntity.ok(status);
    }
}
package com.jobportal.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtHelper {

    // ✅ Non-deprecated, secure key generation (for HS256)
    private final SecretKey key = Jwts.SIG.HS256.key().build();

    private final long jwtExpirationMs = 3600000;

    public String generateToken(UserDetails userDetails) {
    	Map<String,Object> claims=new HashMap<>();
    	CustomUserDetails customUser=(CustomUserDetails)userDetails;
    	claims.put("id", customUser.getId());
    	claims.put("name", customUser.getName());
    	claims.put("accountType", customUser.getAccountType());
    	claims.put("profileId", customUser.getProfileId());
    	
        return Jwts.builder()
        		.claims(claims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(key, Jwts.SIG.HS256)
                .compact();
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> resolver) {
        Claims claims = Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload();
        return resolver.apply(claims);
    }

    public boolean validateToken(String token, String expectedUsername) {
        return extractUsername(token).equals(expectedUsername) && !isTokenExpired(token);
    }

    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
}

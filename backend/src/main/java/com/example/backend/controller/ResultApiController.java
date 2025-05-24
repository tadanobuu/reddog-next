package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.domain.Result;
import com.example.backend.dto.ResultRequest;
import com.example.backend.service.ResultService;

/**
 * リザルト情報のAPIコントローラクラス
 * 
 * @author Tadanobuu
 */
@RestController
@RequestMapping("/results")
@CrossOrigin(
    origins = "*",
    methods = {
        RequestMethod.GET,
        RequestMethod.POST
    }
)
public class ResultApiController {

    @Autowired
    private ResultService resultService;

    // 固定トークン
    @Value("${app.token}") 
    private String expectedToken;

    @PostMapping("/{score}")
    public ResponseEntity<Result> submitScore(
        @PathVariable Integer score,
        @RequestHeader(value = "Authorization", required = false) String authorizationHeader
    ){
        // Bearer トークン検証
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        String token = authorizationHeader.substring(7);
        if (!expectedToken.equals(token)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        ResultRequest requestResult = new ResultRequest(score);

        resultService.insert(requestResult);
        Result result = resultService.getResult(requestResult);
        return ResponseEntity.ok(result);
    }

}

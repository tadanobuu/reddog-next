package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.domain.Rank;
import com.example.backend.service.ResultService;

/**
 * リザルト情報のAPIコントローラクラス
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

    @PostMapping("/{score}")
    public ResponseEntity<Rank> submitScore(@PathVariable Integer score){
        Rank rank = new Rank(1);

        resultService.insert();
        return ResponseEntity.ok(rank);
    }

}

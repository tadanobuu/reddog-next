package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.domain.Result;
import com.example.backend.dto.ResultRequest;
import com.example.backend.repository.ResultsRepository;

/**
 * ResultリソースのServiceクラス
 * 
 * @author Tadanobuu
 */
@Service
public class ResultService {

    @Autowired
    ResultsRepository resultsRepository;

    /**
     * リザルトを新規登録します
     * @param result リクエストされたリザルト
     */
    public void insert(ResultRequest result){
        resultsRepository.insert(result);
    }

    public Result getResult(ResultRequest result){
        return resultsRepository.getResult(result);
    }
}

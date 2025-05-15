package com.example.backend.dto;

import jakarta.validation.constraints.Min;

/**
 * ResultリソースのDTOクラス
 */
public class ResultRequest {
    @Min(value = 0)
    private Integer score;

    public ResultRequest(@Min(0) Integer score) {
        this.score = score;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "ResultRequest [score=" + score + "]";
    }

}

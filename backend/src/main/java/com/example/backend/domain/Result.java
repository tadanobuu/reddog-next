package com.example.backend.domain;

/**
 * リザルト情報のdomainクラス
 * 
 * @author Tadanobu Tokiwa
 */
public class Result {
    private Integer id;
    private Integer score;

    public Result(Integer id, Integer score) {
        this.id = id;
        this.score = score;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "Result [id=" + id + ", score=" + score + "]";
    }

}

package com.example.backend.domain;

/**
 * リザルト情報のdomainクラス
 * 
 * @author Tadanobuu
 */
public class Result {
    private Integer rank;
    private Integer total;

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "Result [rank=" + rank + ", total=" + total + "]";
    }

}

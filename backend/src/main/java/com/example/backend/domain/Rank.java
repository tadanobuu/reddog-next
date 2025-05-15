package com.example.backend.domain;

/**
 * Rank情報のdomainクラス
 * 
 * @author Tadanobuu
 */
public class Rank {

    private int rank;

    public Rank(int rank) {
        this.rank = rank;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    @Override
    public String toString() {
        return "Rank [rank=" + rank + "]";
    }

}

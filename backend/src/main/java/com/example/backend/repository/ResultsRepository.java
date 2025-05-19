package com.example.backend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.example.backend.dto.ResultRequest;

/**
 * resultsテーブルを操作するリポジトリ
 * 
 * @author Tadanobuu
 */
@Repository
public class ResultsRepository {

    @Autowired
    private NamedParameterJdbcTemplate template;

    /**
     * リザルトを新規追加します
     * @param resultRequest リクエストされたリザルト
     */
    public void insert(ResultRequest resultRequest){
        String sql = "INSERT INTO results (score) VALUES(:score)";
        SqlParameterSource param = new MapSqlParameterSource().addValue("score", resultRequest.getScore());
        template.update(sql, param);
    }
}

package com.example.backend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.example.backend.domain.Result;
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

    private static final RowMapper<Result> RESULT_ROW_MAPPER = (rs, i) -> {
        Result result = new Result();
        result.setRank(rs.getInt("rank"));
        result.setTotal(rs.getInt("total"));
        return result;
    };

    /**
     * リザルトを新規追加します
     * @param resultRequest リクエストされたリザルト
     */
    public void insert(ResultRequest resultRequest){
        String sql = "INSERT INTO results (score) VALUES(:score)";
        SqlParameterSource param = new MapSqlParameterSource().addValue("score", resultRequest.getScore());
        template.update(sql, param);
    }

    public Result getResult(ResultRequest resultRequest){
        String sql = """
                WITH ranked AS (
                    SELECT score, RANK() OVER (ORDER BY score DESC) AS rank
                    FROM results
                ),
                total_count AS (
                    SELECT COUNT(*) AS total FROM results
                )
                SELECT r.rank, t.total
                FROM ranked r, total_count t
                WHERE r.score = :new_score
                ORDER BY r.rank
                LIMIT 1;
                """;
        
        SqlParameterSource param = new MapSqlParameterSource().addValue("new_score", resultRequest.getScore());

        Result result = template.queryForObject(sql, param, RESULT_ROW_MAPPER);
        return result;
    }
}

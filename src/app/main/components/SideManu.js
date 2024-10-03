import { useSelector } from "react-redux"
import "./SideManu.css"

const SideManu = () => {

    const { maxPoint, gameCount, winCount, loseCount, resultHistory } = useSelector((store) => store.result)

    return (
        <div>
            <div className="results">
                <div>最高得点 : {maxPoint}pt</div>
                <div>ゲーム回数 : {gameCount}</div>
                <div className="counts">
                    <div>勝利回数 : {winCount}</div>
                    <div>敗北回数 : {loseCount}</div>
                    <div>引分回数 : {gameCount - winCount - loseCount}</div>
                    <div>勝率 : {gameCount ? Math.floor(winCount / (gameCount) * 10000) / 100 : "---"} %</div>
                </div>
            </div>
            <div className="resultHist">
                <table>
                    <thead>
                        <tr>
                            <th scope="col" className="gameCounts">ゲーム数</th>
                            <th scope="col">結果</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultHistory.map((result, index) => {
                            return(
                                <tr key={index}>
                                    <td>{result[0]}</td>
                                    <td>{result[1]}</td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SideManu
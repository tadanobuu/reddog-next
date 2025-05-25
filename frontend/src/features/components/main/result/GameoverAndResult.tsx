import { insertResults } from "@/lib/api/resultsapi";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

// ゲームオーバー、ゲームをトータルしたリザルトの表記
const GameoverAndResult = () => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const { maxPoint } = useAppSelector((store) => store.result)
    
    const [ connectResult, setConnectResult ] = useState<string | null>("ランキング機能に登録中...");
    const [ rankingText, setRankingText ] = useState<string | null>(null);

    useEffect(() => {
        const insertResult = async() => {
            try{
                const res = await insertResults(maxPoint)
                setConnectResult("スコアをランキングに登録しました")
                setRankingText("あなたのスコアは " + res.total + " 件中 " + res.rank + " 位です")
            }catch{
                setConnectResult("スコアの登録に失敗しました")
            }
        }
        insertResult();
    }, [maxPoint])

    return (
        <div className='flex flex-col items-center justify-conter mt-5'>
            <div>ゲームオーバー</div>
            <div>今回の最高スコア：{maxPoint}点</div>
            <div>{connectResult}</div>
            <div>{rankingText}</div>
        </div>
    )
}

export default GameoverAndResult

import { insertResults } from "@/lib/api/resultsapi";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

// ゲームオーバー、ゲームをトータルしたリザルトの表記
const GameoverAndResult = () => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const { maxPoint } = useAppSelector((store) => store.result)
    
    //const [ ranking, setRanking ] = useState<number | null>(null);
    //const [ total, setTotal ] = useState<number | null>(null);
    const [ connectResult, setConnectResult ] = useState<string | null>(null);

    useEffect(() => {
        const insertResult = async() => {
            try{
                await insertResults(maxPoint)
                setConnectResult("あなたのスコアをランキングに登録しました")
            }catch{
                setConnectResult("スコアの登録に失敗しました")
            }
        }
        insertResult();
    }, [maxPoint])

    return (
        <div className='flex flex-col items-center justify-conter mt-5'>
            <div>ゲームオーバー</div>
            {connectResult ?? <div>{connectResult}</div>}
        </div>
    )
}
//{ranking ?? total ?? <div>{ranking} 位 / 全体 {total} 件中</div>}
export default GameoverAndResult

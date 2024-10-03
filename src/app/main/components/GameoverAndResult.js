import "./GameoverAndResult.css"
import { useSelector } from 'react-redux'

// ゲームオーバー、ゲームをトータルしたリザルトの表記
const GameoverAndResult = () => {

    const { maxPoint , gameCount } = useSelector((store) => store.result);

    return (
        <>
            <div className='gameOver'>
                <div>ゲームオーバー</div>
            </div>
            <div className='m-auto text-center md:hidden'>
                <div className='point'>最高得点 : {maxPoint}pt</div>
                <div className='count'>ゲーム回数 : {gameCount}</div>
            </div>
        </>
    )
}

export default GameoverAndResult
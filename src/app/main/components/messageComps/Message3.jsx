import { useSelector } from 'react-redux';

// 勝敗結果を表示するテキスト
const Message3 = () => {

    const { isWin, odds, isPair } = useSelector((store) => store.game);
    const { isOpen } = useSelector((store) => store.buttons);

    let text = "";
    if(odds === 1){
        text = "引き分け"
    }else if(isWin){
        text = "勝ち"
    }else if(!isWin){
        text = "負け"
    }

    const getResultStyle = () => {
        if (isWin && odds === 12) return "animate-pulse bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white font-bold"
        if (isWin && odds === 6) return "animate-pulse bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold"
        if (isWin && odds !== 1) return "bg-red-400 text-black font-bold"
        return ""
    }

    return (
        <div className='message3'>
            {isOpen ? 
            <p className={`text-sm sm:text-base py-1 px-2 rounded ${getResultStyle()}`}>{text}</p> 
            : 
                text === "引き分け" && !isPair ?
                <p className={`text-sm sm:text-base py-1 px-2 rounded ${getResultStyle()}`}>引き分け</p>
                :
                <p className="invisible">This is invisible but still takes up space</p>
            }
        </div>
    )
}

export default Message3;
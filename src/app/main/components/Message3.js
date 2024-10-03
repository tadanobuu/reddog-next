import "./Message3.css"
import { useSelector } from 'react-redux';

// 勝敗結果を表示するテキスト
const Message3 = () => {

    const { isWin, odds, isPair } = useSelector((store) => store.game);
    const { isOpen } = useSelector((store) => store.buttons);

    let text = "";
    if(odds === 1){
        text = "引き分け"
    }else if(isWin === true){
        text = "勝ち"
    }else if(isWin === false){
        text = "負け"
    }

    let style = {'color' : '#0000FF'}
    let backgroundstyle = {}
    if(isOpen){
        backgroundstyle = {'background': '#FFFFFF'}
        if(isWin && odds === 12){
            // 12倍勝ち 背景虹色、テキスト黒色
            style = {'color' : '#000000'}
            backgroundstyle = {'background': 'linear-gradient(132deg, red,orange,yellow,green,aqua,blue,purple)'}
        }else if(isWin && odds === 6){
            // 6倍勝ち 背景金色
            style = {'color' : '#000000'}
            backgroundstyle = {'background': 'linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%)'}
        }else if(isWin && odds === 5){
            // 5倍勝ち 背景赤色、テキスト白色
            style = {'color' : '#FFFFFF'}
            backgroundstyle = {'background': '#FF0000'}
        }else if(isWin && odds !== 1){
            // 引き分け以外 テキスト赤色
            style = {'color' : '#FF0000'}
        }else{
            // 引き分け用 フォントサイズ変更
            style={'fontSize': '15px' , 'background': '#FFFFFF'}
        }
    }

    return (
        <div className='message3' style={backgroundstyle}>
            {isOpen ? 
            <p className='result' style={style}>{text}</p> 
            : 
                text === "引き分け" && !isPair ?
                <p className='result'style={{'fontSize': '15px' , 'background': '#FFFFFF'}}>引き分け</p>
                :
                <p></p>}
        </div>
    )
}

export default Message3;
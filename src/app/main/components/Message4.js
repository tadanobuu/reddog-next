import "./Message4.css"
import { useSelector } from 'react-redux';

// 勝利条件を表示するテキスト
const Message4 = () => {

    const { isPair, isConsecutive, card1, card2 } = useSelector((store) => store.game);

    const pictures = (cardNum) => {
        // 型変更 数値型 -> 文字
        // 値変更 11以上 -> カードのアルファベット表記
        if(cardNum === 11){
            return "J";
        }else if(cardNum === 12){
            return "Q";
        }else if(cardNum === 13){
            return "K";
        }else if(cardNum === 14){
            return "A";
        }else{
            return String(cardNum)
        }
    }

    let card1Text = pictures(card1);

    let text = "";
    // 「{勝利条件} が出たら勝ち」を作成
    if(isPair){
        text = card1Text + " が出たら勝ち！"
    }else if(!isConsecutive && card1 < card2){
        const loop = card2 - card1;
        let winCards = "";
        for(let i = 1; i < loop; i++){
            let cardNum = card1 + i
            winCards = winCards + pictures(cardNum) + ","
        }
        text = winCards.slice(0, -1) + " が出たら勝ち！"
    }else if(!isConsecutive && card1 > card2){
        const loop = card1 - card2;
        let winCards = "";
        for(let i = 1; i < loop; i++){
            let cardNum = card2 + i
            winCards = winCards + pictures(cardNum) + ","
        }
        text = winCards.slice(0, -1) + " が出たら勝ち！"
    }

    return (
        <>
            {
            card1 ?
            <div className='message4'>{text}</div>
            :
            <div className='message4'></div>
            }
        </>
    )
}

export default Message4
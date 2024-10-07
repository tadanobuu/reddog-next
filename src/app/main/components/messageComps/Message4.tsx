import { TypedUseSelectorHook ,useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'

// 勝利条件を表示するテキスト
const Message4 = () => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const { isPair, isConsecutive, card1, card2 } = useAppSelector((store) => store.game);

    const pictures = (cardNum: number) => {
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

    const card1Text: string = pictures(card1);

    let text = "";
    // 「{勝利条件} が出たら勝ち」を作成
    if(isPair){
        text = card1Text + " が出たら勝ち！"
    }else if(!isConsecutive && card1 < card2){
        const loop: number = card2 - card1;
        let winCards = "";
        for(let i = 1; i < loop; i++){
            const cardNum: number = card1 + i
            winCards = winCards + pictures(cardNum) + ","
        }
        text = winCards.slice(0, -1) + " が出たら勝ち！"
    }else if(!isConsecutive && card1 > card2){
        const loop: number = card1 - card2;
        let winCards = "";
        for(let i = 1; i < loop; i++){
            const cardNum: number = card2 + i
            winCards = winCards + pictures(cardNum) + ","
        }
        text = winCards.slice(0, -1) + " が出たら勝ち！"
    }

    return (
        <>
            {
            card1 && !isConsecutive ?
            <div className='text-black'>{text}</div>
            :
            <div className="invisible">This is invisible but still takes up space</div>
            }
        </>
    )
}

export default Message4
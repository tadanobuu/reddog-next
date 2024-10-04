import BetButton from './buttonComps/betButton';
import RaizeButton from './buttonComps/raizeButton';
import TrunButton from './buttonComps/trunButton';
import { useDispatch, useSelector } from 'react-redux';
import { win, lose, resetBetPoint } from "../../../redux/slices/PointSlice";
import { clearGame } from '../../../redux/slices/GameSlice';
import { gameHistory, gameResult } from '../../../redux/slices/ResultSlice';
import { betTimetoTrue, buttonsReset, cardOpen } from '../../../redux/slices/ButtonsSlice';
import GameoverAndResult from '../result/GameoverAndResult';

const Buttons = () => {

  const dispatch = useDispatch();
  const { isWin, odds, isConsecutive, isPair } = useSelector((store) => store.game);
  const { point, betPoint } = useSelector((store) => store.point);
  const { betTime, chooseRaise, trunCard } = useSelector((store) => store.buttons);

  const reset = () => {
    dispatch(buttonsReset());
    dispatch(resetBetPoint());
    dispatch(clearGame());
  }

  const consecutiveToReset = () => {
    dispatch(betTimetoTrue());
    dispatch(win(odds));
    dispatch(gameResult());
    dispatch(gameHistory("draw"));
    dispatch(resetBetPoint());
    dispatch(clearGame());
  }

  const clickTrunCard = () => {
    // ボタン押下後に待機時間を設ける
    setTimeout(() => {
      if(iswin){
        dispatch(win(odds));
      }else{
        dispatch(lose());
      }
      dispatch(cardOpen());
      dispatch(gameResult(isWin ? point + (odds * betPoint) : 0));
      dispatch(gameHistory(isWin ? odds > 1 ? "win" : "draw" : "lose"));
    }, 200)
  }

  return (
    <div className="flex justify-center space-x-4 mt-6">
    {
      !point && !betPoint ?
        <GameoverAndResult />
          :
        isConsecutive ?
        <div className='nextGame'>
          <button className='toNextGame' onClick={() => consecutiveToReset()}>次のゲームへ</button>
        </div>
        :
          betTime ?
            <BetButton />
          :
            chooseRaise && !isPair ?
              <RaizeButton />
            :
              trunCard ?
                <TrunButton clickTrunCard={clickTrunCard} />
              :
                <div className='nextGame'>
                  <button className='toNextGame' onClick={() => reset()}>次のゲームへ</button>
                </div>
    }
    </div>
  )
}

export default Buttons
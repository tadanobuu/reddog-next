import "./Button.css";
import BetButton from './buttons/betButton';
import RaizeButton from './buttons/raizeButton';
import TrunButton from './buttons/trunButton';
import { useDispatch, useSelector } from 'react-redux';
import { win, lose, resetBetPoint } from "../../features/cart/PointSlice";
import { clearGame } from '../../features/game/GameSlice';
import { gameHistory, gameResult } from '../../features/result/ResultSlice';
import GameoverAndResult from './GameoverAndResult';
import { betTimetoTrue, buttonsReset, cardOpen } from '../../features/buttons/ButtonsSlice';

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
      isWin ? dispatch(win(odds)) : dispatch(lose());
      dispatch(cardOpen());
      dispatch(gameResult(isWin ? point + (odds * betPoint) : 0));
      dispatch(gameHistory(isWin ? odds > 1 ? "win" : "draw" : "lose"));
    }, 200)
  }

  return (
    <div className='buttons'>
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
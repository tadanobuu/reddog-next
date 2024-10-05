'use client';

import BetButton from './buttonComps/betButton';
import RaizeButton from './buttonComps/raizeButton';
import TrunButton from './buttonComps/trunButton';
import GameoverAndResult from '../result/GameoverAndResult';
import { useDispatch, useSelector } from 'react-redux';
import { win, lose, resetBetPoint } from "../../../redux/slices/PointSlice";
import { clearGame } from '../../../redux/slices/GameSlice';
import { gameHistory, gameResult } from '../../../redux/slices/ResultSlice';
import { betTimetoTrue, buttonsReset, cardOpen } from '../../../redux/slices/ButtonsSlice';
import { Button } from '@/components/ui/button';


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
      if(isWin){
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
    <>
    {
      !point && !betPoint ?
        <GameoverAndResult />
          :
        isConsecutive ?
        <div className='flex justify-center mt-3'>
          <Button className='toNextGame' onClick={() => consecutiveToReset()}>次のゲームへ</Button>
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
                <div className='flex justify-center mt-3'>
                  <Button className='toNextGame' onClick={() => reset()}>次のゲームへ</Button>
                </div>
    }
    </>
  )
}

export default Buttons
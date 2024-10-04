import { useDispatch, useSelector } from 'react-redux';
import { add, minus } from '../../../redux/slices/PointSlice';
import { newGame } from '../../../redux/slices/GameSlice';
import { betTimetoFalse } from '../../../redux/slices/ButtonsSlice';

const BetButton = () => {

    const { betPoint, point } = useSelector((store) => store.point);
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(betTimetoFalse());
        dispatch(newGame());
    }

    const totalPoint = betPoint + point;

    return (
        <>
            <div className='betButtons'>
                { totalPoint < 1000 ?
                    <>
                        <button className='add10' onClick={() => dispatch(add(10))}>+10</button>
                        <button className='minus10' onClick={() => dispatch(minus(10))}>-10</button>
                        <button className='add100' onClick={() => dispatch(add(100))}>+100</button>
                        <button className='minus100' onClick={() => dispatch(minus(100))}>-100</button>
                    </> :
                    <>
                        <button className='add100' onClick={() => dispatch(add(100))}>+100</button>
                        <button className='minus100' onClick={() => dispatch(minus(100))}>-100</button>
                        <button className='add1000' onClick={() => dispatch(add(1000))}>+1000</button>
                        <button className='minus1000' onClick={() => dispatch(minus(1000))}>-1000</button>
                    </>
                }

            </div>
            <div className='decide'>
            {
                betPoint ? <button className='decideButton' onClick={() => submit()}>決定</button> : <div></div>
            }
            </div>
        </>
    )
}

export default BetButton;
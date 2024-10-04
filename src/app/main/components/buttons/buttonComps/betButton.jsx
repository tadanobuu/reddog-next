import { useDispatch, useSelector } from 'react-redux';
import { add, minus } from '../../../../redux/slices/PointSlice';
import { newGame } from '../../../../redux/slices/GameSlice';
import { betTimetoFalse } from '../../../../redux/slices/ButtonsSlice';
import { Button } from '@/components/ui/button';

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
                        <Button className='add10' onClick={() => dispatch(add(10))}>+10</Button>
                        <Button className='minus10' onClick={() => dispatch(minus(10))}>-10</Button>
                        <Button className='add100' onClick={() => dispatch(add(100))}>+100</Button>
                        <Button className='minus100' onClick={() => dispatch(minus(100))}>-100</Button>
                    </> :
                    <>
                        <Button className='add100' onClick={() => dispatch(add(100))}>+100</Button>
                        <Button className='minus100' onClick={() => dispatch(minus(100))}>-100</Button>
                        <Button className='add1000' onClick={() => dispatch(add(1000))}>+1000</Button>
                        <Button className='minus1000' onClick={() => dispatch(minus(1000))}>-1000</Button>
                    </>
                }

            </div>
            <div className='decide'>
            {
                betPoint ? <Button className='decideButton' onClick={() => submit()}>決定</Button> : <div></div>
            }
            </div>
        </>
    )
}

export default BetButton;
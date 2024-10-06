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
            <div className="flex justify-center space-x-2 mt-6">
                { totalPoint < 1000 ?
                    <>
                        <Button className='' onClick={() => dispatch(add(10))}>+10</Button>
                        <Button className='' onClick={() => dispatch(minus(10))}>-10</Button>
                        <Button className='' onClick={() => dispatch(add(100))}>+100</Button>
                        <Button className='' onClick={() => dispatch(minus(100))}>-100</Button>
                    </> :
                    <>
                        <Button className='' onClick={() => dispatch(add(100))}>+100</Button>
                        <Button className='' onClick={() => dispatch(minus(100))}>-100</Button>
                        <Button className='' onClick={() => dispatch(add(1000))}>+1000</Button>
                        <Button className='' onClick={() => dispatch(minus(1000))}>-1000</Button>
                    </>
                }
            </div>
            <div className="flex justify-center mt-3">
                {
                    betPoint ? <Button className='' onClick={() => submit()}>決定</Button> : <div className='my-5'></div>
                }
            </div>
        </>
    )
}

export default BetButton;
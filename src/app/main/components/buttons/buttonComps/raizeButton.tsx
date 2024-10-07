import { useDispatch, TypedUseSelectorHook ,useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store'
import { add } from '../../../../redux/slices/PointSlice';
import { chooseRaisetoFalse } from '../../../../redux/slices/ButtonsSlice';
import { Button } from '@/components/ui/button';

const RaizeButton = () => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const { point, betPoint } = useAppSelector((store) => store.point);
    const dispatch = useDispatch();

    const clickedRaize = () =>{
        dispatch(add(betPoint));
        dispatch(chooseRaisetoFalse());
    }

    const chk = point >= betPoint ? true : false;

    return (
        <>
            <div className="flex justify-center mt-2">
                <p className=''>bet額を倍にしますか？</p>
            </div>
            <div className="flex justify-center mt-2 space-x-2">
                {
                    chk ?
                    <Button className='' onClick={() => clickedRaize()}>倍賭け</Button> :
                    <Button className=''
                            style={{
                                textDecoration: 'line-through' ,
                                textDecorationThickness : '1.50px'
                            }}>倍賭け</Button>
                }
                <Button className='' onClick={() => dispatch(chooseRaisetoFalse())}>そのまま</Button>
            </div>
        </>
    )
}

export default RaizeButton;
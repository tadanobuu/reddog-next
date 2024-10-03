import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../features/cart/PointSlice';
import "./raizeButton.css"
import { chooseRaisetoFalse } from '../../../features/buttons/ButtonsSlice';

const RaizeButton = () => {

    const { point, betPoint } = useSelector((store) => store.point);
    const dispatch = useDispatch();

    const clickedRaize = () =>{
        dispatch(add(betPoint));
        dispatch(chooseRaisetoFalse());
    }

    const chk = point >= betPoint ? true : false;

    return (
        <div className='standOrRaize'>
            <p className='raizeText'>bet額を倍にしますか？</p>
            {
                chk ?
                <button className='raize' onClick={() => clickedRaize()}>倍賭け</button> :
                <button className='raize'
                        style={{
                            textDecoration: 'line-through' ,
                            textDecorationThickness : '1.50px'
                        }}>倍賭け</button>
            }
            <button className='stand' onClick={() => dispatch(chooseRaisetoFalse())}>そのまま</button>
        </div>
    )
}

export default RaizeButton;
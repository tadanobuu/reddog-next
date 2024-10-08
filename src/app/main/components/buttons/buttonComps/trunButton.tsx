import { TypedUseSelectorHook ,useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store'
import { Button } from '@/components/ui/button';

interface turnButtonProps {
    clickTrunCard: () => void;
}

const TrunButton = ({ clickTrunCard }: turnButtonProps) => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const { isWin, rand, odds } = useAppSelector((store) => store.game);

    let style = { 'background': '#87befd', 'borderBottom': 'solid 3px #679ebb' };
    if(isWin && odds !== 1){
        switch(true){
            case rand <= 100:
                // 虹色
                style = { 'background': 'linear-gradient(132deg, red,orange,yellow,green,aqua,blue,purple)', 'borderBottom': 'solid 3px #000000' };
                break;
            case rand <= 280:
                // 金色
                style = { 'background': 'linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%)', 'borderBottom': 'solid 3px #000000' };
                break;
            case rand <= 1680:
                // 赤色
                style = { 'background': '#FF0000', 'borderBottom': 'solid 3px #B20000' };
                break;
            default:
        }
    }else{
        switch(true){
            case rand <= 20:
                // 金色
                style = { 'background': 'linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%)', 'borderBottom': 'solid 3px #000000' };
                break;
            case rand <= 620:
                // 赤色
                style = { 'background': '#FF0000', 'borderBottom': 'solid 3px #B20000' };
                break;
            default:
        }
    }

    return (
        <div className="flex justify-center mt-3">
            <Button className='' style={style} onClick={() => clickTrunCard()}>OPEN</Button>
        </div>
    )
}

export default TrunButton;
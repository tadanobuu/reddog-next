import "./trunButton.css";
import { useSelector } from 'react-redux';

const TrunButton = ({ clickTrunCard }) => {

    const { isWin, rand, odds } = useSelector((store) => store.game);

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
        <div className='trun'>
            <button className='trunCard' style={style} onClick={() => clickTrunCard()}>OPEN</button>
        </div>
    )
}

export default TrunButton
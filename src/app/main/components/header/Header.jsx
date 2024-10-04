import MenuBookIcon from '@mui/icons-material/MenuBook';
import XIcon from '@mui/icons-material/X';
import { useSelector } from 'react-redux';

const Header = () => {

    const { point, betPoint } = useSelector((store) => store.point);

    const totalPoint = point + betPoint;

    let text1 = "";
    let text2 = "";
    switch(true){
        case totalPoint < 100:
            text1 = "赤犬";
            text2 = 100 - totalPoint;
            break;
        case totalPoint < 200:
            text1 = "青犬";
            text2 = 200 - totalPoint;
            break;
        case totalPoint < 300:
            text1 = "緑犬";
            text2 = 300 - totalPoint;
            break;
        case totalPoint < 500:
            text1 = "橙犬";
            text2 = 500 - totalPoint;
            break;
        case totalPoint < 1000:
            text1 = "黄犬";
            text2 = 1000 - totalPoint;
            break;
        case totalPoint < 5000:
            text1 = "金犬";
            text2 = 5000 - totalPoint;
            break;
        case totalPoint < 10000:
            text1 = "？犬";
            text2 = 10000 - totalPoint;
            break;
        case totalPoint < 50000:
            text1 = "？犬";
            text2 = 50000 - totalPoint;
            break;
        default:
    }

    return (
        <div className='header'>
            <div className='havePt'>
                <em>持ち</em>
                <em className='pt'>{point}</em>
                <em>pt</em>
            </div>
            {
                totalPoint >= 50000 ?
                <div className='nextChar'></div>
                :
                <div className='nextChar'>
                    <em>{text1}まで</em>
                    <em className='pt'>{text2}</em>
                    <em>pt</em>
                </div>
            }
            <div className='icon'>
                <button className='menuBtn' onClick={() => {}}><MenuBookIcon /></button>
                <a className='xbutton' href={'http://twitter.com/share?url=https://reddog-app-caccb.web.app/&text=' + (totalPoint) + 'pt持っています！%20%23レッドドッグ%20'} target='_blank' rel='noopener noreferrer'><XIcon/></a>
            </div>
        </div>
    )
}

export default Header
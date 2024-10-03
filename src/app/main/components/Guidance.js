import "./Guidance.css"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PetsIcon from '@mui/icons-material/Pets';

const Guidance = () => {
    return (
        <div className='guidance'>
            <p>初めての人は<em className='HowtoIcon'><MenuBookIcon /></em>を押すﾜﾝ!</p>
            <p>持ってるポイントによって僕の色が変わるﾜﾝ!</p>
            <p>持ち点が0になるまで何度も挑戦ができるﾜﾝ!</p>
            <p className="lastMessage">いっぱい遊んでほしいﾜﾝ<em className='dogIcon'><PetsIcon /></em></p>
        </div>
    )
}

export default Guidance
import redDog from "../../dogs/red.png"
import purpleDog from "../../dogs/purple.png"
import yellowDog from "../../dogs/yellow.png"
import orangeDog from "../../dogs/orange.png"
import goldDog from "../../dogs/gold.png"
import lightblueDog from "../../dogs/lightblue.png"
import greenDog from "../../dogs/green.png"
import blackDog from "../../dogs/black.png"
import whiteDog from "../../dogs/white.png"
import Image from "next/image"
import { useSelector } from 'react-redux'

const Character = () => {

    const {point, betPoint} = useSelector((store) => store.point);

    const totalPoint = point + betPoint;

    let dog = '';
    switch(true){
        case totalPoint >= 50000:
            dog = whiteDog;
            break;
        case totalPoint >= 10000:
            dog = blackDog;
            break;
        case totalPoint >= 5000:
            dog = goldDog;
            break;
        case totalPoint >= 1000:
            dog = yellowDog;
            break;
        case totalPoint >= 500:
            dog = orangeDog;
            break;
        case totalPoint >= 300:
            dog = greenDog;
            break;
        case totalPoint >= 200:
            dog = lightblueDog;
            break;
        case totalPoint >= 100:
            dog = redDog;
            break;
        default:
            dog = purpleDog;
    }

    return (
        <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-10">
            {
                totalPoint ?
                <Image src={dog} alt="dog" className="w-24 h-24 scale-125 bg-white rounded-full border-4 border-yellow-400 shadow-lg" /> :
                <div /> // 犬消滅
            }
        </div>
    )
}

export default Character
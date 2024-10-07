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
import { TypedUseSelectorHook ,useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'

const Character = () => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const {point, betPoint} = useAppSelector((store) => store.point);

    const totalPoint = point + betPoint;

    const dogColer = () => {
        if(totalPoint >= 50000) return whiteDog;
        if(totalPoint >= 10000) return blackDog;
        if(totalPoint >= 5000) return goldDog;
        if(totalPoint >= 1000) return yellowDog;
        if(totalPoint >= 500) return orangeDog;
        if(totalPoint >= 300) return greenDog;
        if(totalPoint >= 200) return lightblueDog;
        if(totalPoint >= 100) return redDog;
        return purpleDog;
    }

    return (
        <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-10">
            {
                !totalPoint ?
                <Image src={dogColer()} alt="dog" className="w-24 h-24 scale-125 bg-white rounded-full border-4 border-yellow-400 shadow-lg" /> :
                <div /> // 犬消滅
            }
        </div>
    )
}

export default Character
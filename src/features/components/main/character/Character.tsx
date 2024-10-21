import redDog from "../../../../public/images/dogs/red.png"
import purpleDog from "../../../../public/images/dogs/purple.png"
import yellowDog from "../../../../public/images/dogs/yellow.png"
import orangeDog from "../../../../public/images/dogs/orange.png"
import goldDog from "../../../../public/images/dogs/gold.png"
import lightblueDog from "../../../../public/images/dogs/lightblue.png"
import greenDog from "../../../../public/images/dogs/green.png"
import blackDog from "../../../../public/images/dogs/black.png"
import whiteDog from "../../../../public/images/dogs/white.png"
import Image from "next/image"
import { TypedUseSelectorHook ,useSelector } from 'react-redux';
import { RootState } from '../../../../store/store'

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
                totalPoint ?
                <Image src={dogColer()} alt="dog" className="w-24 h-24 scale-125 bg-white rounded-full border-4 border-yellow-400 shadow-lg" /> :
                <div /> // 犬消滅
            }
        </div>
    )
}

export default Character
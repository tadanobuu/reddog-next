import { TypedUseSelectorHook ,useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'

const BetPointDisp = () => {

  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { betPoint } = useAppSelector((store) => store.point);

  return (
    <p className="text-center text-sm sm:text-lg mt-2 sm:mt-4">
      Bet {betPoint}pt
    </p>
  )
}

export default BetPointDisp;
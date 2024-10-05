import { useSelector } from 'react-redux';

const BetPointDisp = () => {

  const { betPoint } = useSelector((store) => store.point);

  return (
    <p className="text-center text-xs sm:text-sm mt-2 sm:mt-4">
      Bet {betPoint}pt
    </p>
  )
}

export default BetPointDisp;
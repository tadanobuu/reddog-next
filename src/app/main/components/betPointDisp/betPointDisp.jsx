import { useSelector } from 'react-redux';

const BetPointDisp = () => {

  const { betPoint } = useSelector((store) => store.point);

  return (
    <div className="text-center text-sm mt-4">
      <p className='betPt'>Bet {betPoint}pt</p>
    </div>
  )
}

export default BetPointDisp;
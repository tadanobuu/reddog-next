import { useSelector } from 'react-redux';

const BetPointDisp = () => {

  const { betPoint } = useSelector((store) => store.point);

  return (
    <div className='price'>
      <p className='betPt'>Bet {betPoint}pt</p>
    </div>
  )
}

export default BetPointDisp;
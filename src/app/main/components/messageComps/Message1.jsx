import { useSelector } from 'react-redux';

// 2枚のカードの関係性を表示するテキスト
const Message1 = () => {

  const { spread, isPair, isConsecutive } = useSelector((store) => store.game);

  return (
    <div className='font-medium'>
      {
        isPair ?
        <>
          <div className=''>ペア</div>
        </>
        :
          isConsecutive ?
          <>
            <div className=''>連続</div>
          </>
          :
            spread ? 
            <div className='flex justify-center space-x-2'>
              <div className=''>間隔</div>
              <div className=''>{spread}</div>
            </div>
            :
            <p className="invisible">This is invisible but still takes up space</p>
      }
    </div>
  )
}

export default Message1
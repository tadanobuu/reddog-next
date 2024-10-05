import { useSelector } from 'react-redux';

// 2枚のカードの関係性を表示するテキスト
const Message1 = () => {

  const { spread, isPair, isConsecutive } = useSelector((store) => store.game);

  return (
    <div className='textArea'>
      {
        isPair ?
        <>
          <p className='text3'>ペア</p>
        </>
        :
          isConsecutive ?
          <>
            <p className='text3'>連続</p>
          </>
          :
            spread ? 
            <>
              <p className='text1'>間隔</p>
              <p className='text2'>{spread}</p>
            </>
            :
            <p className="invisible">This is invisible but still takes up space</p>
      }
    </div>
  )
}

export default Message1
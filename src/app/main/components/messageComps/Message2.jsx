import { useSelector } from 'react-redux';

// オッズを表示するテキスト
const Message2 = () => {

  const { odds, isPair } = useSelector((store) => store.game);

  const getOddsStyle = () => {
    if (isPair || odds === 6) return "text-yellow-400 font-bold"
    if (odds === 5) return "text-red-500 font-bold"
    return "text-black"
}

  return (
    <div>
      {
        isPair ?
        <p className={getOddsStyle()}>1倍 or 12倍</p>
        :
          odds ?
          <p className={getOddsStyle()}>{odds}倍</p>
          :
          <p className="invisible">This is invisible but still takes up space</p>
      }
    </div>
  )
}

export default Message2
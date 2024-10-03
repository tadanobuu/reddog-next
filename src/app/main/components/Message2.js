import "./Message2.css"
import { useSelector } from 'react-redux';

// オッズを表示するテキスト
const Message2 = () => {

  const { odds, isPair } = useSelector((store) => store.game);

  let style = {"color" : "blue"}
  if(isPair || odds === 6){
    style = {"color" : "gold", "fontWeight" : "bold"}
  }else if(odds === 5){
    style = {"color" : "#FFFFFF", "fontWeight" : "bold"}
  }

  return (
    <div className='message2'>
      {
        isPair ?
        <p className='odds' style={style}>1倍 or 12倍</p>
        :
          odds ?
          <p className='odds' style={style}>{odds}倍</p>
          :
          <p></p>
      }
    </div>
  )
}

export default Message2
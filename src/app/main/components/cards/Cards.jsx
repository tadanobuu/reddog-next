import { useSelector } from 'react-redux';

const Cards = () => {

  const { card1Url, card2Url, card3Url } = useSelector((store) => store.game);
  const { isOpen } = useSelector((store) => store.buttons);

  let card3Style = {};
  let blankCardStyle = {};
  if(isOpen){
    blankCardStyle = {'display': 'none'};
  }else{
    card3Style = {'display': 'none'};
  }

  return (
    <div className="flex justify-center space-x-4 my-6">
      <img 
        src={card1Url}
        alt='card1'
        className="w-24 h-36 bg-white text-black flex items-center justify-center"
      />
      <img
        src={card3Url}
        alt='card3'
        className="w-24 h-36 bg-white text-black flex items-center justify-center"
        style={card3Style}
      />
      <img 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUCE0FkJ5HUq_NFpqPB9GCMfqxgsOtEptXJCdlHe8ES8HkwGRfe5U3hQZoR_4RqFn-u2BYwNc9jUOHtgI0uUEAEjQsD3TZFzH-8fJHlEk29YHHkUe0oOSC4E9wUefe0c2BA88eORbO8ylj/s800/card_back.png"
        alt='blankCard'
        className="w-24 h-36 bg-white text-black flex items-center justify-center"
        style={blankCardStyle}
      />
      <img 
        src={card2Url}
        alt='card2'
        className="w-24 h-36 bg-white text-black flex items-center justify-center"
      />
    </div>
  )
}

export default Cards
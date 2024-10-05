import { useSelector } from 'react-redux';
import Image from 'next/image';
import { Card } from "@/components/ui/card"

const Cards = () => {

  const { card1Url, card2Url, card3Url } = useSelector((store) => store.game);
  const { isOpen } = useSelector((store) => store.buttons);

  let card3Hidden = "";
  let blankCardHidden = "";
  if(!isOpen){
    card3Hidden = "hidden";
  }else{
    blankCardHidden = "hidden";
  }

  return (
    <div className="flex justify-center space-x-1 sm:space-x-4 my-4 sm:my-6">
      <Card className="w-24 h-36 bg-white text-black items-center justify-center shadow-md">
        <Image 
          src={card1Url}
          alt='card1'
          className="w-24 h-36 bg-white text-black flex items-center justify-center"
          width={1000}
          height={1000}
        />
      </Card>
      <div className={card3Hidden}>
        <Card className="w-24 h-36 bg-white text-black items-center justify-center shadow-md hidden">
          <Image
            src={card3Url}
            alt='card3'
            className="w-24 h-36 bg-white text-black flex items-center justify-center"
            width={1000}
            height={1000}
          />
        </Card>
      </div>
      <div className={blankCardHidden}>
        <Card className="w-24 h-36 bg-white text-black items-center justify-center shadow-md">
          <Image 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUCE0FkJ5HUq_NFpqPB9GCMfqxgsOtEptXJCdlHe8ES8HkwGRfe5U3hQZoR_4RqFn-u2BYwNc9jUOHtgI0uUEAEjQsD3TZFzH-8fJHlEk29YHHkUe0oOSC4E9wUefe0c2BA88eORbO8ylj/s800/card_back.png"
            alt='blankCard'
            className="w-24 h-36 bg-white text-black flex items-center justify-center"
            width={1000}
            height={1000}
          />
        </Card>
      </div>
      <Card className="w-24 h-36 bg-white text-black items-center justify-center shadow-md">
        <Image 
          src={card2Url}
          alt='card2'
          className="w-24 h-36 bg-white text-black flex items-center justify-center"
          width={1000}
          height={1000}
        />
      </Card>
    </div>
  )
}

export default Cards
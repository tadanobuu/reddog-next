import Image from 'next/image';

const CardImage = ({ src , alt = "" }) => (
    <Image src={src} alt={alt} className="w-16 h-24 object-contain" />
)

const CardSet = ({ cards }) => (
    <div className="flex justify-center space-x-2 my-4">
      {cards.map((card, index) => (
        <CardImage key={index} src={card} />
      ))}
    </div>
)

export default CardSet;
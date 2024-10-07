import Image from 'next/image';

type cardSetProps = {
    cards: string[]
}

type cardImageProps = {
    src: string,
    alt: string
}

const CardImage = ({ src , alt }: cardImageProps) => (
    <Image 
        src={src} 
        alt={alt} 
        className="w-16 h-24 object-contain" 
        width={1000}
        height={1000}
    />
)

const CardSet = ({ cards }: cardSetProps) => (
    <div className="flex justify-center space-x-2 my-4">
        {cards.map((card, index) => (
            <CardImage key={index} src={card} alt={"card"}/>
        ))}
    </div>
)

export default CardSet;
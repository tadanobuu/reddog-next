import { useSelector } from 'react-redux'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Info, Share2 } from 'lucide-react'

const Header = () => {

    const { point, betPoint } = useSelector((store) => store.point);

    const totalPoint = point + betPoint;

    let text1 = "";
    let text2 = "";
    switch(true){
        case totalPoint < 100:
            text1 = "赤犬";
            text2 = 100 - totalPoint;
            break;
        case totalPoint < 200:
            text1 = "青犬";
            text2 = 200 - totalPoint;
            break;
        case totalPoint < 300:
            text1 = "緑犬";
            text2 = 300 - totalPoint;
            break;
        case totalPoint < 500:
            text1 = "橙犬";
            text2 = 500 - totalPoint;
            break;
        case totalPoint < 1000:
            text1 = "黄犬";
            text2 = 1000 - totalPoint;
            break;
        case totalPoint < 5000:
            text1 = "金犬";
            text2 = 5000 - totalPoint;
            break;
        case totalPoint < 10000:
            text1 = "？犬";
            text2 = 10000 - totalPoint;
            break;
        case totalPoint < 50000:
            text1 = "？犬";
            text2 = 50000 - totalPoint;
            break;
        default:
    }

    return (
        <div className="bg-gray-800 p-4 flex flex-col sm:flex-row justify-between items-center border-b border-gray-700">
            <h1 className="text-2xl font-bold mb-2 text-red-500 sm:mb-0">RedDog</h1>
            <div className="flex-grow text-center py-3 sm:py-0">
                <p className="text-sm">所持ポイント: {point}</p>
                { totalPoint >= 50000 ?
                    <p className="text-xs text-gray-400"></p>
                    :
                    <p className="text-xs text-gray-400">{text1}まであと: {text2}ポイント</p>
                }
            </div>
            <div className="flex flex-grow justify-end space-x-4">
                <Link href="/howto" passHref>
                <Button className="text-black" variant="outline" size="sm">
                    <Info className="w-4 h-4 mr-2" />
                    ルール
                </Button>
                </Link>
                <Button className="text-black" variant="outline" size="sm" onClick={() => {}}>
                    <Share2 className="w-4 h-4 mr-2" />
                    <a href={'http://twitter.com/share?url=https://reddog-app-caccb.web.app/&text=' + (totalPoint) + 'pt持っています！%20%23レッドドッグ%20'} target='_blank' rel='noopener noreferrer'>
                        Xでシェア
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default Header
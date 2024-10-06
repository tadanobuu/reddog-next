import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-green-800 border-2 border-yellow-400">
        <CardContent className="p-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-8 text-center">Red Dog</h1>
          
          <div className="w-full">
            <div className="my-3">
              <Link href={"/main"}>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-3 text-lg">
                  ゲーム開始
                </Button>
              </Link>
            </div>
            
            <div className="my-3">
              <Link href={"/howto"}>
                <Button 
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 text-lg"
                >
                  ルール
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 Tadanobu Tokiwa. All rights reserved.</p>
      </div>
    </div>
  )
}

export default page
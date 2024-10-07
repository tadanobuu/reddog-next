import { TypedUseSelectorHook ,useSelector } from 'react-redux';
import { RootState } from '../../../redux/store'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const GameDetail = () => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const { maxPoint, gameCount, winCount, loseCount, resultHistory } = useAppSelector((store) => store.result)

    return(
        <div className="stats-area">
            <Card>
              <CardHeader>
                <CardTitle>ゲーム統計</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">最高得点</p>
                    <p className="text-2xl font-bold">{maxPoint}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">ゲーム回数</p>
                    <p className="text-2xl font-bold">{gameCount}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">勝利</p>
                    <p className="text-2xl font-bold">{winCount}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">敗北</p>
                    <p className="text-2xl font-bold">{loseCount}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">引分</p>
                    <p className="text-2xl font-bold">{gameCount - winCount - loseCount}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">勝率</p>
                    <p className="text-2xl font-bold">
                        {gameCount ? Math.floor(winCount / (gameCount) * 10000) / 100 : "---"}%
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">直近10ゲームの履歴</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">ゲーム</TableHead>
                        <TableHead>結果</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {resultHistory.map((result, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">#{result[0]}</TableCell>
                          <TableCell>{result[1]}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
    )
}

export default GameDetail
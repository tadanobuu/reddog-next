import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import RuleSection from './components/ruleSection';
import CardSet from './components/cardSet';
import Link from "next/link";

const RedDogRules = () => {

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow">
      
      <h1 className="text-3xl font-bold my-6 text-center">レッドドッグの遊び方</h1>
      
      <RuleSection title="基本ルール">
        <p className="mb-2">3枚目に配られたカードの数字が先に配られた2枚のカードの数字の間だったら勝ち！というゲームです。</p>
        <p className="font-bold mt-4">【勝ちの例】</p>
        <p>1枚目: 3 / 2枚目: 9 / 3枚目: 5</p>
        <CardSet cards={[
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2NDsxeLe22kW9_BT7w48MRNnV4oMk4WhiMcIvz5sLI0dNGmCvE-jl4bBYmTr3GoPs3rV3a4R4GphD-0kx1CiZ1-Witg-Cn3dXS3319coTVOcbslDH3AoA1VbFdXVoWScFooJFdiz2nVsk/s800/card_diamond_03.png',
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnjFSjp-TDjjfZJDfu0gmM4z6e68a-ENqUIIWctApWUaJEWBIF9xlF-ryeYPG2yDIbB5rzYphdS-9X4eYknCzh-95Zzf0NIWwj2sv21lL74PJKd9SGunLTuqQzi9K0FOkmle4zuJfIfPVM/s800/card_heart_05.png',
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOJGJ-kqHsLKZHbJfqkIkdGwvw8XhkEwL1ksnmeY7bHCKYst7wwE5i8xGV_cdi16d2RMsfSHd9o48JxNVNoA0lZMRtow5seQRbiwqnmUJBMsqLgjiQcAWgWbqmPVMYTsAuaGAQwk2HQgMu/s800/card_spade_09.png'
        ]} />
        <p className="text-sm text-gray-600">※マークは関係ありません</p>
        <p className="text-sm text-gray-600">※2枚目(右側)の方が小さい数字の場合でも同様</p>
        
        <p className="font-bold mt-4">【数字の順番】</p>
        <p>2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → J → Q → K → A</p>
      </RuleSection>

      <RuleSection title="その他ルール">
        <p className="font-bold">【先に配られた2枚が連続していた場合】</p>
        <p className="mb-2"><span className="font-bold">引き分け</span> (間に入る数字がないため)</p>
        <CardSet cards={[
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZpBsBHzea5346SN4Bl8PDwszvM4ovkTHW_IXTukvhVZQ-_DnzUas7aJRy5XPkVoDnDiurYkpi0JTuaGvyn0APCe46X9iFzNaGgOgMKmJ-k1MU_ro1Cox0Iu33mMtNSovMcJLKYBNrUl-t/s800/card_club_03.png',
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUCE0FkJ5HUq_NFpqPB9GCMfqxgsOtEptXJCdlHe8ES8HkwGRfe5U3hQZoR_4RqFn-u2BYwNc9jUOHtgI0uUEAEjQsD3TZFzH-8fJHlEk29YHHkUe0oOSC4E9wUefe0c2BA88eORbO8ylj/s800/card_back.png',
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR74T3ku2YRGM2SCzQvQ11z8QjRc05PdarOTecrmrkV3Q6Fty7gJ-XRPraxA2gbkusPxYsuYVomwG6oUv91TRQi2AChDEe5KT6J23Ot_irfpfVKPjSiCbxqMWbEmrOYl0RKWAwOPYVrSMo/s800/card_heart_04.png'
        ]} />

        <Separator className="my-4" />

        <p className="font-bold">【先に配られた2枚がペアの場合】</p>
        <p>・3枚目も同じ数字の場合 → <span className="text-red-600 font-bold">勝ち！</span></p>
        <CardSet cards={[
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSVy56fpOdMWjW7JRoTnuzUisXaKD9oWiexP-uDPDBo2p2xKwmbYVaeBFxD7SiU4GC3fvchi8ZEJ8j-aA7DmTpqNcDWNj7CiwfsSTnQ558CesoqH04ivDLzCp1ewZZksQxX5jf2jud5TJH/s800/card_club_06.png',
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ5Bqe_2DclEubYO40pSb106srvDZl-i_fXE6xdYAsg5ZgHGw2hTIgAN_x2-jNjsUWi2xqPtyXpR_AZe9HurXVcwQ4es9MNRo71NOGd-_P_7H4mRig10lRWdFts8Fs3-oMQQ7jD6HcYspW/s800/card_spade_06.png',
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeuayj1QgbnvlIrod-G_xMdBnxHY0JR7deFe5xS59zqajiH-tyUfw2c572Hsqw8r9f1zdjzxBcG7ITm5ODHEhFYz0a25ddSiQVGNamlE2kU2QQTQDkzPn5p2LiZh6jZyltzBjrBYwthtVu/s800/card_diamond_06.png'
        ]} />
        <p>・3枚目が違う数字の場合 → <span className="font-bold">引き分け</span></p>
        <CardSet cards={[
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiigxeATOR1vZg-msbYevcViZqWh7CdIXFunD5y-DVySKCWoUc0rN6tF_-hSahYTdnNY1U5gXTLv2qtmqH29ea4MZwj0__5bH0Tdd8QpH2hSqlPHqZH4WmWTVQb2KRoUoQA_0ZmPv0aOpZ/s800/card_club_11.png',
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgksE3RYxFyrKYNJ_MBzgSzHuSdsvSx-2i-asUg6R2t8cTP5gKqqW84ctT96KDyAyni2FVLbNeuYy9wvifdgx3FxE_00QoGz0vSIODUgUk9PV8pnHdqptsWv-OtC7WH2SMmePx9kFbgMrmJ/s800/card_heart_10.png',
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnvQfeGeSRoo3waeZ-DfnWKMHiRKTxaQPaRtVB97knDRKh0MEMjZea7FpdMN40puf-70Ng3th58eWYsxOR3KLqh8I_ac_xpPjhIUvY08q2_5fNTTXN9pTkikSvbBFL559IYJHfTYpKMt6E/s800/card_diamond_11.png'
        ]} />
      </RuleSection>

      <RuleSection title="配当">
        <div className="space-y-2">
          <p className="font-bold">【ペアの場合】</p>
          <p>3枚全て同じ数字 : <span className="text-red-600 font-bold">12倍</span></p>
          <p>その他 : 1倍 (引き分け)</p>

          <p className="font-bold mt-4">【連続の場合】</p>
          <p>1倍 (引き分け)</p>

          <p className="font-bold mt-4">【その他】</p>
          <p>有効な数字の数によって変化</p>
          <ul className="list-disc list-inside">
            <li>1つ : <span className="text-red-600 font-bold">6倍</span></li>
            <li>2つ : <span className="text-blue-600 font-bold">5倍</span></li>
            <li>3つ : <span className="text-green-600 font-bold">3倍</span></li>
            <li>4つ以上 : <span className="text-yellow-600 font-bold">2倍</span></li>
          </ul>
        </div>
      </RuleSection>

      <RuleSection title="ゲームの流れ、ボタン">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <p>賭けPtを決める</p>
            <div className="flex justify-center space-x-2 mt-2">
              <Button variant="outline" size="sm">+10</Button>
              <Button variant="outline" size="sm">-10</Button>
              <Button variant="outline" size="sm">+100</Button>
              <Button variant="outline" size="sm">-100</Button>
            </div>
            <div className="flex justify-center">
                <Button className="mt-2">決定</Button>
            </div>
          </li>
          <li>
            <p>カードが2枚配られた後、倍賭けをするか決める</p>
            <p className="text-sm text-gray-600">※「その他ルール」に該当するパターンでは省略</p>
            <CardSet cards={[
              'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIFtPPeLUE71rAaxy9GCXMpcLTe5xrKpJ1umnrjTXu1blrQ8nSO_5CJ3U5lHN49p7CBRfHmTYyZylgM2ZSw6sjlUqEr9P4hInVp-Sa8R3llAyOx48b0gXzt8bAQCKrRQZ8UNVnau3IpzEF/s800/card_spade_02.png',
              'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUCE0FkJ5HUq_NFpqPB9GCMfqxgsOtEptXJCdlHe8ES8HkwGRfe5U3hQZoR_4RqFn-u2BYwNc9jUOHtgI0uUEAEjQsD3TZFzH-8fJHlEk29YHHkUe0oOSC4E9wUefe0c2BA88eORbO8ylj/s800/card_back.png',
              'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLQGB2Gg19QADfwiCNcfWXuh0VETbQROmxC9oSnfhWdJr9w7NYpsSj_SG-oIq0NR02CZKaieC1586jxTZ70NI2-zYQVAV7pr97Nya71i9gTmp76J3vSn_QGEikJgajdBXXYJB_tc7wPtyA/s800/card_heart_01.png'
            ]} />
            <div className="flex justify-center space-x-2 mt-2">
              <Button variant="outline">倍賭け</Button>
              <Button variant="outline">そのまま</Button>
            </div>
          </li>
          <li>
            <p>3枚目のカードをめくる</p>
            <p className="text-sm text-gray-600 mt-1">※ボタンの色が青以外の時はチャンス！</p>
            <div className="flex justify-center">
                <Button
                className="mt-2 bg-blue-500 hover:bg-blue-600"
                >
                OPEN
                </Button>
            </div>
          </li>
        </ol>
      </RuleSection>

      <RuleSection title="使用したフリー素材">
        <div className="space-y-4">
          <div>
            <p className="font-bold">・Loose Drawing</p>
            <p className="text-sm">https://loosedrawing.com/</p>
            <p className="text-sm text-gray-600">犬のイラストで使用</p>
          </div>
          <div>
            <p className="font-bold">・いらすとや</p>
            <p className="text-sm">https://www.irasutoya.com/</p>
            <p className="text-sm text-gray-600">カード(トランプ)のイラストで使用</p>
          </div>
        </div>
      </RuleSection>

      <div className="flex justify-center">
        <Button className="mb-4">
            <Link href={"/main"}>ゲームに戻る</Link> 
        </Button>
      </div>
    </div>
  )
}

export default RedDogRules;
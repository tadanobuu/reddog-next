# 概要
## アプリ名   
Red Dog  
  
## 目的   
カジノで行えるゲームの1つ  
「レッドドッグ」をwebアプリケーションでゲームとして遊ぶことができるサイトです  
  
## 技術スタック  
フロントエンド: Next.js 14, Redux Toolkit (状態管理)  
UIライブラリ: Tailwind CSS, chadcn/ui 
データ保存: バックエンドなし  
デプロイ: Vercel  
  
## ※こちらのアプリケーションは個人製作したアプリケーションを、Next.jsに移行するため新規プロジェクトとして作成しております。  
  

# URL
https://reddog-next.vercel.app/  

# 使用したフリー素材
## Loose Drawing  
　https://loosedrawing.com/tag/animal/  
　犬のイラストで使用

## いらすとや  
　https://www.irasutoya.com/  
　カード(トランプ)のイラストで使用

# 機能一覧
・ゲーム「レッドドッグ」  
・X投稿機能(現在の持ち点を投稿)　　

# ユーザーインターフェース (UI) 設計
## ワイヤーフレーム
１.タイトル画面  
「ゲーム開始」「ルール」を選択できる  

２.メイン画面(ゲーム画面)  
・下記ゲームの操作方法でゲームを実行  
・ルールページへ遷移  
・Xへ現在のポイント数をポスト  

３.ルール画面
・ゲームのルールや操作方法を確認できる  

## ゲームの操作方法
ゲーム中は必要最低限のボタンが画面下部に表示されます  
① ベットするptを決める(持ち点合計によってボタンで操作できるpt額を変更)  
② 倍賭けができる場合: 倍賭けを するか、しないか の2択をボタンをタップして決定  
③ 引き分けが確定していない場合: 3枚目のカードをめくる  
④ 「次のゲームへ」ボタンをタップし①に戻る  
以後繰り返し  

## ゲームオーバーになった場合
画面をリロードして新しいゲームを始めてください  

# データフロー
## ポイント
・概要  
  ゲームで使用するポイントの管理　　
  
・アクション  
  add(掛けPtを増やす、持ちPtを減らす)  
  minus(掛けPtを減らす、持ちPtを増やす)  
  win(ゲームに勝利し、ポイントを増やす)  
  lose(ゲームに敗北し、ポイントを失う)  
  resetBetPoint(ゲームの勝敗の精算をする)  
  
・状態管理
  point(現在のポイント数)  
  betPoint(現在のゲームの掛けPt)  
  winPoint(ゲームに勝利して増えるPt)  

## ボタン
・概要  
  ゲーム画面下部で操作を表示するボタンを管理  
  
・アクション  
  betTimetoFalse  
  betTimetoTrue  
  chooseRaisetoFalse  
  cardOpen  
  buttonReset  
  全て真偽値を変更することでボタンの表示を管理  
  
・状態管理
  betTime(賭けPtを決めるボタンの管理)  
  chooseRaise(賭けPtを倍にするボタンの管理)  
  trunCard(3枚目のカードを開くボタンの管理)  
  isOpen(3枚目のカードの状態を管理)  

## ゲーム
・概要  
  1ゲームごとの状態管理  
  
・アクション  
  newGame(乱数を使用しカード、勝敗、配当を決める)  
  clearGame(カード、勝敗、配当などの状態を初期に戻す)  
  
・状態管理  
  card(カードの数字を管理)
  cardUrl(カードの画像URLを管理)  
  ※上記は3種類のカードそれぞれ管理  
  isWin(勝敗の管理)※引数は勝ち判定  
  odds(配当の管理)  
  isPair(ペアかどうかの判定)  
  isConsectuive(連続かどうかの判定)  
  spread(間隔の幅を管理)  
  rand(ボタンの演出のため乱数を生成)  

## リザルト
・概要  
  ゲーム統計画面で使用する値の管理  
  
・アクション  
  gameResult(最大得点が更新されたかチェック)  
  gameHistory(勝利カウントやヒストリーの更新)
  
・状態管理  
  maxPoint(最大得点の管理)  
  gameCount(ゲーム数を管理)  
  winCount(勝利数を管理)  
  loseCount(敗北数を管理)  
  resultHistory(直近10回の勝敗を管理)  

# 技術スタックの選定理由
## Next.js 14
コンポーネントベースの設計が可能で、フロントエンドの開発を効率化  
App Routerを使用して画面遷移を実装  
将来的にSSR（サーバーサイドレンダリング）や静的生成などの機能を追加できる柔軟性  
## Redux Toolkit
シンプルな状態管理のため、タスクリストの管理を効率的に行える  
拡張性があり、他の機能追加時にも柔軟に対応可能  
## Tailwind CSS , chadcn/ui
Reactプロジェクトに統合が簡単であるため  
不必要なコンポーネントのインポートがないため軽量  
'use client';

import { useState } from 'react'
import Header from './components/header/Header'
import Character from './components/character/Character'
import Message1 from './components/messageComps/Message1'
import Cards from './components/cards/Cards'
import Message2 from './components/messageComps/Message2'
import Buttons from './components/buttons/Buttons'
import BetPointDisp from './components/betPointDisp/betPointDisp'
import Message3 from './components/messageComps/Message3'
import Message4 from './components/messageComps/Message4'
import Guidance from './components/guidance/Guidance'
import GameDetail from './components/gameDetail/gameDetail'
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const Main = () => {

    // ルール説明を含むキャラクターのメッセージの表示をセクションで1度だけにする
    const [ noGuidance , setNoGuidance ] = useState<string | null>(sessionStorage.getItem('guidance'));

    const clearButtonHandler = () => {
        setNoGuidance("true");
        sessionStorage.setItem('guidance', 'true');
    }

    return (
        <Provider store={store}>
            <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
                <Header />
                <main className="container mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative">
                        <Character />
                        {!noGuidance ? 
                            <div className='bg-table-color border-4 border-black' style={{"borderRadius": "60px"}}>
                                <Guidance />
                                <div className='clearGuidance'>
                                    <button className='clearButton' onClick={() => clearButtonHandler()}>
                                        ゲームを始める
                                    </button>
                                </div>
                            </div>
                            :
                            <>
                            <div className="bg-green-800 text-white">
                                <div className="p-6 flex flex-col items-center">
                                    <div className="space-y-1 mb-4 text-center">
                                        <Message1 />
                                        <Message4 />
                                        <Message2 />
                                        <Message3 />
                                    </div>
                                    <Cards />
                                    <BetPointDisp />
                                </div>
                            </div>
                            <Buttons /> 
                            </>
                        }
                        </div>
                        <GameDetail />
                    </div>
                </main>
            </div>
        </Provider>
    )
}

export default Main
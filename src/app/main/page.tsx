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
            <div className='w-full grid md:grid-cols-2 gap-8'>
                <div>
                    <Header />
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
                        <div className='bg-table-color border-4 border-black' style={{"borderRadius": "60px"}}>
                            <Message1 />
                            <Message4 />
                            <Cards />
                            <Message2 />
                            <Message3 />
                            <BetPointDisp />
                        </div>
                        <Buttons /> 
                        </>
                    }
                </div>
                <div className='hidden md:block mt-10'>
                    <GameDetail />
                </div>
            </div>
        </Provider>
    )
}

export default Main
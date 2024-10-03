'use client';

import { useState } from 'react'
import Header from './components/Header'
import Character from './components/Character'
import Message1 from './components/Message1'
import Cards from './components/Cards'
import Message2 from './components/Message2'
import Buttons from './components/Buttons'
import BetPointDisp from './components/betPointDisp'
import Message3 from './components/Message3'
import Message4 from './components/Message4'
import Guidance from './components/Guidance'
import SideManu from './components/SideManu'

const Main = () => {

    // ルール説明を含むキャラクターのメッセージの表示をセクションで1度だけにする
    const [ noGuidance , setNoGuidance ] = useState<string | null>(sessionStorage.getItem('guidance'));

    const clearButtonHandler = () => {
        setNoGuidance("true");
        sessionStorage.setItem('guidance', 'true');
    }

    return (
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
                <SideManu />
            </div>
        </div>
    )
}

export default Main
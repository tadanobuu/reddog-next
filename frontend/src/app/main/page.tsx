'use client';

import Header from '../../features/components/main/header/Header'
import Character from '../../features/components/main/character/Character'
import Message1 from '../../features/components/main/messageComps/Message1'
import Cards from '../../features/components/main/cards/Cards'
import Message2 from '../../features/components/main/messageComps/Message2'
import Buttons from '../../features/components/main/buttons/Buttons'
import BetPointDisp from '../../features/components/main/betPointDisp/betPointDisp'
import Message3 from '../../features/components/main/messageComps/Message3'
import Message4 from '../../features/components/main/messageComps/Message4'
import GameDetail from '../../features/components/main/gameDetail/gameDetail'
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Card, CardContent } from "@/components/ui/card"

const Main = () => {

    return (
        <Provider store={store}>
            <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
                <Header />
                <main className="container mx-auto px-0 sm:px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative">
                        <Character />
                        <Card className="bg-green-800 text-white pt-12 pb-6 px-4 sm:px-6 mt-20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-700 to-green-900"></div>
                            <CardContent className="relative z-10">
                            <div className="space-y-1 text-center">
                                <Message1 />
                                <Message2 />
                                <Message3 />
                                <Message4 />
                            </div>
                            <Cards />
                            <BetPointDisp />
                            </CardContent>
                            </Card>
                            <Buttons /> 
                        </div>
                        <GameDetail />
                    </div>
                </main>
            </div>
        </Provider>
    )
}

export default Main
import {render, screen} from '@testing-library/react';
import { tools } from '../tools';

import Board from './pages/board';
import Tools from './tools';

test('leaderboard filter', () => { 
    render(<Board />);
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (15 + 1));
    let filter = Leaderboard.filter(val => {
        let userDate = new Date(val.dt);
        if (15 === 0) return val;
        return previous <= userDate && today >= userDate;
    }
    )   
    expect(filter).toEqual(Tools.between(Leaderboard, 15));
}
)





import { PlayersObj } from '../components/PlayersObj';
import { INCREMENT_PLAYERS, DECREMENT_PLAYERS } from '../actions/setPlayersActions';

const initState = {
    num: 1,
    players: [PlayersObj[0]]
};

export default (state = initState, action) => {
    switch (action.type) {
        case INCREMENT_PLAYERS:
            return state.players.length < 6
                ? {
                      //   num: state.num + 1,
                      players: [...state.players, PlayersObj[state.num]]
                  }
                : state;
        case DECREMENT_PLAYERS:
            return state.players.length > 1
                ? {
                      //   num: state.num - 1,
                      players:
                          //state.players.filter((player, index) => index !== state.num)
                          [
                              ...state.players.slice(0, state.num),
                              ...state.players.slice(state.num + 1)
                          ]
                  }
                : state;
        default:
            return state;
    }
};

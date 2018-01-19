export const INCREMENT_PLAYERS = 'INCREMENT_PLAYERS';
export const DECREMENT_PLAYERS = 'DECREMENT_PLAYERS';

export const incrementPlayers = () => {
    return {
        type: INCREMENT_PLAYERS
    };
};
export const decrementPlayers = () => {
    return {
        type: DECREMENT_PLAYERS
    };
};

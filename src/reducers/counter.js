import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0,
  dummy: 'dumbdumb',
  dumbObject: {
    d: 0,
    u: 1,
    m: 2,
    b: 3,
  },
};

// state 가 undefined 일때 initialState 실행 (ES6)
export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT :
      return {
        ...state, // 기존에 있는 값을 불러옴 (spread)
        number: state.number + 1,
        dumbObject: { ...state.dumbObject, u: 0 },
      };
    case types.DECREMENT :
      return {
        ...state,
        number: state.number - 1,
        dumbObject: { ...state.dumbObject, u: 0 },
      };
    default :
      return state;
  }
}

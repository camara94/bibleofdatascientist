import { COURS  } from './../shared/course';
import { ABOUTME  } from './../shared/about';

export const initialState = {
    courses: COURS,
    about: ABOUTME
}

export const Reducer = (state = initialState, action) => {
    return state;
}
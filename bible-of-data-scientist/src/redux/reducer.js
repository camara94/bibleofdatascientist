import { COURS } from './../shared/course';
import { ABOUTME } from './../shared/about';
import { DATASCIENCE } from './../shared/datascience';

export const initialState = {
    courses: COURS,
    about: ABOUTME,
    datascience: DATASCIENCE
};

export const Reducer = (state = initialState, action) => {
    return state;
}
import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: GenerationType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up') {
                return [...state].sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })
            }
            if(action.payload === 'down') {
                return [...state].sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
            }
            return state;
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload);
        }
        default: return state
    }
}

type GenerationType = SortType | CheckType;

type SortType = ReturnType<typeof sortAC>
export const sortAC = (sortBy: 'up' | 'down') => {
    return {
        type: 'sort',
        payload: sortBy
    } as const
}

type CheckType = ReturnType<typeof checkAC>
export const checkAC = (age: number) => {
    return {
        type: 'check',
        payload: age,
    } as const
}
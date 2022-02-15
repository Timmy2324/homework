const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: GeneralType): typeof initState=> { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, isLoading: action.payload.isLoading};
        }
        default: return state;
    }
}

type GeneralType = LoadingACType;

type LoadingACType = ReturnType<typeof loadingAC>;
export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'CHANGE-LOADING',
        payload: {isLoading},
    } as const
} // fix any
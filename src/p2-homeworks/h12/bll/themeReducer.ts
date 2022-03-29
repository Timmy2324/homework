
export enum Theme {
    dark = 'dark',
    red = 'red',
    some = 'some',
}

type StateType = {
    theme: Theme
}

const initState: StateType = {
    theme: Theme.some
};

export const themeReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.payload.theme};
        }
        default: return state;
    }
};

type ActionType = ChangeThemeType;

type ChangeThemeType = ReturnType<typeof changeTheme>
export const changeTheme = (theme: Theme) => {
    return {
        type: 'CHANGE-THEME',
        payload: {
            theme
        }
    } as const
};
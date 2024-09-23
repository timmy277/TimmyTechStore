import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface User {
    profileAvatar: string;
    email: string;
    password: string;
}

export interface UserState {
    user: User| null;

}

const initialState: UserState = {
    user: null,

}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails : (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            // console.log("user_detail", action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions

export default userSlice.reducer
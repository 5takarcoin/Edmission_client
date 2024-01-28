import { User } from "@/types/UserType"
import { createSlice } from "@reduxjs/toolkit"


const initialState: User = {} as User

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            return {...state, ...action.payload}
        },
        logout() {
            return {} as User
        },
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer
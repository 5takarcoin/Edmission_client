import { User } from "@/types/UserType"
import { createSlice } from "@reduxjs/toolkit"


const initialState: User | {} = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            return {...initialState, ...action.payload}
        },
        logout() {
            return {}
        },
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer
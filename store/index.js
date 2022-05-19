export const state = () => ({
    counter: 0,
    isLogedin: false,
    currentUser: null
})
  
export const mutations = {
    increment(state, number) {
        state.counter += number
    },
    login(state, role){
        state.currentUser = [
            {
                "user_id": 1,
                "role": role,
                "firstname": "Demo",
                "lastname": "User",
            },
        ]
    }   
}
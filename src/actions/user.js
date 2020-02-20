export const addUser = (data) => {
    return {
        type: 'addUser',
        payload: data
    }
}
export const removeUser = () => {

    return {
        type: 'removeUser'
    }
}
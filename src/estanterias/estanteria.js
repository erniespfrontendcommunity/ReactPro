const intitialState = {
    arroz: 1
}

export default (state = intitialState, evento) => {
    switch(evento.type) {
        case 'incrementar':
            return {...state, arroz: state.arroz + 1}
        case 'decrementar':
            return {...state, arroz: state.arroz - 1}
        default:
            return state
    }
}
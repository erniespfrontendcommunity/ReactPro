const intitialState = {
    rotacion: 'right'
}

export default (state = intitialState, evento) => {
    switch(evento.type) {
        case 'incrementar':
            return {...state, rotacion: 'right'}
        case 'decrementar':
            return {...state, rotacion: 'left'}
        default:
            return state
    }
}
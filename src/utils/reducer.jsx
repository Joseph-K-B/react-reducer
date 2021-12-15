const initialCount = 0

function countReducer(count, action) {
    switch (action.type) {
        case 'increment': {
            return count + 1
        }

        case 'decrement': {
            return count - 1
        }

        case 'reset': {
            return initialCount
        }

        default: {
            throw new Error('How could you possibly mess this up?')
        }
    }
}

export default countReducer;
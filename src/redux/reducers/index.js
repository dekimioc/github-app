import { combineReducers } from 'redux'
import{ usersReducer} from './usersReducer'
import{ searchReducer} from './searchReducer'
import { repositoryReducer } from './repositoryReducer'

export default combineReducers({
    usersList: usersReducer,
    search: searchReducer,
    repos: repositoryReducer
})
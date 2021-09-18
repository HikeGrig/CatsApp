import * as CatActionCreators from './cat'
import * as CategoryActionCreators from './category'

export default {
    ...CategoryActionCreators,
    ...CatActionCreators
}

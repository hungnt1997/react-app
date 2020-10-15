import { connect } from 'react-redux'
import { setVisibilityFilter } from '../Action'
import Link from '../Component/Link'



const mapStateToProps = (state, ownProps) => {
    return {
      active: ownProps.filter === state.visibilityFilter
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
    }
  }
  
  const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
  
  export default FilterLink
import { connect } from 'react-redux'

import Home from '../components/Home';
import {addtocart} from '../Services/Actions/action'


const mapStateToProps = state=>({

})
const mapDispatchToProps = dispatch=>({
    addcarthandler : data=>dispatch(addtocart(data))
})

export default connect (mapStateToProps,mapDispatchToProps)(Home)



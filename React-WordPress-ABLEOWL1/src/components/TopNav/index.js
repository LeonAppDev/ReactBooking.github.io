import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getPages } from 'reducers/pagesEndPoint/actions';
import { getPosts } from 'reducers/postsEndpoint/actions';
import { pagesInfoSelector } from 'reducers/pagesEndPoint/selectors';
import { postsInfoSelector } from 'reducers/postsEndpoint/selectors';
import style from './style';
import HeaderLogo from './HeaderLogo';


const mapStateToProps = state => ({
  pages: pagesInfoSelector(state),
  posts: postsInfoSelector(state),
});


const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  getPages: () => dispatch(getPages()),
});




export class TopNav extends Component {
  static propTypes = {
    pages: ImmutablePropTypes.list,
    posts: ImmutablePropTypes.list,
    getPages: PropTypes.func,
    getPosts: PropTypes.func,
    // imageSrc: PropTypes.string,
  };
  static defaultProps = {
    pages: Map(),
    posts: Map(),
    getPages: () => {},
    getPosts: () => {},
    // imageSrc:'./wp-content/themes/react-wordpress-ableowl/image/Logo.svg',
  };

  componentDidMount() {
    this.props.getPages();
    this.props.getPosts();
  }

 constructor(props)
 {
    super(props);

    // this.state = {focus:null};


 }

handleClick(id)
{
  //  this.setState({focus:id});

}

  render() {
    const { pages,imageSrc} = this.props;

      return(
      <header>
     <nav className={style.navClass}>
       <div className={style.containerFluid}>
       <HeaderLogo/>
     {
       <div className={style.navMain}><div className={style.navList} id="navbar"><ul className={style.ulNav}>
               {pages.map(page=>(<li><Link key={page.get('id')} to={`/${page.get('slug')}`} style={{marginRight:'10px'}}  onClick={()=>this.handleClick(page.get('id'))} >{page.getIn(['title','rendered'])}</Link></li>))}
               </ul></div></div>
     }
     </div>
     </nav>
      </header>
);
     }
}


export default connect(mapStateToProps, mapDispatchToProps)(TopNav);

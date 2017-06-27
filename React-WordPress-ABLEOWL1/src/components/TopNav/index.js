import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getPages } from 'reducers/pagesEndPoint/actions';
import { getPosts } from 'reducers/postsEndpoint/actions';
import { pagesInfoSelector } from 'reducers/pagesEndPoint/selectors';
import { postsInfoSelector } from 'reducers/postsEndpoint/selectors';
<<<<<<< HEAD

=======
// import styleTopNav from './style';
>>>>>>> 0f2fedb26fd37953641f6882f5a20c321d40cedb

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
<<<<<<< HEAD
    const { pages,imageSrc} = this.props;
     const styleNav = (<div>test</div>);
      return(
      <header>

      {
        pages.map(page =>{

          let style='';
          if(this.state.focus==page.get('id'))
=======
    const { pages } = this.props;

      return (
        <header>
>>>>>>> 0f2fedb26fd37953641f6882f5a20c321d40cedb
          {

            pages.map(page =>
              <Link key={page.get('id')} to={`/${page.get('slug')}`} onClick={()=>this.handleClick(page.get('id'))} >{page.getIn(['title','rendered'])}</Link>
            )
          }
<<<<<<< HEAD
         return <li>{styleNav}<Link key={page.get('id')} to={`/${page.get('slug')}`} style={{marginRight:'10px'}} className={style} onClick={()=>this.handleClick(page.get('id'))} >{page.getIn(['title','rendered'])}</Link></li>;
        })
      }
      </header>
);
     }
=======
        </header>
      );
  }
>>>>>>> 0f2fedb26fd37953641f6882f5a20c321d40cedb
}


export default connect(mapStateToProps, mapDispatchToProps)(TopNav);

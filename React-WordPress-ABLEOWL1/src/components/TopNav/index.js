import React, { PropTypes, Component } from 'react';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getPages } from 'reducers/pagesEndPoint/actions';
import { getPosts } from 'reducers/postsEndpoint/actions';
import { pagesInfoSelector } from 'reducers/pagesEndPoint/selectors';
import { postsInfoSelector } from 'reducers/postsEndpoint/selectors';
<<<<<<< Updated upstream
import StyleNav from './StyleNav';

=======
// import styleTopNav from './style';
import MenuItems from './MenuItems';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    const { pages,imageSrc} = this.props;
    var MenuGroup = [];



      return(
      <header>
      {
        pages.map(page =>{

         return <li> <Link key={page.get('id')} to={`/${page.get('slug')}`} style={{marginRight:'10px'}}  onClick={()=>this.handleClick(page.get('id'))} >{page.getIn(['title','rendered'])}</Link></li>;
       })
      
      }

      </header>
);
     }
=======
    const { pages } = this.props;

      return (
        <header>
          {

            pages.map(page =>
              <MenuItems key={page.get('id')} to={`/${page.get('slug')}`} onTouchTap={()=>this.handleClick(page.get('id'))} content={page.getIn(['title','rendered'])} />,
            )
          }
        </header>
      );
  }
>>>>>>> Stashed changes
}


export default connect(mapStateToProps, mapDispatchToProps)(TopNav);

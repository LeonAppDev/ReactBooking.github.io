import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getPages } from 'reducers/pagesEndPoint/actions';
import { getPosts } from 'reducers/postsEndpoint/actions';
import { pagesInfoSelector } from 'reducers/pagesEndPoint/selectors';
import { postsInfoSelector } from 'reducers/postsEndpoint/selectors';

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
    imageSrc: PropTypes.string,
  };
  static defaultProps = {
    pages: Map(),
    posts: Map(),
    getPages: () => {},
    getPosts: () => {},
    imageSrc:'',
  };

  componentDidMount() {
    this.props.getPages();
    this.props.getPosts();
  }

 constructor(props)
 {
    super(props);

    this.state = {focus:null};


 }

handleClick(id)
{
   this.setState({focus:id});

}

  render() {
    const { pages } = this.props;

    const navClass = ['navbar ','navbar-default ','navbar-fixed-top ','header-bg'].join('');
    const container = 'container-fluid';
    const navHeader = 'navbar-header';
    const navButton = ['navbar-toggle ','collapsed'].join('');
    const navMain='nav-main';
    const navList = ['navbar-collapse ','collapse'].join('');
      const ulNav = ['nav ','navbar-nav'].join('');
      const logoStyle = 'navbar-brand';
      const logoNavi = 'www.ableowl.com';
    var spanGroup=[];

         for (let i=0;i<4;i++)
         {
           let spanClass = '';
           if(i==0)
           {
           spanClass='sr-only';
           spanGroup.push(<span className={spanClass}>{'Toggle navigation'}</span>);
         }
         else
         {
           spanClass='icon-bar';
           spanGroup.push(<span className={spanClass}></span>);
         }
       }

      return(
      <header>
      <nav className={navClass}>
      <div className={container}>
      <div className={navHeader}>
      <button className={navButton}>
      {spanGroup}
      </button>
      <a className={logoStyle}>
      <img src={this.props.imageSrc}/>
      </a>
      </div>
      <div className={navMain}>
      <div className={navList}>
      <ul className={ulNav}>
      {

        pages.map(page =>{

          let style='';
          if(this.state.focus==page.get('id'))
          {
            style='focused';
          }

       return <li><Link key={page.get('id')} to={`/${page.get('slug')}`} style={{marginRight:'10px'}} className={style} onClick={()=>this.handleClick(page.get('id'))} >{page.getIn(['title','rendered'])}</Link></li>;
        })
      }
      </ul>
      </div>
      </div>
      </div>
      </nav>
      </header>
);
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);

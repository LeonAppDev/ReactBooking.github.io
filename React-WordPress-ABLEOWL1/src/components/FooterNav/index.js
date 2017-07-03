import React,{PropTypes,Component} from 'react';
import style from './style';
import FooterLogo from './FooterLogo';
import {connect} from 'react-redux';
import {getPages} from 'reducers/pagesEndPoint/actions';
import {pagesInfoSelector} from 'reducers/pagesEndPoint/selectors';
import {Link} from 'react-router-dom';
import {Map} from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';


const MapStateToProps = state=>({
  pages:pagesInfoSelector(state),
  stateInfo:state,
});

const MapDispatchToProps = dispatch=>({

  getPages:()=>dispatch(getPages()),
});


export class FooterNav extends Component{


  static propTypes={

    stateInfo: PropTypes.object,
    pages:ImmutablePropTypes.list,
    getPages:PropTypes.func,
    }

  static defaultProps={
     stateInfo:{},
     pages: Map(),
     getPags:()=>{},
 }

  ComponentDidMount()
  {
    this.props.getPages();
  }


  render()
  {
    const { pages,stateInfo} = this.props;

    return(
      <div>

      <footer>
      <FooterLogo/>
      <div className={style.footerTop}>
      <div className={style.footerNav}>
      <ul>
      {pages.map(page=><li><Link key={page.get('id')} style={{marginRight:'10px'}} to={`/${page.get('slug')}`}>{page.getIn(['title','rendered'])}</Link></li>)}
      {console.log(stateInfo)}
      </ul>
      </div>
      </div>
      </footer>
      <div className={style.footerBot}>
          Copyright © {new Date().getFullYear()},<span><a href={style.homePage}>AbleOwl</a>.</span>All Rights Reserved. v1.0
      </div>
      </div>

    );
  }

}


export default connect(MapStateToProps,MapDispatchToProps)(FooterNav);

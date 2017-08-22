import React,{Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class VerifiedTextField extends Component{

static propTypes =
{
data:PropTypes.object.isRequired,
onChange:PropTypes.func.isRequired,
value:PropTypes.string,
};

static defaultProps = {

data:{},
onChange: ()=>{},
value:'',

};

constructor(props)
{
  super(props);
   this.state={errorMessage:''};
}


render()
{
  const handleBlur=e=>{

    var str = e.target.value;

    if(str.match(/^[1-9]+\d*$/))
     {
       this.setState({errorMessage:''});
       this.props.onChange(e.target.value);

     }
     else {
      this.props.onChange('');
       this.setState({errorMessage:'Your input should be a positive integer start with 1-9'});
     }

  }

  const {data,value} = this.props;

return(
  <div>
  <TextField id={data.id} floatingLabelText={data.floatingLabelText} onBlur={handleBlur} errorText={this.state.errorMessage} />
  </div>
)
}
}

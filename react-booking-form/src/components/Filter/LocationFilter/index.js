import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styles from './styles';

const countrys = [
  <MenuItem key={1} value="AL" primaryText="Alabama" />,
  <MenuItem key={2} value="AK" primaryText="Alaska" />,
  <MenuItem key={3} value="AZ" primaryText="Arizona" />,
  <MenuItem key={4} value="AR" primaryText="Arkansas" />,
  <MenuItem key={5} value="CA" primaryText="California" />,
  <MenuItem key={6} value="CO" primaryText="Colorado" />,
  <MenuItem key={7} value="CT" primaryText="Connecticut" />,
  <MenuItem key={8} value="DE" primaryText="Delaware" />,
  <MenuItem key={9} value="DC" primaryText="District Of Columbia" />,
  <MenuItem key={10} value="FL" primaryText="Florida" />,

];
class LocationFilter extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
   const {value} = this.state;
   return (
     <div>
      <SelectField
        value={value}
        onChange={this.handleChange}
        style={styles.selectField}
      >
        {countrys}
      </SelectField>
     </div>
   );
  }
}

export default LocationFilter;

var React = require('react');

class Popular extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      selectedLanguage:'All'    };

      this.updateLanguage = this.updateLanguage.bind(this);
  }

 updateLanguage(lang)
 {
   this.setState(
     {selectedLanguage:lang}
   );

 }
  render()
  {

    var langurages = ['All','Javascript','Ruby','CSS','Python'];
    return (
      <ul className ='languages'>
      {
        langurages.map(
          (lang)=><li
                    style= {this.state.selectedLanguage===lang?{color:'#d0021b'}:null}
                    onClick={this.updateLanguage.bind(null,lang)}
                    key={lang}>{lang}</li>
        )
      }
      </ul>
    )
  }
}

module.exports = Popular;

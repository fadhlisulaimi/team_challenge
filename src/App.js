import './css/style-main.css';
import React from 'react';
import axios from 'axios';
import Spinner from './components/Spinner';
import Error from './components/Error';
import SearchBar from './components/SearchBar';
import PersonList from './components/PersonList';
import ConfirmDialog from './components/ConfirmDialog';

class App extends React.Component {
  state = {
    isError: false,
    persons:[],
    tempPersons: [],
    isSearchResultEmpty: false,
    dialogPhone: ""
  }

  componentDidMount(){
    var that = this;

    //to purposely delaying the call
    setTimeout(function(){
      that._fetchUserData();
    }, 0);
  }

  _fetchUserData(){
    axios.get('https://jsonplaceholder.typicode.com/users ')
    .then(res => {
      this.setState(
        {
          persons: res.data,
          tempPersons: res.data
        }
        );
    })
    .catch(function(error) {
      this.setState({error: true});
    });
  }

  _onCallButtonClick = (event) => {
    this.setState({
      dialogPhone : event.currentTarget.value
    })
  }

  _onCancelButtonClick = () => {
    this.setState({
      dialogPhone : ""
    })
  }

  _onHandleChange = (event) => {
    var that  = this;
    let tmpList = [];
    if(event.target.value !== ""){
      tmpList = this.state.persons.filter(person => {
        return person.name.toUpperCase().includes(event.target.value.toUpperCase()) 
            || person.username.toUpperCase().includes(event.target.value.toUpperCase())
            || person.email.toUpperCase().includes(event.target.value.toUpperCase());
      })
      
    }else{
      tmpList = this.state.tempPersons
    }

    this.setState({
      isSearchResultEmpty: tmpList.length === 0 ? true : false,
      persons: tmpList
    });
  }

  _showMainLayout = (persons, isSearchResultEmpty) => {
    if(!isSearchResultEmpty && persons.length === 0){
      return <Spinner description = "Fetching users data..." />;
    }else{
      return(
      this.state.isError 
      ? <div><Error description="Unable to retrieve users..." /></div>
      : <div className = "mainLayout">
        <SearchBar onSearchChange={this._onHandleChange}/>
        {
        isSearchResultEmpty 
        ?  <Error description="No results" />
        :  <PersonList persons = {this.state.persons} onCallButtonClick={this._onCallButtonClick}/>
        }
      </div>
      );
      
    }
  }

  render(){
    const persons = this.state.persons;
    const isSearchResultEmpty = this.state.isSearchResultEmpty;
    let dialogBox;

    if(this.state.dialogPhone.length !== 0){
      let phone = this.state.dialogPhone;
      dialogBox = <ConfirmDialog 
        title="Contact:"
        subHeading={phone} 
        onCancelButtonClick = {this._onCancelButtonClick}
        primaryDescription = {phone}
        dangerDescription = "Close"
      />;
    }
    return(
      <div className = "layout-container">
        {dialogBox}
        {this._showMainLayout(persons, isSearchResultEmpty)}
      </div>

      
    );
  }
}

export default App;

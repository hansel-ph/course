import React from 'react';
import {connect} from 'react-redux';
import {setName,add_video,fetchDog,startAddExpense,startSetVideos} from '../actions/person';

class AddVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newname: '', 
    };
  }

  handlesetName = (e) => {
    this.setState({ newname: e.target.value });
  };

  changeName=()=>{
    this.props.dispatch(setName(this.state.newname));
    console.log(this.props.person.results,this.props.person.videos);
    

  };

  addOneVideo=()=>{
    //this.props.dispatch(add_video({id:5,video_name:'aerosmith'}));
    //this.props.dispatch(fetchDog());
    this.props.dispatch(startAddExpense({url:'p.com',description:'the turtles featuring'}));
    console.log(this.props.person.videos);
  }

  render() {
    
    return (
      <div>
     <h1>{this.props.person.name}</h1>   
    <input  type="text" onChange={this.handlesetName}/>
    <button onClick={this.changeName}>change</button>
    <button onClick={this.addOneVideo}>add AddVideo</button>
      
      </div>
    );
  }
}

  const mapStateToProps=(state)=>{
    return {
        person:state.person
    }
};

  export default connect(mapStateToProps)(AddVideo);
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <Greeting />
      );
   }
}

class Greeting extends React.Component{
   render(){
      return (
            <div className = "row greeting">
               <div className = "col-md-4"></div>
               <div className = "col-md-4 textCenter">
                  <h3 className = "alert alert-success" >A React Todos App</h3>
               </div>
               <div className = "col-md-4"></div>
            </div>
         );
   }
}

export default App;
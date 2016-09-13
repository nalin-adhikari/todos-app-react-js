import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div className = "row marginTop120">
         	<div className = "col-md-4"></div>
         	<div className = "col-md-4 textCenter">
         		<h2 className = "alert alert-info" >Hello World</h2>
         		<h4 >from</h4>
         		<h3 className = "alert alert-success" >A React Todos App</h3>
         	</div>
         	<div className = "col-md-4"></div>
         </div>
      );
   }
}

export default App;
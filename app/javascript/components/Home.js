import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderNavbar = () => {
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/posts">Posts <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/users/sign_out">Sign out</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

  render() { 
    return ( 
      <div>
        {this.renderNavbar()}
      </div>
     );
  }
}
 
export default Home;
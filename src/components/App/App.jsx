import React, { PropTypes } from 'react';
import Week from '../Week';

require('./App.scss');

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="appContainer">
          <Week />
        </div>
    )
  }
}

App.propTypes = {

};

export default App;

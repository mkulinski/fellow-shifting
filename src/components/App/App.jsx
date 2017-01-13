import React, { PropTypes } from 'react';
import Week from '../Week';

require('./App.scss');

class App extends Component {
  constructor() {
    super();
    this.state = {
      day: ['Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.', 'Sun.'],
      jHackHour: [
        { name: '', fellow: '', ass: true },
        { name: '', fellow: '', ass: false },
        { name: '', fellow: '', ass: false },
      ],
      sHackHour: [
        { name: 'Add Linked Lists', fellow: 'Simon', date: '' },
        { name: 'Super Balanced Tree', fellow: 'Simon' },
        { name: 'Repeat Numbers', fellow: 'Simon' },
      ],
    };
  }

  render() {
    return (
        <div className="appContainer">
          <Week
            {...this.state}
          />
        </div>
    );
  }
}

App.propTypes = {

};

export default App;

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WorkoutsFeed extends React.Component {

  render() {
    return (
      <div className="workouts-feed">

        <Link to='/home/workouts/new'><button>New Workout</button></Link>
        
      </div>
    );
  }
}

export default withRouter(WorkoutsFeed);

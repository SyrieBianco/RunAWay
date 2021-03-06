import React from 'react';
import { withRouter } from 'react-router-dom';

class NewWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      route_id: null,
      title: '',
      notes: '',
      distance: 0,
      elevation_change: 0,
      duration_seconds: 0,
      biked: null,
      date_time: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }
  componentDidMount() {
    this.props.fetchRoutes();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createWorkout(this.state)
      .then(data => this.props.history.push(`/home/workouts/${data.workout.id}`));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  handleRadio(event) {
   const biked = event.currentTarget.value === 'true' ? true: false;
   this.setState({ biked });
 }

  render() {
    const { biked } = this.state;
    const { routes } = this.props;
    // also this could be a scrolling modal IF TIME, MAKE SELECT ROUTE A SCROLLING MODAL
    return (
      <section className="new-workout-page">
        <ul>{this.errors()}</ul>
        <form className="workout-form" onSubmit={this.handleSubmit}>
          <select
            value={this.state.route_id}
            onChange={this.update('route_id')}>
            <option selected="selected" disabled="true" value="">Select Premade Route (optional)</option>
            {routes.map((route) => {
              return <option value={route.id} key={route.id}>{route.name}</option>;
              })}
            </select>
          <label><h3>Workout Title</h3>
            <input
              type="text"
              value={this.state.title}
              placeholder="Route Title"
              onChange={this.update('title')}
            />
          </label>
          <label>
            <h3>Distance (miles)</h3>
            <input
              type="number"
              value={this.state.distance}
              placeholder="Distance (miles)"
              onChange={this.update('distance')}
            />
          </label>
          <label>
            <h3>Duration (for some reason put seconds, change this to take in hours, minutes, seconds)</h3>
            <input
              type="number"
              value={this.state.duration_seconds}
              placeholder="Duration"
              onChange={this.update('duration_seconds')}
            />
          </label>
          <label>
            <h3>Elevation change</h3>
            <input
              type="number"
              value={this.state.elevation_change}
              onChange={this.update('elevation_change')}
            />
          </label>
          <label>
            <input
              type="radio"
              name="biked"
              value="true"
              checked={biked === true}
              onChange={this.handleRadio}
            />Bike
          </label>
          <label>
            <input
              type="radio"
              name="biked"
              value="false"
              checked={biked === false}
              onChange={this.handleRadio}
            />Run
          </label>
          <label><h3>Notes</h3>
            <input
              value={this.state.notes}
              placeholder="Notes"
              onChange={this.update('notes')}
            />
          </label>
          <button type="submit">Create Workout</button>
        </form>
      </section>
    );
  }
}

export default withRouter(NewWorkout);

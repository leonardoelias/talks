import React, { Component } from 'react'

const API = 'https://codepen.io/jobs.json';

class App extends Component {
    constructor(props) {
      super(props)

      this.state = {
        jobs: [],
        isLoading: false,
        error: null,
      }
    }

    fetchData(){
      fetch(API)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ jobs: data.jobs, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      this.fetchData()
    }

    render() {
      const { hits, error, isLoading } = this.state;

      if (error) {
        return <p>{error.message}</p>;
      }

      if (isLoading) {
        return <p>Loading</p>
      }

      return (
        <div>
          <h1>Jobs!</h1>
          {this.state.jobs.map(function(job, index) {
            return (
              <div className="job">
                <a href={job.url} target="_blank">
                  {job.company_name}<br />
                  {job.term} {job.title}
                </a>
              </div>
            )
          })}
        </div>
      )
    }
}

export default App

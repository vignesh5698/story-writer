import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class ViewAllStories extends Component {
  constructor(props) { 
    super(props);
    this.state = { 
      storiesList: []
    }
  }

  componentDidMount() {
    this.getAllStories();
  }

  getAllStories = () => {
    axios.get('/posts.json')
    .then((response) => {
      this.setState({ storiesList: response.data });
    })
    .catch((err) => {
      console.log('Error while getting data from server : ',err);
    });
  }

  getTableRow = (story, index) => {
    const storyUrl = `/posts/${story.id}`;
    const authorName = _.head(story.email.split('@'));
    return(
      <tr key={index}>
        <td>
          <a href={storyUrl}>
            {story.title}
          </a>
        </td>
        <td>
          <a href={storyUrl}>
            {authorName}
          </a>
        </td>
    </tr>
    )
  }

  renderStories = () => {
    const { storiesList } = this.state;
    const tableContent = _.map(storiesList, (story, index) => {
      return this.getTableRow(story, index);
    })
    return(
      <table  className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Story title</th>
            <th scope="col">Written by</th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          {tableContent}
        </tbody>
      </table>
    )
  }

  render() { 
    return ( 
      <div>
        {this.renderStories()}
      </div>
    );
  }
}
 
export default ViewAllStories;
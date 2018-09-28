import React, { Conponent} from 'react';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
        todos: []
    };
  }

  componentDidMount() {
    fetch(`localhost:3000/api/mock`).then(res => {
        this.setState({ todos: res.articles });
    });
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
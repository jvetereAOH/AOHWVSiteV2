import React, { Component } from 'react';
import ColPreview from './ColPreview';
import EffectBlog from './EffectBlog';

class BlogPreview extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }
  render() {
    return (
      <div >
      {this.state.matches && (<EffectBlog/>)}
      {!this.state.matches && (<ColPreview/>)}
      </div>
    );
  }
}

export default BlogPreview;
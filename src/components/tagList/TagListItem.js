import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleTag } from '../../redux/actions/tagActions';

class TagListItem extends Component {
  handleClick = (event) => {
    this.props.toggleTag(event.target.dataset.id);
  };
  render() {
    let selected = 'item';
    if (this.props.tag.selected) {
      selected += ' selected';
    }
    return (
      <div onClick={this.handleClick.bind(this)} data-id={this.props.tag.tagId} style={this.props.tag.style} className={selected}>{this.props.tag.name}</div>
    );
  }
}

const mapDispatchToProps = {
  toggleTag,
};

export default connect(null, mapDispatchToProps)(TagListItem);
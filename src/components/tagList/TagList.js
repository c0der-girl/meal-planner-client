import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getTags } from '../../redux/actions/tagActions';

import './tagList.css';

import TagListItem from './TagListItem';

class TagList extends Component {
  state = {
    tags: null,
  };
  componentDidMount() {
    this.props.getTags();
  }
  render() {
    const { tags } = this.props.tags;

    let tagMarkup = tags ? (
      tags.map(tag => <TagListItem key={tag.tagId} tag={tag} />)
    ) : <div/>;

    return (
      <div className="tag-list container">
        {tagMarkup}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tags: state.tags
});

export default connect(
  mapStateToProps,
  { getTags }
)(TagList);
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProbTypes from 'prop-types';
import { Tag, TagButton, TagsHeader, TagsContainer, Container } from './tags';

/**
 * Component holding the tags in a container.
 *
 * @param {object}   props Props passed to Tags component.
 * @param {function} props.onTagSelect Changes previewed articles based on tag selection.
 *
 * @return {JSX.Element} Container holding all the tags of the articles.
 */
function Tags({ onTagSelect }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function getTags() {
      let response = await axios.get('http://localhost:3600/getTags');
      response = response.data;
      setTags(response);
    }
    getTags();
  }, []);

  return (
    <Container>
      <TagsContainer>
        <TagsHeader>Popular Tags</TagsHeader>
        {tags.map((item) => (
          <TagButton key={item.id}>
            <Tag onClick={() => onTagSelect(item.name)}>{item.name}</Tag>
          </TagButton>
        ))}
      </TagsContainer>
    </Container>
  );
}

Tags.propTypes = {
  onTagSelect: ProbTypes.func.isRequired,
};

export default Tags;

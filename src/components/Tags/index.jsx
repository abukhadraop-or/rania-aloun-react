import React, { useState, useEffect } from 'react';
import getTags from 'services/get-tags';
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

  const fetchTags = async () => {
    const { data } = await getTags();
    setTags(data);
  };

  useEffect(() => {
    fetchTags();
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

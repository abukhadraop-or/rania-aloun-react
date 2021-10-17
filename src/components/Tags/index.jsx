import React, { useState, useEffect } from 'react';
import { getAllTags } from 'services/tags-service';
import ProbTypes from 'prop-types';
import {
  Tag,
  TagButton,
  Container,
  TagsHeader,
  TagsContainer,
} from './tags.styles';

/**
 * Component holding the tags in a container.
 *
 * @param {Object}   props Props passed to Tags component.
 * @param {function} props.onTagSelect Changes previewed articles based on tag selection.
 *
 * @return {JSX.Element} Container holding all the tags of the articles.
 */
function Tags({ onTagSelect }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const { data } = await getAllTags();
      setTags(data);
    };
    fetchTags();
  }, []);

  return (
    <Container>
      <TagsContainer>
        <TagsHeader>Popular Tags</TagsHeader>
        <TagButton onClick={() => onTagSelect('allArticles')}>
          <Tag>All</Tag>
        </TagButton>
        {tags.map((item) => (
          <TagButton key={item.id} onClick={() => onTagSelect(item.name)}>
            <Tag>{item.name}</Tag>
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

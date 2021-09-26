import React, { useState, useEffect } from "react";
import { getTags } from "services/fakeTagsService";
import {
  Tag,
  TagButton,
  TagsHeader,
  TagsContainer,
  OuterTagsContainer,
} from "./tags";
import ProbTypes from "prop-types";

/**
 * return full name of the user
 * @param   {function} onTagSelect  changes page content of articles based on tag selection
 */
function Tags(props) {
  const { onTagSelect } = props;
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(getTags());
  }, []);

  return (
    <>
      <OuterTagsContainer>
        <TagsContainer>
          <TagsHeader>Popular Tags</TagsHeader>
          {tags.map((item) => (
            <TagButton key={item._id}>
              <Tag onClick={() => onTagSelect(item.name)}>{item.name}</Tag>
            </TagButton>
          ))}
        </TagsContainer>
      </OuterTagsContainer>
    </>
  );
}

Tags.propTypes = {
  onTagSelect: ProbTypes.func.isRequired,
};

export default Tags;

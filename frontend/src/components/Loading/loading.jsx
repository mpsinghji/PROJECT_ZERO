import React, { useEffect } from "react";
import {
  LoadingPageContainer,
  LoadingContentContainer,
  LoadingBox,
  Heading,
  LoadingSpinner,
} from "../../styles/LoadingStyles.js";

const Loading = () => {
  return (
    <LoadingPageContainer>
      <LoadingContentContainer>
        <LoadingBox>
          <LoadingSpinner />
          <Heading>Loading, please wait...</Heading>
        </LoadingBox>
      </LoadingContentContainer>
    </LoadingPageContainer>
  );
};

export default Loading;

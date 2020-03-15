import React from "react";
import { Badge } from "theme-ui";

export const ResourceType = ({ children }) => <Badge>{children}</Badge>;
const Resource = ({ name, url, type, description }) => (
  <div>
    {type && <ResourceType>{type}</ResourceType>}
    <h2> {name}</h2> {description && description}
    <p>
      Website: <a href={url}>{url}</a>
    </p>
  </div>
);
export default Resource;

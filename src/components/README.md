# Pages

This folder shows the components of the application.

- It has a Movie card component that shows the details of a movie on a card.

- It has the Movie Nominated page that shows the details of a movie that has been nominated.

- It has the page head that displays the head of the page wherever its called.

## Sample Component

```js
import React from "react";

const PageHead = ({ title }) => {
  return (
    <h1 className="uppercase page-title tracking-wide block text-3xl font-semibold">
      {title}
    </h1>
  );
};

export default PageHead;
```

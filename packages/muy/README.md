# `muy`

Build websites & apps with Gatsby & Material UI. Pronounced /ˈɛmˈjuːˈwaɪ/

## Install

```shell script
npm install muy @material-ui/core
```

## Add support to server-side rendering

On your Terminal, run:

```shell script
npm install gatsby-plugin-material-ui @material-ui/styles
```

Add the following to your `gatsby-config.js` file:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-material-ui'
    }
  ]
}
```

The default options should be enough to cover the most common use cases. 


For custom and advanced examples,
please check [gatsby-plugin-material-ui on Gatsby](https://www.gatsbyjs.org/packages/gatsby-plugin-material-ui/#gatsby-plugin-material-ui)

## Usage

### Importing/requiring components

#### ES6 way

```jsx harmony
import React from 'react'
import { H1 } from 'muy'

// ...

const YourComponent = () => <H1 />
```

#### RequireJS way

```jsx harmony
const React = require('react')
const { H1 } = require('muy')

// ...

const YourComponent = () => <H1 />
```

### Customizing Markdown & MDX Components

With `useMDXComponents()`, you can replace every HTML element that Markdown renders with Muy and Material UI implementation.

```jsx harmony
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { useMDXComponents } from "muy"

export default function Layout({ children }) {
  const components = useMDXComponents()
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}
```

Don't forget to install all dependencies:

```shell script
npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react
```

And update your `gatsby-config.js` to use `gatsby-plugin-mdx`:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx'
    }
  ]
}
```

For more info, check [Getting Started with MDX on Gatsby website](https://www.gatsbyjs.org/docs/mdx/getting-started/)

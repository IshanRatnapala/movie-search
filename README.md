# Movie Search

This application is built with [Next.js](https://nextjs.org/).

## Prerequisites

Next.js requires Node.js 12.22.0 or later.

Install dependencies with

```bash
npm install
```

## Running the application

First, build the project:

```bash
npm run build
```

Start the server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with the browser.

## Frameworks and libraries used

- [Next.js](https://nextjs.org) - used for compilation and bundling, server side rendering, routing, CSS modules with Sass support and Typescript support.
- [multi-range-slider-react-js](https://codesandbox.io/s/ywcrm) - a simple multi range slider that was used as a base and modified for this application.

## Known issues and workarounds

- OMDB api does not support requests with a year range. A workaround is used where the request is made to OMDB api without specifying a year and filtering the results in the client with the selected year range.

- The infinite scroll will not trigger if the results from filtering by year range does not exceed the offsetHeight for a scrollbar. A possible workaround would be to compare the total results with the filtered results and request the subsequent pages until a scrollbar is needed. This has not been implemented. (Caused by the year range filter workaround)

- The total result count is inaccurate when filtered by a year range. (Caused by the year range filter workaround)

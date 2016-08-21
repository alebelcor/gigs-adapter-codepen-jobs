# gigs-adapter-codepen-jobs

> A [gigs](https://github.com/alebelcor/gigs) adapter for [CodePen's job board](https://codepen.io/jobs)

[![Build Status](https://img.shields.io/travis/alebelcor/gigs-adapter-codepen-jobs/master.svg)](https://travis-ci.org/alebelcor/gigs-adapter-codepen-jobs)
[![Test coverage](https://img.shields.io/coveralls/alebelcor/gigs.svg)](https://coveralls.io/github/alebelcor/gigs)

## Install

Ensure you have [Node.js](https://nodejs.org) version 4+ installed. Then run the following:

```bash
npm install --save gigs
npm install --save gigs-adapter-codepen-jobs
```

## Usage

```js
const gigs = require('gigs');

const adapter = require('gigs-adapter-codepen-jobs');

gigs([adapter])
  .process()
  .then(gigs => {
    console.log(gigs);
    //=> [ {title: 'Senior Node.js Developer'}, ... ]
  });
```

## Related

* [gigs](https://github.com/alebelcor/gigs) - A jobs/careers/openings/positions aggregator

## License

MIT © Alejandro Beltrán

## Disclaimer

This was made for illustrative purposes.
I do not own the content generated by this tool.
All rights belong to their respective owners.
No copyright infringement intended.

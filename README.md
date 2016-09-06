# jspm Sample app

This is a very simple app that uses [jspm](http://jspm.io).

It also uses the [flexibility polyfill](https://github.com/jonathantneal/flexibility/) for compatibility with older IEs.

## Prerequisites

-  [node.js](https://nodejs.org) — you need `node` and `npm`
- `jspm` — installed globally (`npm install jspm -g`)

## Install

Clone the repo, then:

```
$ cd [repo dir]
$ npm install
$ jspm install
```

Serve it up however you like to do such things.

## Notes

- The project has pegged `jspm` at version 0.16.45 locally, since it seems like the 0.17 betas don't work with IE versions < 11. 

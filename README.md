<div align="center">
  <h1>dockerify-cli 🐳</h1>

  <p>CLI for simplifying how to dockerize NodeJS based applications</p>
</div>

<hr />


[![Version][version-badge]][package]
[![Install Size][size-badge]][package-size]
[![Downloads][downloads-badge]][npmcharts]
[![PRs Welcome][prs-badge]][prs]
[![MIT License][license-badge]][license]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]


* [About](#about)
  - [Installation](#installation)
* [Getting Started](#getting-started)
* [Commands](#commands)
  - [`dockerify-cli init`](#dockerify-cli-init)
  - [`dockerify-cli build`](#dockerify-cli-build)
* [Contributing](./CONTRIBUTING.md)

## About

**DISCLAIMER: This package is still in development and therefore it is not recommended to use it in production**

dockerify CLI aims to provide an easy way to configure and distribute NodeJS based applications using Docker.
The idea behind this CLI comes from [docker-react-app-multi-stage-node-nginx](https://github.com/jonathanpalma/docker-react-app-multi-stage-node-nginx) and the need to make the configuration process easier as well as to provide cross-platform support.

### Installation

Considering this is an executable package you don't really need to install it, instead you can use:

```sh
$ npx dockerify-cli <command>
``` 
*NOTES: You need npm v5.2 or greater. This is not working on Windows when using powershell*

There are two ways to install dockerify-cli: globally and locally.

#### Global

```sh
$ npm install -g dockerify-cli
``` 

or

```sh
$ yarn global add dockerify-cli
``` 

#### Local

```sh
$ npm install dockerify-cli --save
``` 

or

```sh
$ yarn add dockerify-cli
``` 

## Getting Started

Using npx:
```sh
$ npx dockerify-cli init
```

or

Using installed package:
```sh
$ dockerify-cli init
```

*NOTES: You have to use `dockerify-cli.cmd` on Windows when using powershell*

**I'm still looking for a way to avoid using .cmd extension, if you have the solution please send a PR**

You will answer many questions when running the `init` command so dockerify-cli can provide the best fitting configuration for your project. However, considering that this may be opinionated based, dockerify-cli will expose the configuration files in order to you to be able to modify them.

For example:

```diff
  ├── public/
  ├── node_modules/
+ ├── server/
+ │   ├── nginx.conf
  ├── src/
+ ├── .dockerignore
  ├── .gitignore
+ ├── Dockerfile
  └── package.json
```

Please note that you can decide whether to use nginx or an express server when answering the `init` command questions.

## Commands

### dockerify-cli init

### dockerify-cli build


[downloads-badge]: https://img.shields.io/npm/dm/dockerify-cli.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/dockerify-cli.svg?style=flat-square
[license]: https://github.com/jonathanpalma/dockerify-cli/blob/master/LICENSE
[npmcharts]: http://npmcharts.com/compare/dockerify-cli
[package-size]: https://packagephobia.now.sh/result?p=dockerify-cli
[package]: https://www.npmjs.com/package/dockerify-cli
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[size-badge]: https://flat.badgen.net/packagephobia/install/dockerify-cli
[version-badge]: https://img.shields.io/npm/v/dockerify-cli.svg?style=flat-square

[github-watch-badge]: https://img.shields.io/github/watchers/jonathanpalma/dockerify-cli.svg?style=social
[github-watch]: https://github.com/jonathanpalma/dockerify-cli/watchers
[github-star-badge]: https://img.shields.io/github/stars/jonathanpalma/dockerify-cli.svg?style=social
[github-star]: https://github.com/jonathanpalma/dockerify-cli/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20dockerify-cli!%20https://github.com/jonathanpalma/dockerify-cli%20%F0%9F%90%B3
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/jonathanpalma/dockerify-cli.svg?style=social

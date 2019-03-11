# dockerify-cli
A CLI for simplifying how to dockerize NodeJS based applications :whale:

[![npm](https://img.shields.io/npm/v/dockerify-cli.svg)](https://www.npmjs.com/package/dockerify-cli)
[![Install Size](https://packagephobia.now.sh/badge?p=dockerify-cli)](https://packagephobia.now.sh/result?p=dockerify-cli)
[![npm](https://img.shields.io/npm/dw/dockerify-cli.svg)](https://www.npmjs.com/package/dockerify-cli)

* [About](#about)
  - [Installation](#installation)
* [Getting Started](#getting-started)
* Commands
  - [`dockerify-cli init`](#dockerify-cli-init)
  - [`dockerify-cli build`](#dockerify-cli-add)
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

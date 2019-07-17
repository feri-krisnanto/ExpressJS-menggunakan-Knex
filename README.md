# How To Install

Express dan Node JS Framework dari dasar dengan Konsep MVC untuk API.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install this.

1. Buat Folder Baru
2. Masuk ke directori

```bash
$ npm init
```

```bash
$ npm install express --save
```

## Index.js

```'use strict';

var express = require('express');
var server = express();

server.listen(3000, function(){
    console.log('Server file sudah berjalan bos!');
});
```
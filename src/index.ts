const express = require('express');
const files = require('fs');
const path = require('path');
const resize = require('./resize.ts');

const server = express();
const port = 200;
server.get('/', function (req, res) {
  const PicName = req.query.name;
  const widthString = req.query.width;
  const heightString = req.query.height;
  const PicFormat = req.query.format;
  let width;
  let height;
  if (widthString) {
    width = parseInt(widthString);
    if (width < 1) {
      res.send('<h1>Error in parameter</h1>');
      return;
    }
  }
  if (heightString) {
    height = parseInt(heightString);
    if (height < 1) {
      res.send('<h1>Error in parameter</h1>');
      return;
    }
  }
  if (PicFormat === 'gif') {
    res.send('<h1>Error in format</h1>');
    return;
  }
  files.access(`./images/${PicName}`, files.constants.F_OK, function (err) {
    if (err) {
      res.send('<h1>Image does not Exist</h1>');
    } else if (
      `${width}x${height}-${PicName}` ===
      `./output/${width}x${height}-${PicName}`
    ) {
      console.log('ami asi');
      res.sendFile(
        path.join(__dirname, `../output/${width}x${height}-${PicName}`)
      );
    } else {
      resize(`./images/${PicName}`, PicFormat, width, height).toFile(
        `./output/${width}x${height}-${PicName}`
      );
      resize(`./images/${PicName}`, PicFormat, width, height).pipe(res);
    }
  });
});
server.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});

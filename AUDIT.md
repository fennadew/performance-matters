# Changes for better performance

## 1. Minify CSS/JS/Images
* Minify CSS
* Minify JS
* Compress images

Improves paint with in 0.67 sec and usable page with 0.51 sec

### Before
![Before](https://github.com/fennadew/performance-matters/blob/performance-3/src/assets/img/start.png "Before")

### After minifying
![After minifying](https://github.com/fennadew/performance-matters/blob/performance-3/src/assets/img/minify.png "After minifying")

## 2. Gzip
* added node module "compression" middleware for Node.js Express. The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options. (ref 1.)

Improves paint with 3.88 sec and usable page with 5.98 sec

![After gzip](https://github.com/fennadew/performance-matters/blob/performance-3/src/assets/img/gzip-low.png "After gzip")

3. Critical css and Async JS
* Load JS async by using defer in the script tag
* Add critical CSS and load the rest of the CSS Async.

Improves paint with 0.33 sec and slows down usable page with 1.2 sec

![After cssloader](https://github.com/fennadew/performance-matters/blob/performance-3/src/assets/img/css-loader.png "After cssloader")

# References
1. [Compression](https://www.npmjs.com/package/compression)

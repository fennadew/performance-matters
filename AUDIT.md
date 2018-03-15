# Changes for better performance

## 1. Minify CSS/JS/Images
* Minify CSS
* Minify JS
* Compress images

Improves with 0.51 sec

### Before
![Before](https://github.com/fennadew/performance-matters/blob/performance-2/src/assets/img/start.png "Before")

### After minifying
![After minifying](https://github.com/fennadew/performance-matters/blob/performance-2/src/assets/img/minify.png "After minifying")

## 2. Gzip
* added node module "compression" middleware for Node.js Express. The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options. (ref 1.)

Improves with 5.98 sec

![After gzip](https://github.com/fennadew/performance-matters/blob/performance-2/src/assets/img/gzip-low.png "After gzip")

# References
1. [Compression](https://www.npmjs.com/package/compression)

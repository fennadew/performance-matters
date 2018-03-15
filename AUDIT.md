# Changes for better performance

## 1. Minify CSS/JS/Images
* Minify CSS
* Minify JS
* Compress images

Improves paint with in 0.67 sec and usable page with 0.51 sec

### Before
![Before](https://github.com/fennadew/performance-matters/blob/performance-4/src/assets/img/start.png "Before")

### After minifying
![After minifying](https://github.com/fennadew/performance-matters/blob/performance-4/src/assets/img/minify.png "After minifying")

## 2. Gzip
* added node module "compression" middleware for Node.js Express. The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options. (ref 1.)

Improves paint with 3.88 sec and usable page with 5.98 sec

![After gzip](https://github.com/fennadew/performance-matters/blob/performance-4/src/assets/img/gzip-low.png "After gzip")

3. Critical CSS and Async JS
* Load JS async by using defer in the script tag
* Add critical CSS and load the rest of the CSS Async.

Improves paint with 0.33 sec and slows down usable page with 1.2 sec

![After cssloader](https://github.com/fennadew/performance-matters/blob/performance-4/src/assets/img/cssloader.png "After cssloader")

4. Font loading
* In CSS font-display: swap

Improves paint with 3 sec and slows down usable page with 0.03 sec

![After fontloader](https://github.com/fennadew/performance-matters/blob/performance-4/src/assets/img/fontloader.png "After fontloader")

# Total

Total improves paint with 7.88 sec and usable page with 5.31 sec
![start](https://github.com/fennadew/performance-matters/blob/performance-4/src/assets/img/first.png "start")
![finish](https://github.com/fennadew/performance-matters/blob/performance-4/src/assets/img/last.png "finish")


# References
1. [Compression](https://www.npmjs.com/package/compression)

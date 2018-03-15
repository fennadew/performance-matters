const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
var compression = require('compression')
const routeStatic = require('./lib/route-static');
const redirectIndices = require('./lib/redirect-indices');

const app = express();
const baseDir = 'src';
const port = process.env.PORT || 3004;

app.set('etag', false);
app.use(compression({filter: shouldCompress}))

function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
}

// static routes
app.use(routeStatic);
app.use('/static', express.static(path.join(__dirname, baseDir), { etag: false, lastModified: false }));

// dynamic pages
app.use(redirectIndices);
nunjucks.configure(baseDir, {
    autoescape: true,
    express: app,
    watch: true
});

app.get('*', (req, res, next) => {
    res.render(path.join('./', req.url, 'index.html'), {});
});

app.listen(port, (err) => {
    err ? console.error(err) : console.log(`app running on http://localhost:${port}`);
});



// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();
// const port = 5000;

// // Define subdomain routes and their targets
// const subdomains = {
//   'menu': 'http://localhost:3000',
//   'about': 'http://localhost:3000/about',
//   'contact': 'http://localhost:3000/contact',
// };

// app.use((req, res, next) => {
//   const subdomain = req.subdomains[0] || 'menu';
//   const target = subdomains[subdomain];

//   if (target) {
//     const proxy = createProxyMiddleware({
//       target,
//       changeOrigin: true,
//     });
//     proxy(req, res, next);
//   } else {
//     next();
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

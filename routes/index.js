const { Router } = require("express");
const router = Router();

router.use("/items", require('./items'));
router.get("/", (req, res, next) => {
  console.log('help');
  res.send(`
    <html>
      <body>
        <h1> Hello! </h1>
      </body>
    </html>
  `)
});

module.exports = router;

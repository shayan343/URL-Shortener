const { Router } = require("express");
const { findLongUrl } = require("../services/url-srevice");
const route = Router();

route.get("/:code", async (req, res) => {
  const code = req.params.code;

  const url = await findLongUrl(code);

  if (url) {
    return res.redirect(url.link);
  } else {
   // return res.redirect('https://google.com');
   return res.status(404).json({ error: "No such shortcode created" });
  }
});

module.exports = route;

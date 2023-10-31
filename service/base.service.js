module.exports.ipService = (req, res) => {
  try {
    const clientIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log({ ip: clientIp });
    res.json({ ip: clientIp });
  } catch (error) {
    res.json(error.message);
  }
};

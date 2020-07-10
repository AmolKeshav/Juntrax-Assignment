module.exports = {
    sayHello: (req, res) => {
        res.status(200).json({
          message: "hello to from serve features!!",
          data: {
            
          }
        });
      }
}
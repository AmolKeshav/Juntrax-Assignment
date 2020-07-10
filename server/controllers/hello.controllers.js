const utilService = require("../services/util.service");
const fs = require("fs");

const multiplyByTwo = a => a*2;

module.exports = {
    sayHello: (req, res) => {
        let a = req.body.a;
        let b = req.body.b;

        console.log(a, b);

        a = parseInt(a);
        b = parseInt(b);

        res.status(200).json({
          message: "hello to from serve features!!",
          data: utilService.add(a, b)
        });
      },

      getNginxLogs: (req, res) => {
        fs.readFile("../tests/nginx.log", (err, response) => {
          console.log(err);
          console.log(res);

          res.status(200).json({
            message: "hello to from read nginx features!!",
            data: response
          });
        })
      }
}
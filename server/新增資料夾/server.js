const express = require("express");
const cors = require("cors");
const app = express();
const sql = require('./sql')
const port = 3000;
app.use(cors());
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
///////////////////////////////////////////////////////////////////////////


app.get("/api/search/carbon", async (req, res) => {
  let select = await sql.select("*, CONVERT_TZ(`carbon_day`, '+00:00', '+08:00') as local_time","`carbon`","ORDER BY local_time DESC LIMIT 1")
  res.send(select)
});

app.post("/api/search/clam", async (req, res) => {
  let select = await sql.select("*","'clam'","ORDER BY clam_id DESC LIMIT 1")
  res.send(select)
});

app.post("/api/search/fishfarm", async (req, res) => {
  let select = await sql.select("*","fishfarm")
  res.send(select)
});

app.get("/api/search/sensor", async (req, res) => {
  let select = await sql.select("*, CONVERT_TZ(`sensor_time`, '+00:00', '+08:00') as local_time","`sensor`","ORDER BY local_time DESC LIMIT 5")
  res.send(select)
});

app.post("/api/search/login", (req, res) => {
  const data1 = req.body.name;
  const data2 = req.body.pwd;

  // console.log("1", data1);
  // console.log("2:", data2);

  Pool.query(
    "SELECT * FROM `user` WHERE `user_account` = ? AND `user_password` = ?",
    [data1, data2],
    (err, rows) => {
      if (!err) {
        if (rows && rows.length > 0) {
          console.log(rows[0]["user_name"], "歡迎登入~");
          return res.json({
            success: true,
            user: rows[0]["user_id"],
            name: rows[0]["user_name"],
          });
        } else {
          console.log("Login failed: Account or password incorrect");
          return res.json({ success: false });
        }
      } else {
        console.log("Error:", err);
        return res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      }
    }
  );
});

app.post("/api/search/register", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  const email = req.body.email;
  const pwd = req.body.pwd;
  const permissions = req.body.permissions;
  console.log(name, phone, address, email, pwd, permissions);
  let perm;
  if (permissions == "訪客") {
    perm = 1;
  } else {
    perm = 0;
  }

  Pool.query(
    "SELECT COUNT(DISTINCT user_id) AS num_users FROM user",
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      let id_num = results[0].num_users + 1;
      const sql =
        "INSERT INTO `user` (`user_id`, `user_name`, `user_account`, `user_password`, `user_phone`, `user_address`, `user_permissions`) VALUES (?, ?, ?, ?, ?, ?, ?)";
      Pool.query(
        sql,
        [id_num, name, email, pwd, phone, address, perm],
        (error, results, fields) => {
          if (error) {
            throw error;
          }
          console.log("User inserted successfully");

          return res.json({ success: true });
        }
      );
    }
  );
});

app.post("/api/search/GPT", async (req, res) => {
  const question = req.body;
  console.log("ya");
  console.log(req.body.Q);
  const firstKey = Object.keys(question)[0];
  console.log(firstKey);
  try {
    const systemMessage = {
      role: "system",
      content:
        "你是一個漁業的助手，所有回答都基於漁業助手的前提去做回應，非必要的情況下只能用中文做回應",
    };
    const userMessage = {
      role: "user",
      content: firstKey,
    };
    const assistantMessage = {
      role: "assistant",
      content: "",
    };
    const jsonBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, userMessage, assistantMessage],
      max_tokens: 2048,
      temperature: 0,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer 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",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonBody),
    });
    console.log(jsonBody);
    const responseData = await response.json();
    console.log(responseData);
    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// app.get("/api/weather", async (req,res)=>{
//   const request = require('request');
//   request('http://127.0.0.1:5000/weather', function (error, response, body) {
//         console.error('error:', error);
//         console.log('statusCode:', response && response.statusCode);
//         console.log('body:', body);
//         res.send(body)
//     });
// })

app.listen(port, () => {
  console.log(`server listen http://localhost:${port}`);
});

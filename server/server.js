const express = require("express");
const cors = require("cors");
const app = express();
const sql = require("./sql");
const cron = require("node-cron");
const port = 3000;
app.use(cors());
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
///////////////////////////////////////////////////////////////////////////

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const options = {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};
const insertData = async () => {
    let select = await sql.select("COUNT(sensor_id) AS num", `sensor`);
    // console.log(select);
    select = JSON.parse(select);
    let count = select[0].num;
    for (let i = 1; i <= 3; i++) {
        let t1, t2, p1, p2, s1, s2, o1, o2, v1, v2;
        if (i === 1) {
            t1 = 9;
            t2 = 45;
            p1 = 7;
            p2 = 10;
            s1 = 1;
            s2 = 108;
            o1 = 110;
            o2 = 250;
            v1 = 10;
            v2 = 15;
        } else if (i === 2) {
            t1 = 1;
            t2 = 41;
            p1 = 5;
            p2 = 9;
            s1 = 18;
            s2 = 25;
            o1 = 1;
            o2 = 25;
            v1 = 45;
            v2 = 50;
        } else {
            t1 = 22;
            t2 = 32;
            p1 = 7;
            p2 = 10;
            s1 = 10;
            s2 = 25;
            o1 = 1;
            o2 = 5;
            v1 = 10;
            v2 = 15;
        }

        const sensor_id = count + i;
        const sensor_num = i;
        const sensor_date = new Intl.DateTimeFormat('zh-TW', options)
            .format(new Date())
            .replace(/\//g, '-')
            .replace(',', '');
        const sensor_temperature = getRandomValue(t1, t2);
        const sensor_PH = getRandomValue(p1, p2);
        const sensor_salinity = getRandomValue(s1, s2);
        const sensor_oxygen = getRandomValue(o1, o2);
        const sensor_volume = getRandomValue(v1, v2);

        // console.log([
        //     sensor_id,
        //     sensor_num,
        //     sensor_date,
        //     sensor_temperature,
        //     sensor_PH,
        //     sensor_salinity,
        //     sensor_oxygen,
        //     sensor_volume,
        // ]);
        const columns =
            "`sensor_id`, `fishfarm_num`, `sensor_date`, `sensor_temperature`, `sensor_PH`, `sensor_salinity`, `sensor_oxygen`, `sensor_volume`";
        const values = [
            sensor_id,
            sensor_num,
            sensor_date,
            sensor_temperature,
            sensor_PH,
            sensor_salinity,
            sensor_oxygen,
            sensor_volume,
        ];
        const insert = await sql.insert("sensor", columns, values);
    }
};

// insertData();
// cron.schedule("*/30 * * * *", () => {
//     console.log("插");
//     insertData();
// });

process.stdin.resume();
app.get("/api/search/carbon", async (req, res) => {

    let select = await sql.select(
        "*, CONVERT_TZ(`carbon_day`, '+00:00', '+08:00') as local_time",
        "`carbon`",
        ""
    );

    res.send(select);
});


// app.post("/api/search/carbon", async (req, res) => {
//     const num = req.body.num;
//     console.log(num);
//     let select = await sql.select(
//     "*",
//     "`carbon`",
//     `WHERE \`carbon_num\` = ${num} AND \`co2\` IS NOT NULL`

//     )
// });


app.post("/api/search/sensor", async (req, res) => {
    const num = req.body.num;
    // console.log(req.body.num);
    let select = await sql.select(
        "*, CONVERT_TZ(`datetime`, '+00:00', '+08:00') as `datetime`",
        "`sensor`",
        `WHERE \`fishfarm_id\` = 1 ORDER BY \`datetime\` DESC LIMIT 5`
    );


    // console.log(select);
    res.send(select);
});

app.post("/api/fishfarm_data", async (req, res) => {
    const userid = req.body.userid;
    const num = req.body.num;
    console.log(num);
    let select = await sql.select(
        "*, CONVERT_TZ(`datetime`, '+00:00', '+08:00') as `datetime`",
        "`fishfarm_data`",
        `WHERE \`fishfarm_id\` = ${num} ORDER BY \`datetime\` DESC LIMIT 15`
    );
    // console.log(select);
    res.send(select);
});

app.post("/api/search/fishfarm", async (req, res) => {
    const num = req.body.num;
    let select = await sql.select("*", "fishfarm", `WHERE \`fishfarm_num\` = ${num} ORDER BY \`fishfarm_id\` DESC LIMIT 1`);
    res.send(select);
});

app.post("/api/Cal/input", async (req, res) => {
    const { num, results } = req.body;
    const carbon_day = new Intl.DateTimeFormat('zh-TW', options)
        .format(new Date())
        .replace(/\//g, '-')
        .replace(',', '');
    for (let i = 0; i < 3; i++) {
        let select = await sql.select("COUNT(carbon_id) AS num", `carbon`);
        console.log("yaa", req.body.Co2[0]);
        select = JSON.parse(select);
        let count = select[0].num;
        console.log("yaa2", count);
        const columns = [
            "`carbon_id`,`carbon_day`,`fishfarm_num`,`co2`"
        ]
        const values = [
            count + 1,
            carbon_day,
            i + 1,
            req.body.Co2[i],
        ]
        const insert = await sql.insert("carbon", columns, values);
    }
});


app.post("/api/user_fishfarm", async (req, res) => {
    const userId = req.body.user;
    console.log("Received user ID:", userId);

    if (userId != 0) {
        // 當 user ID 不為 0 時，查詢該用戶的魚場資料
        try {
            const userFishfarms = await sql.select("*", "user_fishfarm", `WHERE user_id = ${userId}`);
            const parsedUserFishfarms = JSON.parse(userFishfarms);
            
            // 取得所有 fishfarm_id
            const fishfarmIds = parsedUserFishfarms.map(farm => farm.fishfarm_id);
            console.log("Fishfarm IDs:", fishfarmIds);
            
            let detailedFishfarms = [];
            
            // 逐一查詢每個 fishfarm_id 的詳細資料
            for (const fishfarmId of fishfarmIds) {
                const fishfarmDetails = await sql.select("*", "fishfarm", `WHERE fishfarm_ID = ${fishfarmId}`);
                detailedFishfarms.push(JSON.parse(fishfarmDetails));
            }

            res.send(detailedFishfarms); // 返回結果

        } catch (error) {
            console.error("Error fetching fish farm data:", error);
            res.status(500).send({ message: "Server error" });
        }
    } else {
        // 當 user ID 為 0 時，返回所有 fishfarm 資料
        try {
            const allFishfarms = await sql.select("*", "fishfarm", "");
            const parsedAllFishfarms = JSON.parse(allFishfarms);
            res.send(parsedAllFishfarms); // 返回所有魚場資料
        } catch (error) {
            console.error("Error fetching all fishfarms:", error);
            res.status(500).send({ message: "Server error" });
        }
    }
});







app.post("/api/login", async (req, res) => {
    const userAccount = req.body.name;
    const userPassword = req.body.pwd;
    console.log("Received Account:", userAccount);
    console.log("Received Password:", userPassword);

    try {
        const result = await sql.select("*", "user", `WHERE \`user_email\` = '${userAccount}' AND \`user_password\` = '${userPassword}'`);
        console.log("Received result:", result);

        const user = Array.isArray(result) ? result[0] : JSON.parse(result)[0];
        console.log("Received User:", user);

        if (user) {
            const payload = {
                user_id: user.user_id,
                user_email: user.user_email,
                user_name: user.user_name,
                user_permissions: user.user_permissions,
                user_fishfarm_num: user.fishfarm_num,
                exp: Math.floor(Date.now() / 1000) + (60 * 60)
            };
            console.log(payload);
            const token = jwt.sign(payload, 'secret key');
            res.status(200).send({ status: true, message: '登入成功', token: token });
        } else {
            res.status(401).send({ status: false, message: '用戶名或密碼錯誤' });
        }
    } catch (err) {
        console.error("資料庫查詢錯誤：", err);
        res.status(500).json({ success: false, error: "登入失敗" });
    }
});

const jwt = require('jsonwebtoken');
const secretKey = 'secret key';

app.get('/api/validateToken', (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];  // Bearer TOKEN_STRING
    if (!token) {
        return res.status(401).json({ success: false, message: "No token provided." });
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        // 如果需要，此处还可以添加更多的验证逻辑
        res.json({ success: true, user: decoded });
    } catch (error) {
        // 如果验证失败（例如，token 过期或签名错误）
        res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
});



app.post("/api/register", async (req, res) => {
    const name = req.body.user_name;
    const phone = req.body.user_phone;
    const address = req.body.user_address;
    const email = req.body.user_email;
    const pwd = req.body.user_pwd;
    const permissions = req.body.user_option;


    let user_id = await sql.select("COUNT(`user_id`) AS num", `user`);
    user_id = JSON.parse(user_id);
    id = user_id[0].num
    //console.log(id[0].num,name, phone, address, email, pwd, permissions);
    const columns = [
        "`user_id`, `user_name`, `user_email`, `user_password`, `user_phone`, `user_address`, `user_permissions`"
    ]
    const values = [
        id + 1,
        name,
        email,
        pwd,
        phone,
        address,
        permissions
    ]
    const insert = await sql.insert("user", columns, values);


});

app.post("/api/search/GPT", async (req, res) => {
    const question = req.body.Q;
    try {
        const response = await fetch("http://127.0.0.1:5000/gpt", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: question })
        });
        const responseData = await response.json();
        console.log(responseData);
        res.json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

app.get("/api/weather", async (req, res) => {
    const request = require("request");
    request("http://127.0.0.1:5000/weather", function (error, response, body) {
        console.error("error:", error);
        console.log("statusCode:", response && response.statusCode);
        console.log("body:", body);
        const parsedBody = JSON.parse(body);
        res.send(parsedBody);
    });
});

app.listen(port, () => {
    console.log(`server listen http://localhost:${port}`);
});

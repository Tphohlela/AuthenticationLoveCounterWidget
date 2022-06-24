const jwt = require("jsonwebtoken")

module.exports = function (app, db) {

	app.get('/api/test', function (req, res) {
		res.json({
			name: 'joe'
		});
	});

	app.post('/api/loggingIn', async function (req, res) {
        try {
            const { user, password } = req.body;
        let loggedIn =[];
            loggedIn = await db.many("select * from love_user where username=$1 and password=$2", [user, password])
            console.log('sdfghnm'+ JSON.stringify(loggedIn))
            //sdfghnm[{"id":2,"username":"thato","password":"hyhy","love_count":null}]
            jwt.sign({ loggedIn }, 'specialKey', (err, token) => {
                return res.json({
                    success: true,
                    user: user,
                    access_token: token
                })
            })
        } catch (err) {
            console.log(err);
            res.json({
                status: 'error',
                error: err.message
            })
        }
    });

	app.post('/api/addUsers', async function (req, res) {

		try {
			const { user, password } = req.body;
			console.log(user + password);

			await db.oneOrNone("insert into love_user(username, password) values ($1, $2)", [user, password])

			res.json({
				status: 'success',
			});

		} catch (err) {
			console.log(err);
			res.json({
				status: 'error',
				error: err.message
			})
		}
	});

}
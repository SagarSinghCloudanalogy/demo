
const userRoutes = (app, fs) => {

    // variables
    const dataPath = './data.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {
        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }
            callback();
        });
    };

    // CREATE
    app.post('/users/add', (req, res) => {
        readFile(data => {
            const newUserId = Object.keys(data).length + 1;
            // add the new user
            data[newUserId.toString()] = req.body;
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`new user added ${newUserId.toString()}`);
            });
        },
            true);
    });
    // READ
    app.get('/users', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });

     // UPDATE
    app.put('/users/:id', (req, res) => {

        readFile(data => {
            const userId = req.params["id"];
            data[userId] = req.body;
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/users/:id', (req, res) => {
        readFile(data => {
            const userId = req.params["id"];
            delete data[userId];
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} removed`);
            });
        },
            true);
    });
};

module.exports = userRoutes;
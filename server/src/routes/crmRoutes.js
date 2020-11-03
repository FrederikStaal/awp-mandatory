const routes = (app) => {
    app.route('/question')
        .get((req, res) =>
        res.send('GET request succesful!'))

        .post((req, res) =>
        res.send('POST request succesful!'));

    app.route('/question/:questionID')
        .put((req, res) =>
        res.send('PUT request succesful!'))

        .delete((req, res) =>
        res.send('DELETE request succesful!'))
}

export default routes;
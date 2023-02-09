const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();
// Accept comment and return the same comment to the user
exports.postcomment = functions.https.onRequest((request,
    response) => {
    cors(request, response, () => {
    const currentTime = admin.firestore.Timestamp.now();
    request.body.timestamp = currentTime;
    return admin.firestore().collection('comments').add({
    handle: request.body.data.handle,
    comment:request.body.data.comment, timestamp:
    request.body.timestamp}).then(() => {
    response.send({"data": "Saved in Database"});
    });
    });
    });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });



admin.initializeApp();
const db = admin.firestore();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase again!");
});

exports.isLoggedIn = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Not logged in");
});

exports.echo = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("The data passed in is " + request.query.data);
});


exports.postuserlocation = functions.https.onCall((data, context) => {
    // context.auth contains information about the user, if they are logged in etc.
    const currentTime = admin.firestore.Timestamp.now();
    const locOrigin = data.origin;
    const locDestination = data.destination;
    delete data.origin; // remove location value from data object
    delete data.destination;
    //data.timestamp = currentTime;

    const locationData = { locOrigin, locDestination }; // create separate object with location value
    console.log("locationData: " + locationData + " timestamp: " + currentTime);
    console.log("data: " + data);
    if (typeof context.auth === 'undefined') {
        // request is made from an anonymous user
        return admin.firestore().collection('locations').add({ data, loc: locationData, time: currentTime }).then(() => {
            return "Data saved in Firestore";
        });
    }
    else {
        data.uid = context.auth.uid;
        return admin.firestore().collection('locations').add({
            data,
            loc: locationData,
            timestamp: currentTime
        }).then(() => {
            return "Data saved in Firestore";
        });
    }
});


// look at this when back
exports.postusercomment = functions.https.onCall((data, context) => {
    // context.auth contains information about the user, if they are logged in etc.
    const currentTime = admin.firestore.Timestamp.now();
    data.timestamp = currentTime;
    if (typeof context.auth === 'undefined') {
        // request is made from an anonymous user
        return admin.firestore().collection('comments').add({
            data:
                data
        }).then(() => {
            return "Data saved in Firestore"
        });
    }
    else {
        data.uid = context.auth.uid;
        return admin.firestore().collection('comments').add({
            data:
                data
        }).then(() => {
            return "Data saved in Firestore"
        });
    }
});

exports.getmatchingusers = functions.https.onCall(async (currentUser, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to call this function.');
    }

    // Retrieve the current user ID
    //currentUser.uid = context.auth.uid;
    console.log("current user uid: " + context.auth.uid);

    try {
        console.log("LOOK AT ME NOW WOOOO");
        console.log("current user loc: " + currentUser.origin + " , " + currentUser.destination + " uid: " + context.auth.uid);
        const locationsRef = db.collection('locations');
        const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000); // Get the timestamp for 30 minutes ago

        const querySnapshot2 = await locationsRef
            .where('loc.locOrigin', '==', currentUser.origin)
            .where('loc.locDestination', '==', currentUser.destination)
            .where('timestamp', '>=', thirtyMinutesAgo)
            .get();
        const matchingUsers = [];

        if (!querySnapshot2.empty) {
            querySnapshot2.forEach((doc) => {
                if (doc.exists) {
                    const location = doc.data();
                    console.log("location: ", location.loc.locOrigin + " " + location.loc.locDestination + " username: " + location.data.username
                        + " uid: " + location.data.uid + " current user uid & location: " + context.auth.uid + " , " + currentUser.origin + " , " + currentUser.destination);

                    if (location.data.uid !== context.auth.uid) {
                        matchingUsers.push(location.data.username + " \t " + location.data.phoneNum);
                    }
                }
                else {
                    console.log('No such document!');
                }
            });
        } else {
            console.log('Query snapshot is empty.');
        }

        console.log("matching users: ", matchingUsers);

        return matchingUsers;
    } catch (error) {
        console.error(error);
        throw new functions.https.HttpsError('internal', 'Unable to get matching users.');
    }
});



exports.securefunction = functions.https.onCall((data, context) => {

    // context.auth contains information about the user, if they are logged in etc.
    if (typeof context.auth === undefined) {
        // request is made from user that is logged in
        return "User is not logged in"
    }
    else {
        return "User is logged in"
    }

});
exports.getCurrentUserId = functions.https.onCall(async (data, context) => {
    // Check if user is authenticated
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You must be authenticated to call this function.');
    }

    // Retrieve the current user ID
    const userId = context.auth.uid;

    // Return the current user ID
    return { userId };
});

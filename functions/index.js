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

// Accept comment and return the same comment to the user
exports.postcomment = functions.https.onRequest((request, response) => {
    // 1. Receive comment data in here from user POST request
    // 2. Connect to our Firestore database
    cors(request, response, () => {
        console.log("Hello Again")
        const currentTime = admin.firestore.Timestamp.now();
        request.body.data.timestamp = currentTime;

        return admin.firestore().collection('comments').add(request.body).then(() => {
            response.json({ data: "Saved in the database" });
        });
    });
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




exports.getmatchingusers = functions.https.onCall(async (currentUser) => {
    try {
        console.log("LOOK AT ME NOW WOOOO");
        console.log("current user loc: " + currentUser.origin + " , " + currentUser.destination + " uid: " + currentUser.uid);
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
                        + " uid: " + location.data.uid + " current user uid & location: " + currentUser.uid + " , " + currentUser.origin + " , " + currentUser.destination);

                    if (location.data.uid !== currentUser.uid) {
                        matchingUsers.push("Username: " + location.data.username, "Origin: " + location.loc.locOrigin, "Destination: " + location.loc.locDestination);
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



exports.getcomments = functions.https.onRequest((request, response) => {

    cors(request, response, () => {
        // 1. Connect to our Firestore database
        console.log("The request made it in here");
        let myData = [];
        return admin.firestore().collection('comments').orderBy('data.timestamp').get().then((snapshot) => {

            if (snapshot.empty) {
                console.log('No matching documents.');
                response.json({ data: { message: 'No data in database' } });
                return;
            }

            snapshot.forEach(doc => {
                console.log(doc.id);
                myData.push(Object.assign(doc.data(), { id: doc.id }));
            });
            console.log(myData);

            // 2. Send data back to client
            response.json({ data: myData });
        });
    });
});

exports.deletecomment = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        // deletes a comment using the id of the document
        console.log(request.query.id);
        admin.firestore().collection("comments").doc(request.query.id).delete().then(() => {
            response.json({ data: "Document successfully deleted" });
        })
    });
});

exports.updatecomment = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        console.log("This is the body" + request.body.data);
        return admin.firestore().collection('comments').doc(request.query.id).update(request.body.data.comment).then(() => {
            response.json({ data: "Updated document in database" });
        });
    });
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

exports.deleteusercomment = functions.https.onCall((data, context) => {
    if (typeof context.auth === 'undefined') {
        // request is made from an anonymous user
        throw new functions.https.HttpsError('permission-denied', 'Anonymous users cannot deletecomments');
    }
    else {
        return admin.firestore().collection('comments').doc(data.id).get().then((doc) => {
            if (!doc.exists) {
                // 1. Check if the document exists, throw error if not
                throw new functions.https.HttpsError('not-found', 'No comment found matching the id');
            } else if (doc.data().data.uid != context.auth.uid) {
                // 2. Check if the user owns the document, otherwise throw error
                throw new functions.https.HttpsError('permission-denied', 'You do not have sufficientpermissions to delete this comment');
            } else {
                // 3. If the user created the document then delete it
                return doc.ref.delete().then(() => {
                    return 'Document successfully deleted'
                });
            }
        });
    }
})
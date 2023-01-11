

/*
We cannot use a conventional grid, earth is not flat, it's a triangle duH!

We use the longitude and latitude to determind how close users are. We can calculate this each time with

Earth's radius - 6371 KM



dlong = 1 / (2 * pi * r) * 360
      = 0.0089932160591873 deg

Walking 10 KM up,
eg. 0.008993... * 10
= 0.08993...

r = R * cos(lat)
  = 6371 * cos(0.08993...)
  = 6 345.253693 km


 OPTION 1 - Use above method to calculate each time the degree of 1km for the user, then search firebase with
 Select users WHERE


 https://firebase.google.com/docs/firestore/solutions/geoqueries

 found this so helpful

 https://github.com/firebase/snippets-web/blob/36740fb2c39383621c0c0a948236e9eab8a71516/firestore/test.solution-geoqueries.js#L35-L79








 */
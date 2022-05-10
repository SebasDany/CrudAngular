// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const firebaseConfig = {
//   apiKey: "AIzaSyDjrMzp4NOrJLfWubqbThDErrflMezteE4",
//   authDomain: "plantec-5f8fe.firebaseapp.com",
//   projectId: "plantec-5f8fe",
//   storageBucket: "plantec-5f8fe.appspot.com",
//   messagingSenderId: "1000676446483",
//   appId: "1:1000676446483:web:c24f1b22036ad56562cae6",
//   measurementId: "G-89PJJ4Y28B"
// };

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDjrMzp4NOrJLfWubqbThDErrflMezteE4",
    authDomain: "plantec-5f8fe.firebaseapp.com",
    databaseURL: "https://plantec-5f8fe-default-rtdb.firebaseio.com",
    projectId: "plantec-5f8fe",
    storageBucket: "plantec-5f8fe.appspot.com",
    messagingSenderId: "1000676446483",
    appId: "1:1000676446483:web:c24f1b22036ad56562cae6",
    measurementId: "G-89PJJ4Y28B"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

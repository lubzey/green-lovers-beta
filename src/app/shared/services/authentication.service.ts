import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
    displayName;
    photoURL;
    currentUser: {
        displayName,
        photoURL
    };

    constructor(private afAuth: AngularFireAuth) { }

    login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());

        // this.af.auth.login({
        //     provider: AuthProviders.Facebook,
        //     method: AuthMethods.Popup
        // }).then((authState: any) => {
        //     this.af.database.object('/fbusers/' + authState.uid).update({
        //         accessToken: authState.facebook.accessToken,
        //         username: authState.auth.displayName,
        //         avatar: authState.auth.photoURL,
        //         email: authState.auth.email
        //     })
        // });
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    getCurrentUser() {
        return this.afAuth.authState;
    }
}
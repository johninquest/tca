import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  onClickGoogleAuth() {
    console.log('Tapped Google auth');
    /* let googleAuthResponse = this._fbAuthService.googleAuth();
    googleAuthResponse
      .then((res) => {
       
        res.user.getIdToken().then((t) => {
          sessionStorage.setItem('zet_access_token', t);
          this._router.navigateByUrl('/home');
        });
      })
      .catch((e) => {
        console.log('Error => ', e);
      }); */
  }

  onClickFacebookAuth() {
    console.log('Tapped Facebook auth');
    /*    let googleAuthResponse = this._fbAuthService.facebookAuth();
    googleAuthResponse
      .then((res) => {
        console.log('Facebook auth response:', res);
        res.user.getIdToken().then((t) => {
          sessionStorage.setItem('zet_access_token', t);
          this._router.navigateByUrl('/home');
        });
      })
      .catch((e) => {
        console.log('Error => ', e);
      }); */
  }

  onClickEmailAuth() {
    console.log('Tapped Email auth');
    /*  this._router.navigateByUrl('/auth/email'); */
  }
}

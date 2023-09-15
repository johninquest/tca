import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  onClickGoogleAuth() {
    console.log('Tapped Google auth');
    alert('Under construction');
  }

  onClickFacebookAuth() {
    console.log('Tapped Facebook auth');
  }

  onClickEmailAuth() {
    console.log('Tapped Email auth');
    /*  this._router.navigateByUrl('/auth/email'); */
    alert('Under construction');
  }
}

import { Component } from '@angular/core';
import { faFacebook,faTwitter,faGooglePlusG,faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faFacebook=faFacebook;
  faTwitter = faTwitter;
  faGooglePlus=faGooglePlusG;
  faInstagram=faInstagram;
}

import { Component } from '@angular/core';
import {faLinkedin , faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faLinkedin = faLinkedin
  faFacebook = faFacebook
  faTwitter = faTwitter

}

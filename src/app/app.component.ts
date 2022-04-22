import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';


  constructor(private facebookService: FacebookService) { }
    ngOnInit(): void {
      this.initFacebookService();
    }
    private initFacebookService(): void {
      const initParams: InitParams = { xfbml:true, version:'v13.0'};
      this.facebookService.init(initParams);
    }
}


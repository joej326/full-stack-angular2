import { Component } from '@angular/core';
import { BackendTestService } from './backend-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myVar;

  constructor(private backendService: BackendTestService) { }

  callService() {
    this.backendService.fetchData()
      .subscribe(
        (data) => {
          this.myVar = data;
        }
      );
  }
}



//mongoose.connect('mongodb://localhost:27017/node-angular');

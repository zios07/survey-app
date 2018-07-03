import { Component } from '@angular/core';
import * as Survey from 'survey-angular';
import { surveyJSON } from './survey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  ngOnInit() {
    var survey = new Survey.Model(surveyJSON);
    survey.onComplete.add(this.sendDataToServer);
    Survey.SurveyNG.render("surveyElement", {model:survey});
  }

  sendDataToServer(event) {
    console.log(event.data);
  }
  
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() stepData;
  @Input() questionIndex;
  @Input() answersArr;
  @Input() withMyAnswer;

  constructor() { }

  ngOnInit(): void {
  }

}

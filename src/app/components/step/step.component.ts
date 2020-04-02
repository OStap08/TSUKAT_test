import { Component, OnInit, AfterViewInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit, AfterViewInit {
  @Input() stepData;
  @Input() stepsLength;
  @Input() questionIndex;
  @Input() answersArr;
  @Output() changeIndex  = new EventEmitter<any>();
  @ViewChild('myIframe', {static: false}) myIframe: ElementRef;
  myAnswer = '';
  myAnswers = [];
  answerIsMatch: boolean;
  constructor() {}

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    if (this.stepData.video) {
      this.myIframe.nativeElement.src = this.stepData.video;
    }
  }
  onSubmit(){
    if (this.questionIndex !== 2) {
      if (this.myAnswer === '' || this.answersArr[this.questionIndex].myAnswer !== '') {
        return;
      }
      this.answersArr[this.questionIndex].myAnswer = this.myAnswer;
      this.answerIsMatch = this.myAnswer === this.stepData.answer;
    } else {
      if (!this.myAnswers.length || this.answersArr[this.questionIndex].myAnswer.length) {
        return;
      }
      this.answersArr[this.questionIndex].myAnswer = this.myAnswers;
      let notMatchedAnswerArr = true;
      const matchedAnswerArr = [];
      this.myAnswers.map(item => {
       if (this.stepData.answers.indexOf(item) === -1) {
         notMatchedAnswerArr = false;
       } else {
         matchedAnswerArr.push(item);
       }
      });
      this.answerIsMatch = notMatchedAnswerArr && matchedAnswerArr.length === this.stepData.answers.length;

    }
    if (this.answerIsMatch) {
      this.answersArr[this.questionIndex].questionIsTrue = true;
    } else if (!this.answerIsMatch) {
      this.answersArr[this.questionIndex].questionIsTrue = false;
    }
  }
  nextStep(){
    if (this.stepsLength > this.questionIndex + 1){
      this.changeIndex.emit(this.questionIndex + 1);
    } else {
      let prevIndex;
      this.answersArr.map((answer, index) => {
        if (answer.myAnswer === '' || !answer.myAnswer.length) {
          if (!prevIndex && prevIndex !== 0){
            this.changeIndex.emit(index);
            prevIndex = index;
          }
        }
      });
    }
  }
  onToggle(){
    const newArr = [];
    this.stepData.answerOptions.map(item => {
      if (item.checked) {
        newArr.push(item.value);
      }
    });
    this.myAnswers = newArr;
  }
  answerIsImg($event){
    if (this.questionIndex === 1) {
      this.myAnswer = $event.toElement.src;
    }
  }
}

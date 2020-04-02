import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allSteps: any[] = [
    {
      imgs: ['https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg'],
      questions: 'Що намальовано на картинці?',
      answerOptions: ['Кіт', 'Пес', 'Слон', 'Мавпа'],
      answer: 'Пес'},
    {
      imgs: ['https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
        'https://travinno.com/wp-content/uploads/2018/06/IMG-PARK-VISIT-2.jpg',
        'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
        'https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'],
      questions: 'Натисніть на картинку з надписом `MARVEL`',
      answer: 'https://travinno.com/wp-content/uploads/2018/06/IMG-PARK-VISIT-2.jpg' },
    {
      video: 'https://www.youtube.com/embed/668nUCeBHyY',
      questions: 'Що зображенно на відео?',
      questionIsTrue: null,
      answerOptions: [
        {
          value: 'Ліс',
          checked: false
        },
        {
        value: 'Річка',
        checked: false
        },
        {
        value: 'Нічне місто',
        checked: false
        },
        {
        value: 'Вулкан',
        checked: false
        }, ],
      myAnswer: '',
      answers: ['Ліс', 'Нічне місто'] }
  ];
  answersArr = [
    {
      myAnswer: '',
      questionIsTrue: null
    },
    {
      myAnswer: '',
      questionIsTrue: null
    },
    {
      myAnswer: [],
      questionIsTrue: null
    },
  ];
  questionIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }
  openQuestion(questionIndex){
    this.questionIndex = questionIndex;
  }

  changeIndex($event: any){
    this.questionIndex = $event;
  }
}

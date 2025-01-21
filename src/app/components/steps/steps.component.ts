import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent implements OnInit {

  subscriptions: Subscription = new Subscription();
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    let getCourseSub = this.route.paramMap.subscribe( (param:ParamMap)=>{
      let paramId = param.get('courseId') ?? '';      
     console.log("paramId:",paramId)
    })
    this.subscriptions.add(getCourseSub);
  }

}

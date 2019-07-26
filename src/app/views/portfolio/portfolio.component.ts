import { Component, OnInit } from '@angular/core';
import { SpecData } from 'src/app/interfaces/spec-data';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  subscription: Subscription = new Subscription();
  projectInfo: SpecData[] = [];
  q: string;

  constructor(private getPI: DataService) { }

  ngOnInit() {
    this.getProjectInfo();
  }
  getProjectInfo() {
    this.subscription.add(
      this.getPI.getURL().subscribe(
        x => {
          console.log(x);
          for (const q of x.feed.entry) {
            const nfo: SpecData = {
              proName: q['gsx$proname']['$t'],
              proImage: q['gsx$proimage']['$t'],
              proDescription: q['gsx$prodescription']['$t'],
              accomp1: q['gsx$accomp1']['$t'],
              accomp2: q['gsx$accomp2']['$t'],
              accomp3: q['gsx$accomp3']['$t'],
              accomp4: q['gsx$accomp4']['$t'],
              accomp5: q['gsx$accomp5']['$t'],
              accomp6: q['gsx$accomp6']['$t'],
              accomp7: q['gsx$accomp7']['$t'],
              githubLink: q['gsx$githublink']['$t'],
              onlineLink: q['gsx$onlinelink']['$t'],
            };
            this.projectInfo.push(nfo);
          }
          console.log(this.projectInfo);
        }
      ));
  }
}

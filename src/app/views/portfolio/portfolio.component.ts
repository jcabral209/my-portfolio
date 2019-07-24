import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { SpecData } from 'src/app/interfaces/spec-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  subscription: Subscription = new Subscription();
  projectInfo: SpecData[] = [];
  q: string;

  constructor(private getPI: GetDataService) { }

  ngOnInit() {
    this.getProjectInfo();
  }
  getProjectInfo() {
    this.subscription.add(
      this.getPI.getProjectInfo().subscribe(
        x => {

          for (const q of x.feed.entry) {
            const nfo: SpecData = {
              proName: q['gsx$proName']['$t'],
              proImage: q['gsx$proImage']['$t'],
              proDescription: q['gsx$proDescription']['$t'],
              accomp1: q['gsx$accomp1']['$t'],
              accomp2: q['gsx$accomp2']['$t'],
              accomp3: q['gsx$accomp3']['$t'],
              accomp4: q['gsx$accomp4']['$t'],
              accomp5: q['gsx$accomp5']['$t'],
              accomp6: q['gsx$accomp6']['$t'],
              accomp7: q['gsx$accomp7']['$t'],
              githubLink: q['gsx$githubLink']['$t'],
              onlineLink: q['gsx$onlineLink']['$t'],
            };
            this.projectInfo.push(nfo);
          }
          console.log(this.projectInfo);
        }
      ));
  }
}

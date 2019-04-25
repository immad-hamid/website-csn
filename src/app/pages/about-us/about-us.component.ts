import { Component, OnInit } from "@angular/core";
import { EndPointsService } from "src/app/services/end-points.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})
export class AboutUsComponent implements OnInit {
  heading = "About Us";
  thingsWeDo: {
    heading: string;
    content: string;
    anchor: string;
    color: string;
  }[];
  data$: any;
  programs: { heading: string; anchor: string }[];

  constructor(private endPointsService: EndPointsService) {}

  ngOnInit() {
    this.data$ = this.endPointsService.getAboutPageData();

    this.programs = [
      {
        heading: "Our<br> History",
        anchor: "../our-history"
      },
      {
        heading: "Mission<br> Statement",
        anchor: "../our-mission-statement"
      },
      {
        heading: "Welfare<br> & Support",
        anchor: "../welfare-and-support"
      }
    ];
  }
}

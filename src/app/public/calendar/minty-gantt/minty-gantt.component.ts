import { Component, OnInit, ElementRef } from "@angular/core";
import { Gantt, Edit, Toolbar, Selection, Filter } from "@syncfusion/ej2-gantt";

@Component({
  selector: "ngx-minty-gantt",
  template: ` <div id="GanttConatiner"></div> `,
  styleUrls: ["./minty-gantt.component.scss"],
})
export class MintyGanttComponent implements OnInit {
  /** Grantt */
  public data: Object[];
  public taskfield: Object;
  public gantt: Gantt;

  /** Days */
  private mapDayStr: Map<string, string> = new Map();

  constructor(element: ElementRef) {}

  ngOnInit(): void {
    this.setupDaysMap();
    this.setupGantt();
  }

  /**
   * Initial values days
   */
  private setupDaysMap(): void {
    this.mapDayStr.set("0", "Sun");
    this.mapDayStr.set("1", "Mon");
    this.mapDayStr.set("2", "Tue");
    this.mapDayStr.set("3", "Wed");
    this.mapDayStr.set("4", "Thu");
    this.mapDayStr.set("5", "Fri");
    this.mapDayStr.set("6", "Sat");
  }

  /**
   * Gantt Configuration
   */
  private setupGantt(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: "Mathematics",
        // StartDate: "06/14/2019",
        // Duration: 3, // Days
        Segments: [
          { StartDate: new Date("06/18/2019"), Duration: 2 },
          { StartDate: new Date("06/23/2019"), Duration: 5 },
          { StartDate: new Date("06/30/2019"), Duration: 3 },
        ],
      },
      {
        TaskID: 2,
        TaskName: "Sport",
        StartDate: "06/12/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 3,
        TaskName: "Micro-Biology",
        StartDate: "06/15/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 4,
        TaskName: "Hisotry",
        StartDate: "06/15/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 5,
        TaskName: "Law",
        StartDate: "06/13/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 6,
        TaskName: "Sport",
        StartDate: "06/18/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 7,
        TaskName: "International Studies",
        StartDate: "06/18/2019",
        Duration: 4, // Days
      },
      {
        TaskID: 8,
        TaskName: "Mathematics",
        StartDate: "06/21/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 9,
        TaskName: "Chemistry",
        StartDate: "06/21/2019",
        Duration: 4, // Days
      },
      {
        TaskID: 10,
        TaskName: "Geography",
        StartDate: "06/20/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 11,
        TaskName: "Sport",
        StartDate: "06/23/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 12,
        TaskName: "Mathematics",
        StartDate: "06/27/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 13,
        TaskName: "Micro-Biology",
        StartDate: "06/27/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 14,
        TaskName: "History",
        StartDate: "06/25/2019",
        Duration: 3, // Days
      },
      {
        TaskID: 15,
        TaskName: "Law",
        StartDate: "06/26/2019",
        Duration: 3, // Days
      },
    ];

    this.taskfield = {
      id: "TaskID",
      name: "TaskName",
      startDate: "StartDate",
      duration: "Duration",
      labelSettings: {
        leftLabel: "TaskName",
        rightLabel: "TaskName",
      },
      segments: "Segments",
    };

    Gantt.Inject(Toolbar, Selection, Edit, Filter);

    this.gantt = new Gantt({
      dataSource: this.data,
      width: "1250px",
      height: "700px",
      taskFields: this.taskfield,
      projectStartDate: new Date("6/13/2019"),
      projectEndDate: new Date("7/13/2019"),
      labelSettings: {
        taskLabel: "TaskName",
      },
      timelineSettings: {
        timelineViewMode: "Day",
        timelineUnitSize: 60,
        topTier: {
          unit: "Day",
          formatter: (date) => {
            const day: string = this.mapDayStr.get(`${date.getDay()}`);
            return `
            <p>${day}</p>
            `;
          },
        },
        bottomTier: {
          unit: "Day",
          formatter: (date) => {
            return `${date.getDate()}`;
          },
        },
        showTooltip: false,
      },
      editSettings: {
        allowTaskbarEditing: true,
        allowEditing: true,
      },
      allowSelection: true,
      allowFiltering: true,
      rowHeight: 64,
      connectorLineBackground: "#49a889",
      baselineColor: "#49a889",
    });

    this.gantt.appendTo("#GanttConatiner");
  }
}

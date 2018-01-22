import { Component } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from "primeng/primeng";
import {CalendarModule} from 'primeng/calendar';
import { DateObject} from "./date-object";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  schedulesData= '';
  selectedValue: string;
  actions:SelectItem[];
  repeatType:SelectItem[];
  data= [];
  newScheduleValue: boolean;
  cancel: boolean;
  scheduleTypes = ['Repeat Schedule', 'Custom Schedule'];
  scheduleDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  scheduleEndTypes = ['Never', 'On', 'After'];

  scheduleData: DateObject;
  errorFields: string;

  minTime: Date;
  startDateValue: Date;
  endDateValue: Date;
  startTimeValue: Date;
  endMinTime: Date;

  // timeZones: any;
  // timeZone: any;
  // allRows: any;
  // rowId: number;

  constructor(private dataService: DataService){
    this.actions = [{label: 'Start', value: 'start'}, {label: 'Stop', value: 'stop'} ];
    this.repeatType = [{label: 'Day', value: 'day'}, {label: 'Week', value: 'week'}, {label: 'Month', value: 'month'}];
    this.selectedValue = "Custom Schedule";
    // this.allRows = [new DateObject()];
    // this.rowId = 0;
  //   this.timeZones = [
  //     {label: 'Eastern Time', value: '(GMT-05:00) EST'},
  //     {label: 'Central Time', value: '(GMT-06:00) CST'},
  //     {label: 'Mountain Time', value: '(GMT-07:00) MT'},
  //     {label: 'Pacific Time', value: '(GMT-08:00) PT'}];
  }

  ngOnInit(){
    this.scheduleData = new DateObject();
    this.startDateValue = new Date();
    this.startTimeValue = new Date();
    this.endDateValue = new Date();
    // this.endMinTime = new Date();

  }

  // getEndDate(date){
  //   console.log("end date: ", this.scheduleData.endDate);
  //   console.log("start date: ", this.scheduleData.startDate);
  //   console.log("start time: ", this.scheduleData.startTime);
  //   console.log("end time: ", this.scheduleData.endTime);
  //
  //   if(this.scheduleData.startDate.toString() === this.scheduleData.endDate.toString()){
  //     this.endMinTime = this.scheduleData.startTime;
  //     // this.endMinTime.setMinutes(this.endMinTime.getMinutes() + 30);
  //     console.log("end minimum time: ", this.endMinTime);
  //     date.updateUI();
  //   }
  // }

  // updateCalendar(calendar) {
  //   calendar.updateUI();
  // }
  getSchedules(): void{
    const Url = 'https://us-central1-cargomgrio-test.cloudfunctions.net/testAngularAvaya';

        this.dataService.getServers(Url)
          .subscribe(
            (data: any) => {
              this.schedulesData = data;
              console.log('After server data....', this.schedulesData)
            },
            (error) => console.log(error)
          );
    }
  newSchedule(value){
    console.log("newschedule button");
    this.newScheduleValue = true;
    this.errorFields = "";
  }

  getAction(value) {
    console.log("action value", value);
    this.errorFields = "";
  }
  getScheduleTypes(value){
    console.log("schedule type", value);
    this.errorFields = "";
  }

  // getDateselect(value){
  //   // this.minDate = new Date();
  //   console.log("date", value );
  //   console.log("date selected: ",  (this.startdateValue.toDateString()).concat(this.starttime, this.timeZone));
  // }

  submitForm(data){
    switch (this.scheduleData.selectedScheduleType) {
      case "Repeat Schedule":
        if((this.scheduleData.selectedAction === 'start') && (this.scheduleData.repeatNumber <= '99') && (this.scheduleData.repeatEndType !== "")){
          if ((this.scheduleData.startDate.toString() !=="") && (this.scheduleData.startTime.toString() !=="")) {
            console.log("submit value: ", data);
            this.errorFields = "";
            this.scheduleData = new DateObject();
          }
          else {
            this.errorFields = "*Some fields are empty";
          }
        }
        else if((this.scheduleData.selectedAction === 'stop') && (this.scheduleData.repeatNumber <= '99') && (this.scheduleData.repeatEndType !== "")){
          if ((this.scheduleData.repeatEndType === "On") && (this.scheduleData.endDate.toString() !=="") && (this.scheduleData.endTime.toString() !=="")) {
            console.log("submit value: ", data);
            this.errorFields = "";
            this.scheduleData = new DateObject();
          }
          else if((this.scheduleData.repeatEndType === "After") && (this.scheduleData.repeatOccurrences !=="")){
            console.log("submit value: ", data);
            this.errorFields = "";
            this.scheduleData = new DateObject();
          }
          else if(this.scheduleData.repeatEndType === "Never"){
            console.log("submit value: ", data);
            this.errorFields = "";
            this.scheduleData = new DateObject();
          }
          else {
            this.errorFields = "*Some fields are empty";
          }
        }
        else {
          this.errorFields = "*Some fields are empty";
        }
        break;
      case "Custom Schedule"  :
        if(this.scheduleData.selectedAction === 'start'){
          if ((this.scheduleData.startDate.toString() !=="") && (this.scheduleData.startTime.toString() !=="")) {
            console.log("submit start date value: ", data._startDate.toDateString());
            console.log("submit start time value: ", data._startTime.toTimeString());
            this.errorFields = "";
            this.scheduleData = new DateObject();
          }
          else {
            this.errorFields = "*Some fields are empty";
          }
        }
        else if(this.scheduleData.selectedAction === 'stop'){
          if ((this.scheduleData.endDate.toString() !=="") && (this.scheduleData.endTime.toString() !=="")) {
            console.log("submit value: ", data);
            this.errorFields = "";
            this.scheduleData = new DateObject();
          }
          else {
            this.errorFields = "*Some fields are empty";
          }
        }
        else{
          this.errorFields = "*Some fields are empty";
        }
        break;
    };
  }

  cancelForm(){
    this.cancel = true;
    console.log("canceled the form");
    this.errorFields = "";
    this.scheduleData = new DateObject();
  }

  // removeSelectedRow(selected){
  //   debugger;
  //   console.log(selected)
  //   let matchedIndex = null;
  //   this.allRows.forEach((each, index) => {
  //     if((each.id == selected                      .id)){
  //       matchedIndex = index;
  //     }
  //   });
  //   this.allRows.splice(matchedIndex, 1);
  // }
  //
  // addRow(){
  //   let newRow = new DateObject();
  //   this.rowId += 1;
  //   newRow.id = this.rowId;
  //   this.allRows.push(newRow);
  // }
}



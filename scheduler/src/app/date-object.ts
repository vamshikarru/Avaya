export class DateObject {
  get repeatOccurrences(): string {
    return this._repeatOccurrences;
  }

  set repeatOccurrences(value: string) {
    this._repeatOccurrences = value;
  }
  get repeatDays(): {} {
    return this._repeatDays;
  }

  set repeatDays(value: {}) {
    this._repeatDays = value;
  }
  get repeatEndType(): string {
    return this._repeatEndType;
  }

  set repeatEndType(value: string) {
    this._repeatEndType = value;
  }

  private _id: number;
  private _selectedAction: string;
  private _selectedScheduleType: string;
  private _startDate: Date;
  private _endDate: Date;
  private _startTime: Date;
  private _endTime: Date;
  private _repeatNumber: string;
  private _repeatType: string;
  private _repeatDays= {};
  private _repeatEndType: string;
  private _repeatOccurrences:string;
  private _repeatEndValue: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get selectedAction(): string {
    return this._selectedAction;
  }

  set selectedAction(value: string) {
    this._selectedAction = value;
  }


  get selectedScheduleType(): string {
    return this._selectedScheduleType;
  }

  set selectedScheduleType(value: string) {
    this._selectedScheduleType = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get startTime(): Date {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
  }

  get endTime(): Date {
    return this._endTime;
  }

  set endTime(value: Date) {
    this._endTime = value;
  }

  get repeatNumber(): string {
    return this._repeatNumber;
  }

  set repeatNumber(value: string) {
    this._repeatNumber = value;
  }

  get repeatType(): string {
    return this._repeatType;
  }

  set repeatType(value: string) {
    this._repeatType = value;
  }

  get repeatEndValue(): string {
    return this._repeatEndValue;
  }

  set repeatEndValue(value: string) {
    this._repeatEndValue = value;
  }



  constructor(){
    this._id = 0;
    // this._startDate = "";
    // this._endDate = "";
    // this._startTime = "";
    // this._endTime = "";

  }
}

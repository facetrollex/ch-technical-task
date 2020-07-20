import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import * as bigInt from 'big-integer';

const SPINNER_NAME = 'global';
const ONE_SECOND = 1000;
const MS_IN_SEC = 1000;
const TASK_A_ARRAY_LENGTH = 11;
const TASK_B_ARRAY_LENGTH = 10000;
const TASK_B_MIN_VAL = 100;
const TASK_B_MAX_VAL = 10000;
const TEN = 10;

@Component({
  selector: 'app-basic-cs',
  templateUrl: './basic-cs.component.html',
  styleUrls: ['./basic-cs.component.scss']
})
export class BasicCsComponent implements OnInit {

  public arrayInput: number[] = [];
  public sortedResult = [];
  public executionTime = '';
  public executionTimeBig = '';

  constructor(private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.generate();
  }

  generate(): void {
    this.clearOutput();
    this.arrayInput = [];
    for (let i = 0; i < TASK_A_ARRAY_LENGTH; i++) {
      this.arrayInput.push(this.generateRandomNumber(1, 99));
    }
  }

  sort(): void {
    this.clearOutput();
    this.sortedResult = this.quickSort([...this.arrayInput]);
  }

  sortWithExecution(): void {
    const numberOfExecutions = Math.pow(TEN, TEN);
    this.clearOutput();
    const toSort = [...this.arrayInput];

    this.spinnerService.show(SPINNER_NAME);

    setTimeout(() => {
      const startTime = performance.now();
      for (let i = 0; i < numberOfExecutions; i++) {
        this.quickSort(toSort);
      }
      const endTime = performance.now();
      this.executionTime = ((endTime - startTime) / MS_IN_SEC).toFixed(5);
      this.spinnerService.hide(SPINNER_NAME);
    }, ONE_SECOND);
  }

  clearOutput(): void {
    this.sortedResult = [];
    this.executionTime = '';
  }

  sortArrayOfBigNumbers(): void {
    this.executionTimeBig = '';
    const arrayWithBigNumbersToSort = [];
    this.spinnerService.show(SPINNER_NAME);

    setTimeout(() => {
      // Generate Array of Big Numbers
      for (let i = 0; i < TASK_B_ARRAY_LENGTH; i++) {
        arrayWithBigNumbersToSort.push(
          bigInt(this.generateRandomNumber(TASK_B_MIN_VAL, TASK_B_MAX_VAL)).pow(this.generateRandomNumber(TASK_B_MIN_VAL, TASK_B_MAX_VAL))
        );
      }

      const startTime = performance.now();

      arrayWithBigNumbersToSort.sort((a, b) => a.compare(b));

      const endTime = performance.now();

      this.spinnerService.hide(SPINNER_NAME);
      this.executionTimeBig = ((endTime - startTime) / MS_IN_SEC).toFixed(5);
      console.log(arrayWithBigNumbersToSort);
    }, ONE_SECOND);
  }

  private quickSort(arr): number[] {
    if (arr.length < 2) {
      return arr;
    }
    const min = 1;
    const max = arr.length - 1;
    const rand = Math.floor(min + Math.random() * (max + 1 - min));
    const pivot = arr[rand];
    const left = [];
    const right = [];
    arr.splice(arr.indexOf(pivot), 1);
    arr = [pivot].concat(arr);
    for (let i = 1; i < arr.length; i++) {
      if (pivot > +arr[i]) {
        left.push(+arr[i]);
      } else {
        right.push(+arr[i]);
      }
    }
    return this.quickSort(left).concat(pivot, this.quickSort(right));
  }

  private generateRandomNumber(min, max): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
}

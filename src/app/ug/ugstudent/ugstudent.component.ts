import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-ugstudent',
  templateUrl: './ugstudent.component.html',
  styleUrls: ['./ugstudent.component.css'
],
  providers: [ConfirmationService]
})

export class UgstudentComponent implements OnInit {
  displayModal: boolean | undefined;

  displayBasic: boolean | undefined;

  displayBasic2: boolean | undefined;

  displayMaximizable: boolean | undefined;

  displayPosition: boolean | undefined;

  position: string | undefined;

  
  showModalDialog() {
    this.displayModal = true;
}

showBasicDialog() {
    this.displayBasic = true;
}

showBasicDialog2() {
    this.displayBasic2 = true;
}

showMaximizableDialog() {
    this.displayMaximizable = true;
}
  msgs: Message[] = [];
cd: any;
  // displayModal: boolean | undefined;
  constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  
 
  confirm1() {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to proceed?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
          },
          reject: () => {
              this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
          }
      });
  }

  confirm2() {
      this.confirmationService.confirm({
          message: 'Do you want to delete this record?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          accept: () => {
              this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
          },
          reject: () => {
              this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
          }
      });
  }

  display: boolean = false;

  showDialog() {
      this.display = true;

}


}

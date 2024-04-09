import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent implements OnInit {
  count = 0;
  @Input() dataNumber!: number;
  increment(){
    this.count = this.count + this.dataNumber + 1;
  }
  ngOnInit(): void {
  
  }
  // ngAfterViewInit() { setTimeout(() => {     this.botao.nativeElement.click();     }); }
  // @ViewChild('botao') botao!: ElementRef;
}

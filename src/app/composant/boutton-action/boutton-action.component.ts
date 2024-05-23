import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrl: './boutton-action.component.scss'
})
export class BouttonActionComponent {


  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }

}

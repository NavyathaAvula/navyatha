import { Component ,EventEmitter,Input, Output} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childd:any;
  @Output() aa= new EventEmitter<any>;
  na='navyathaa';
}

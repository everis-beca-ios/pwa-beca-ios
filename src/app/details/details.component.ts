import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  name:string = "John Lennon"
  description:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit pellentesque risus, convallis gravida risus hendrerit at. Integer magna sapien, tristique ac consectetur sed, vestibulum iaculis quam. Praesent vestibulum varius posuere. Cras purus orci, tempus vitae finibus sit amet, pharetra non diam. In hac habitasse platea dictumst. Fusce quis mi gravida ligula elementum tincidunt quis nec mi. Mauris vehicula ante eros, sed sodales nisi tincidunt vitae "

  constructor() { }

  ngOnInit() {
  }

}

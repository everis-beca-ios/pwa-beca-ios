import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private urlRoute: any

  private userData: any

  name:string = "John Lennon"
  description:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit pellentesque risus, convallis gravida risus hendrerit at. Integer magna sapien, tristique ac consectetur sed, vestibulum iaculis quam. Praesent vestibulum varius posuere. Cras purus orci, tempus vitae finibus sit amet, pharetra non diam. In hac habitasse platea dictumst. Fusce quis mi gravida ligula elementum tincidunt quis nec mi. Mauris vehicula ante eros, sed sodales nisi tincidunt vitae "

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.urlRoute = this.route.params.subscribe(params => {
      console.log("params", params)
      this.userData = params
    })
  }

  ngOnDestroy(): void {
    this.urlRoute.unsubscribe();
  }

  gotToProfileList() {
    this.router.navigate(["profile-list"])
  }

}

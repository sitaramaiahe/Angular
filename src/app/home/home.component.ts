import { Component } from '@angular/core'

@Component({
    selector: 'my-home',
    templateUrl: '/app/home/home.component.html'
})
export class HomeCompoent {
    content: string = "This is Home";
}
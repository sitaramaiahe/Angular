import { Component } from '@angular/core'

@Component({
    selector: 'page-notfound',
    template:'<div>{{content}}</div>'
})
export class PageNotFoundCompoent {
    content: string = "Your requested page was not found";
}
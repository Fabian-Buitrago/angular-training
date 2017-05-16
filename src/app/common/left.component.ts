import { Component } from '@angular/core';

@Component({
    selector: 'app-left',
    templateUrl: './left.component.html',
    styleUrls: ['./left.component.css']
})
export class LeftComponent {
    title: string = "News";
    items: Array<string> = ['Welcome #1', 'Welcome #2'];
}
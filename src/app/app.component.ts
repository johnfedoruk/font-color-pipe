import { Component, OnInit, ElementRef } from '@angular/core';

const MIN: number = 0;
const MAX: number = 16777215;
const HEX_BASE: number = 16;
const MS_IN_S: number = 333;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private _bg: string;
    constructor(private ref:ElementRef) {}
    public ngOnInit(): void {
        this.bg = "#FFFFFF";
        setInterval(()=>this.bg=this.randomColor(),3*MS_IN_S);
    }
    public get bg(): string {
        return this._bg;
    }
    public set bg(bg: string) {
        this._bg = bg;
        this.ref.nativeElement.style.backgroundColor = bg;
    }
    public randomColor(): string {
        const DECIMAL: number = Math.floor(Math.random() * MAX) + MIN;
        return `#${DECIMAL.toString(HEX_BASE)}`;
    }
}

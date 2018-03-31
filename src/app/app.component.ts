import { Component, OnInit, ElementRef } from '@angular/core';
import { environment } from '../environments/environment';
import { FontColorPipe } from './modules/font-color/pipes/font-color.pipe';

const MIN = 0;
const MAX = 16777215;
const HEX_BASE = 16;
const MS_IN_S = 333;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private _bg: string;
    constructor(private ref: ElementRef) { }
    public ngOnInit(): void {
        this.bg = '#FFFFFF';
        setInterval(() => this.bg = this.randomColor(), 3 * MS_IN_S);
    }
    public get bg(): string {
        return this._bg;
    }
    public set bg(bg: string) {
        this._bg = bg;
        this.ref.nativeElement.style.backgroundColor = bg;
    }
    public randomColor(): string {
        const PREV_HEX: string = (new FontColorPipe()).transform(this._bg);
        const fontColorPipe = new FontColorPipe();
        let hex: string;
        do {
            const DECIMAL: number = Math.floor(Math.random() * MAX) + MIN;
            hex = `#${DECIMAL.toString(HEX_BASE)}`;
        } while (fontColorPipe.transform(hex) === PREV_HEX);
        return hex;
    }
    public onOpenGithub(): void {
        window.location.href = environment.github;
    }
}

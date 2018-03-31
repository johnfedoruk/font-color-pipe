# FontColorPipe

[![Build Status](https://travis-ci.org/johnfedoruk/font-color-pipe.svg?branch=master)](https://travis-ci.org/johnfedoruk/font-color-pipe)

This project contains an [Angular](https://angular.io) pipe that can be used for calculating the best font to display over an arbitrary background. The pipe, FontColorPipe, is exported from the FontColorModule.

## [Demo](https://johnfedoruk.github.io/font-color-pipe/index.html)

## NPM

```bash
npm install --save font-color-pipe
```

## Usage

```TypeScript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontColorModule } from 'font-color-pipe';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FontColorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

> ./src/app/app/module.ts

```TypeScript
import { Component, OnInit, ElementRef } from '@angular/core';

const WHITE: string = "#FFFFFF";
const BLACK: string = "#000000";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public _bg: string = WHITE;
    constructor(private ref:ElementRef) {}
    public ngOnInit(): void {
        setInterval(
            () =>
                this.bg = this.bg === BLACK ? WHITE : BLACK,
                1000
        );
    }
    public set bg(bg: string) {
        this._bg = bg;
        this.ref.nativeElement.style.backgroundColor = this.bg;
    }
    public get bg(): string {
        return this._bg;
    }
}
```

> src/app/app.component.ts

```html
<h1 id="font" [ngStyle]="{'color':bg | fontColor}">Hello</h1>
```

> src/app/app.component.html


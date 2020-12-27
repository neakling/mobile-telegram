import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
    selector: 'app-secnpage',
    templateUrl: './secnpage.page.html',
    styleUrls: ['./secnpage.page.scss'],
})
export class SecnpagePage implements OnInit {

    private segmentList: Array<string> = ['List', 'Information'];
    private selectedSegment: any;
    private slideListone: Array<string> = ['Переменный ток', 'Витая пара', 'Напряжение','Переменный ток','Переменный ток','Переменный ток', 'Пульсация','Переменный ток','Переменный ток','Переменный ток','Переменный ток'];

    @ViewChild('slide') slide: IonSlides;

    constructor() {
        this.selectedSegment = this.segmentList[0];
    }

    ngOnInit() {
    }

    _segmentSelected(item: string, index: number) {
        console.log(item, index);
        this.slide.slideTo(index);
    }

    _ionSlideDidChange(event: any) {
        this.slide.getActiveIndex().then(index => {
            console.log(index);
            console.log(this.segmentList[index]);
            this.selectedSegment = this.segmentList[index];
        })
    }
}

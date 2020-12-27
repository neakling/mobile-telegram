import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecnpagePage } from './secnpage.page';

describe('SecnpagePage', () => {
    let component: SecnpagePage;
    let fixture: ComponentFixture<SecnpagePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SecnpagePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SecnpagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

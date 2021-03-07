import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PagenotfoundComponent } from './pagenotfound.component';
describe('PagenotfoundComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [PagenotfoundComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PagenotfoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pagenotfound.component.spec.js.map
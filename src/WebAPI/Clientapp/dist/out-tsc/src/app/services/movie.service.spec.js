import { TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';
describe('MovieService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MovieService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=movie.service.spec.js.map
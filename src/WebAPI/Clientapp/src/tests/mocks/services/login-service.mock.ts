import { Observable, of } from 'rxjs';

export class LoginServiceMock {
    authenticate(data): Observable<boolean> {
        return of(true)
    }
}
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface RepositoryInterface<T> {
    getAll(): Observable<T[]>;
    getById(id: number): Observable<T>;
    post(entity: T): Observable<T>;
    put(entity: any, id: number): Observable<T>;
    delete(id: number): Observable<any>;
}

export abstract class AbstractService<T> implements RepositoryInterface<T> {
    private baseUrl: string;

    public constructor(baseUrl: string, protected http?: HttpClient) {
        this.baseUrl = baseUrl;
    }

    public getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.getUrl(), this.headers()).pipe(map(this.extractData), catchError(this.handleError));
    }

    public getById(id: number): Observable<T> {
        return this.http.get<T>(this.getUrl('/' + id), this.headers()).pipe(map(this.extractData), catchError(this.handleError));
    }

    public post(entity: T): Observable<T> {
        return this.http.post<T>(this.getUrl(), entity, this.headers()).pipe(map(this.extractData), catchError(this.handleError));
    }

    public put(entity: T, id: number): Observable<T> {
        return this.http.put<T>(
            this.getUrl('/' + id), entity, this.headers()).pipe(map(this.extractData), catchError(this.handleError));
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(this.getUrl('/' + id), this.headers()).pipe(catchError(this.handleError));
    }

    private extractData(res: Response) {
        let body: any = res;
        if (body.data) {
            body = body.data;
        }
        return body || {};
    }

    protected getUrl(relativeUrl?: string): string {
        let absoluteUrl = `${environment.apiUrl}/${this.baseUrl}`;
        if (relativeUrl !== null && relativeUrl !== undefined) {
            absoluteUrl += relativeUrl;
        }
        return absoluteUrl;
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }

    protected headers() {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return httpOptions;
    }
}

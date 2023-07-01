//11
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, take, tap} from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept request', req)

    //we can't edit request, so we clone it into a new variable
    const cloned = req.clone({
      headers: req.headers.append('Auth', 'SOME RANDOM TOKEN')
    })
    //return the handle method from the Next object and pass cloned request to it
    //this construction is a stream, so we can call any methods that have a stream
    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response){
          console.log('Interceptor response', event)
        }
      })
    )
  }
}

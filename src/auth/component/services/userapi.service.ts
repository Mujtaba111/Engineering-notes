import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*', 'Accept': 'application/json' })
};

const userapiUrl = 'http://localhost/api/';
 

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  
  constructor(private http: HttpClient, private router:Router) { }

 

  registernewuser (data: any): Observable<any> {
    let url = userapiUrl + "register.php";
    debugger;
    return this.http.post<any>(url, data,httpOptions);
  }
  
  loginuser (data: any): Observable<any> {
    let url = userapiUrl + "login.php";
    debugger;
    return this.http.post<any>(url, data,httpOptions);
  }

  
  logout() {
    localStorage.removeItem('access_token');
    sessionStorage.clear();
    this.router.navigate(['/']);
    window.location.reload();
  }

  getIPAddress() {
    return this.http.get("https://api.ipify.org/?format=json");
  }
}



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App AspNet Core and Angular';

  url = 'https://localhost:5001/api/users';
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http.get(this.url).subscribe(respon => {
      this.users = respon;
    }, error => {
      console.log('error:', error);
    });
  }
}

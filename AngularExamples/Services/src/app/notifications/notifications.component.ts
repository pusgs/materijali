import { Component, OnInit, NgZone } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { HttpClickService } from '../services/http-click.service'

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [HttpClickService]
})
export class NotificationsComponent implements OnInit {

  isConnected: Boolean;
  notifications: string[];
  time: string;

  constructor(private notifService: NotificationService, private http: HttpClickService,private ngZone: NgZone) {
    this.isConnected = false;
    this.notifications = [];
   }

  ngOnInit() {
    this.checkConnection();
    this.subscribeForNotifications();
    this.subscribeForTime();
  }

  private checkConnection(){
    this.notifService.connectionEstablished.subscribe(e => {this.isConnected = e; 
        if (e) {
          this.notifService.sendHello()
        }
    });
  }

  private subscribeForNotifications () {
    this.notifService.notificationReceived.subscribe(e => this.onNotification(e));
  }

  public onNotification(notif: string) {

     this.ngZone.run(() => { 
       this.notifications.push(notif);  
    });  
  }

  subscribeForTime() {
    this.notifService.timeReceived.subscribe(e => this.onTimeEvent(e));
  }

  public onTimeEvent(time: string){
    this.ngZone.run(() => { 
       this.time = time;  
    });  
  }

  public onClick() {
    if (this.isConnected) {
      this.http.click().subscribe(data => console.log(data));
    }
  } 

  public startTimer() {
    this.notifService.StartTimer();
  }

  public stopTimer() {
    this.notifService.StopTimer();
    this.time = "";
  }
}

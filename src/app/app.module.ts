import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const fireBaseConfig = {
  apiKey: "AIzaSyCxWIe-VDtrt_jFw5REAMZS3lShR1T2JcY",
  authDomain: "recipe-book-b212f.firebaseapp.com",
  projectId: "recipe-book-b212f",
  storageBucket: "recipe-book-b212f.appspot.com",
  messagingSenderId: "587375324792",
  appId: "1:587375324792:web:e2789459d56d2a721c878d",
  measurementId: "G-TVECKGZ361"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(fireBaseConfig)),
    provideFirestore(() => getFirestore()),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

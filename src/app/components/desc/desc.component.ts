import { Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

let apiLoaded = false;
@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.scss'],
})
export class DescComponent implements OnInit {
  isPhoto = true;
  isVideo = false;

  constructor() {}

  playVideo() {
    this.isPhoto = false;
    this.isVideo = true;
  }

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://youtu.be/fn4xy3K3aXo';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}

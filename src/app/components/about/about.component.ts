import { Component, OnInit } from '@angular/core';
import { ImageapiService } from '../../services/imageapi.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  gettyImageUri: string;
  gettyResult: any;
  giphyImageUrl : string;
  giphyResult : any;
  hobbies: string[];

  constructor(private imageApi: ImageapiService) { }

  ngOnInit() {
    const randomIndex = Math.floor((Math.random() * 30));
    this.hobbies = ['hobby1', 'hobby2', 'hobby3'];
    this.imageApi.getGettyImages().subscribe(
    data => {
      this.gettyResult = data;
      this.gettyImageUri = this.gettyResult.images[randomIndex].display_sizes[0].uri;
    });
    this.imageApi.getGiphyImages().subscribe(
    data => {
      this.giphyResult = data;
      this.giphyImageUrl = this.giphyResult.data.images.downsized.url;
    });
  }
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  addKeyword(hobby){
    environment.keyword = hobby;
  }
}

interface GiphyResult {
  data : giphyData;
}

interface giphyData {
  embedUrl: string;
}

interface GettyResult {
  result_count: number;
  images: Images[];
}

interface Images {
  id: string;
  display_sizes: DisplaySize[];
}

interface DisplaySize {
  uri: string;
}

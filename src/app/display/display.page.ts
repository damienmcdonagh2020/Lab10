import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
movies:any[]=[];
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getMovieData().subscribe(
      (data)=>{ 
        this.movies = data.Search; 
        console.log(this.movies);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  type = 'BarChart';
  columnNames2 = ['Year', 'Sales'];
  options = {};
  myData = [
    ['1', 0],
    ['2', 0],
    ['3', 0],
    ['4', 0],
    ['5', 0],
    ['6', 0],
    ['7', 0],
    ['8', 0],
    ['9', 0],
    ['10', 0]
  ];
  constructor( public movieService: MovieService,  public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.getRatingDetail(this.activatedRoute.snapshot.params.id).subscribe((res) => {
      console.log(res)
      if(res){
          let dataSet: any = []
          dataSet = res
          dataSet.forEach((ele, index)=> {
            const oneReview = dataSet.find((ele) =>  ele.ratingNo == index+1)
            this.myData[index][1] = oneReview['ratings']
          })
          
          console.log(this.myData)

      }
      
    }, (err) => {
        console.log(err)
    })
  }

}

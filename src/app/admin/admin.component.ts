import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogpost } from '../models/blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // blogposts$ : Observable<Blogpost[]>;
  allBlogposts: Blogpost[];

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    // this.blogposts$ = this.blogpostService.getBlogposts();
    this.blogpostService.getBlogposts()
      .subscribe(data => {
        console.log(data);
        this.allBlogposts = data;
      });
  }

  deleteBlogposts(selectOptions) {
    const ids = selectOptions.map(so => so._value);
    console.log(ids);
    this.blogpostService.deleteSingleBlogpost(ids[0]).subscribe(data => console.log(data));
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  
  constructor(  
    private postService: PostService,
    private router: Router,
    private activateRoute: ActivatedRoute) {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      status: new FormControl(0)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(obj : {title: string, content: string, status: number}) {

    console.log(obj);
   return this.postService.createPost(obj).subscribe(data => {
      this.router.navigate(['/posts']);
    });
  }
}

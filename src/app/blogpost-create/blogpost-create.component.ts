import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-create',
  templateUrl: './blogpost-create.component.html',
  styleUrls: ['./blogpost-create.component.css']
})
export class BlogpostCreateComponent implements OnInit {
  creationForm: FormGroup;

  constructor(private fb: FormBuilder, private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.creationForm = this.fb.group({
      title: '',
      subTitle: '',
      content: ''
    });
  }

  	createBlogpost(formDirective: FormGroupDirective) {
		if (this.creationForm.valid) {
			console.log(this.creationForm.value);
			this.blogpostService
				.createBlogpost(this.creationForm.value)
				.subscribe(data => this.handleSuccess(data, formDirective), err => this.handleError(err));
		}
	}
	  
	handleSuccess(data, formDirective) {
		  console.log('Created', data);
		  this.creationForm.reset();
		  formDirective.resetForm();
		  this.blogpostService.dispatchBlogpostCreated(data._id);
	}

	handleError(error) {
		console.error('Erreur', error);
	}

}

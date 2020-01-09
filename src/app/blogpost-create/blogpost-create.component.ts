import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-create',
  templateUrl: './blogpost-create.component.html',
  styleUrls: ['./blogpost-create.component.css']
})
export class BlogpostCreateComponent implements OnInit {
  creationForm: FormGroup;

  	constructor(private fb: FormBuilder, private blogpostService: BlogpostService, private el: ElementRef) { }

  	ngOnInit() {
    	this.createForm();
  	}

  	createForm() {
		this.creationForm = this.fb.group({
		title: '',
		subTitle: '',
		content: '',
		image: ''
		});
	}
	
	upload() {
		let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#image');
		let fileCount: number = inputEl.files.length;
		if (fileCount > 0) {
			let formData = new FormData();
			formData.append('image', inputEl.files.item(0));
			this.blogpostService.uploadImage(formData).subscribe(data => console.log(data), err => console.error(err));
		}
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Blogpost } from './models/blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  baseUrl = 'http://localhost:3000/api/v1/blog-posts';
  private blogpostCreated = new Subject<String>();

  constructor(private httpClient: HttpClient) { }

  getBlogposts(): Observable<Blogpost[]> {
    return this.httpClient.get<Blogpost[]>(`${this.baseUrl}/`);
  }

  getBlogpostById(id): Observable<Blogpost> {
    return this.httpClient.get<Blogpost>(`${this.baseUrl}/${id}`);
  }

  deleteSingleBlogpost(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  updateBlogpost(id: string, blogpost: Blogpost) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, blogpost);
  }

  deleteBlogposts(ids: string[]) {
    // http://localhost:3000/api/v1/blog-posts?ids=1sd,f45g,5544
    const allIds = ids.join(',');   // 'assds1, dkfkgpek, mmf5l84'
    return this.httpClient.delete(`${this.baseUrl}/?ids=${allIds}`);
  }

  createBlogpost(blogpost: Blogpost) {
    return this.httpClient.post<Blogpost>(this.baseUrl, blogpost);
  }

  dispatchBlogpostCreated(id: string) {
    this.blogpostCreated.next(id);
  }

  handleBlogpostCreated() {
    return this.blogpostCreated.asObservable();
  }

  uploadImage(formData: FormData) {
    return this.httpClient.post<any>(`${this.baseUrl}/images`, formData);
  }
}

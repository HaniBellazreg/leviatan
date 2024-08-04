import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../model/article';
import { ArticlesService } from '../services/articles.service';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButton, ReactiveFormsModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  userService = inject(UserService);
  article!: Article;

  articleForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id: number = isNaN(params['id']) ? null : params['id'];
      if (id) {
        this.articleService.getArticle(id)
          .subscribe((reponse) => {
            this.article = reponse.article;
            this.articleForm.setValue({ title: this.article.title, content: this.article.content, image: this.article.image });
          });
      }
    });
  }

  add() {
    this.articleService.add(this.articleForm.getRawValue()).subscribe((response) => {
      if (response.article.id) {
        alert('Article added successfully');
        this.router.navigateByUrl('/articles/' + response.article.id);
      }
    });
  }

  edit() {
    this.articleService.edit(this.article.id, this.articleForm.getRawValue()).subscribe((response) => {
      if (response.article.id) {
        alert('Article edited successfully');
      } else {
        alert('Error occured while saving, please retry');
      }
    });
  }
}

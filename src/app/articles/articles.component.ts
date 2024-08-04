import { Component } from '@angular/core';
import { Article } from '../model/article';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterOutlet, RouterLink, MatButtonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  articles: Article[] = [];
  displayedColumns: string[] = ['title', 'content', 'link', 'delete'];

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data.articles;
    });
  }

  deleteArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe(data => {
      if (data.success == true) {
        this.articles = this.articles.filter((article) => {
          return article.id != id;
        });
      }
    });
  }
}

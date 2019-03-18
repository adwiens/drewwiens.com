import { Component } from '@angular/core';

interface Post {
  title: string;
  date: string;
  description: string;
  avatarFilename: string;
  link: string;
}

@Component({
  selector: 'andev-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  posts: Post[] = [
    {
      title: 'Build an API with Loopback 3, TypeScript, and Custom Connectors',
      date: 'January 5, 2018',
      description: 'Recipes for converting a Loopback 3 CLI app to use TypeScript, and how to ' +
       'customize the framework with your own connectors.',
      avatarFilename: 'loopback-logo.png',
      link: 'https://blog.oasisdigital.com/2018/loopback-3-typescript-custom-connectors/',
    },
    {
      title: 'Improve the Runtime Performance of Angular Apps',
      date: 'September 19, 2017',
      description: 'Strategies for increasing the runtime performance of Angular applications. A ' +
        'blog post in whitepaper format.',
      avatarFilename: 'angular-logo.png',
      link: 'https://blog.oasisdigital.com/2017/angular-runtime-performance-guide/',
    },
    {
      title: 'How to Learn Angular Without Web Development Experience',
      date: 'September 16, 2017',
      description: 'Tips on how to learn Angular without experience with JavaScript or other ' +
        'front-end technologies.',
      avatarFilename: 'angular-logo.png',
      link: 'https://blog.oasisdigital.com/2017/angular-from-the-fire-hose/',
    },
    {
      title: 'Academic Papers',
      date: 'Dates Vary',
      description: 'Papers I have published in academic journals and conferences.',
      avatarFilename: 'ieee-logo.png',
      link: 'https://scholar.google.com/citations?user=_N2X7KwAAAAJ',
    }
  ];
}

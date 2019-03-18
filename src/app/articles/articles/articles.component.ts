import { Component } from '@angular/core';

interface Post {
  title: string;
  date: string;
  description: string;
  imageFilename: string;
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
      title: 'Loopback 3, TypeScript, and Custom Connectors',
      date: 'January 5, 2018',
      description: 'Recipes for converting a Loopback 3 CLI app to use TypeScript, and how to ' +
       'customize the framework with your own connectors.',
      imageFilename: 'loopback-logo.png',
      link: 'https://blog.oasisdigital.com/2018/loopback-3-typescript-custom-connectors/',
    },
    {
      title: 'Angular Runtime Performance Guide',
      date: 'September 19, 2017',
      description: 'Strategies for increasing the runtime performance of large Angular apps.',
      imageFilename: 'angular-logo.png',
      link: 'https://blog.oasisdigital.com/2017/angular-runtime-performance-guide/',
    },
    {
      title: 'Drinking From the Fire Hose: How I Learned Angular Without Modern Web Experience',
      date: 'September 16, 2017',
      description: 'Tips on how to learn Angular without other JS or front-end experience.',
      imageFilename: 'angular-logo.png',
      link: 'https://blog.oasisdigital.com/2017/angular-from-the-fire-hose/',
    },
    {
      title: 'Academic Papers',
      date: 'Date Varies',
      description: 'Papers I have published in academic journals and conferences.',
      imageFilename: 'ieee-logo.png',
      link: 'https://scholar.google.com/citations?user=_N2X7KwAAAAJ',
    }
  ];
}

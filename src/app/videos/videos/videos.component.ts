import { Component } from '@angular/core';

interface Post {
  title: string;
  date: string;
  description: string;
  imageFilename: string;
  avatarFilename: string;
  link: string;
  extraLinks?: { label: string, link: string }[];
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  posts: Post[] = [
    {
      title: 'GraphQL: What and Why',
      date: 'Aug 20, 2020',
      description: `Overview of GraphQL's features and a comparison with RESTful API's for
      enterprise teams. Talk given at St. Louis Angular Lunch Meetup.`,
      imageFilename: 'gqlww.png',
      avatarFilename: 'graphql-logo.png',
      link: 'https://www.youtube.com/watch?v=uhY81zcT8ns'
    },
    {
      title: 'Angular Reactive Forms',
      date: 'Apr 18, 2019',
      description: `In this video we look at a demo application on StackBlitz that is using Angular
      reactive forms, synchronous validators, an asynchronous validator, and a small Node.js Express
      backend. The demo application is a fake domain registrar that checks if a domain name can be
      reached with an HTTP request to see if it is available for purchase.`,
      imageFilename: 'forms1.png',
      avatarFilename: 'angular-logo.png',
      link: 'https://www.youtube.com/watch?v=EduDRsy3GkI',
    },
    {
      title: 'Machine Learning for Front End Features',
      date: 'Mar 13, 2019',
      description: `Ideas for front-end machine learning features with Angular and
      TensorFlow.js. Two Angular demos using MobileNets, the Universal Sentence Encoder, and
      k-nearest neighbors from tfjs. Talks given at St. Louis Angular Lunch and COMO DevFest 2019.`,
      imageFilename: 'ml1.png',
      avatarFilename: 'tf-logo.png',
      link: 'https://www.youtube.com/watch?v=rGHF3D8YrD0',
    },
    {
      title: 'Angular Drag-and-Drop',
      date: 'Feb 5, 2019',
      description: `Google DevFest talk at STL and WindyCity 2019. How to add drag-and-drop to an
      Angular application with the Material CDK 7 drag-drop library.`,
      imageFilename: 'dragdropwindycity.png',
      avatarFilename: 'angular-logo.png',
      link: 'https://www.youtube.com/watch?v=UBbI6-QTdec',
      extraLinks: [
        { label: 'STL Version', link: 'https://www.youtube.com/watch?v=JIqtgkKx7PE' },
      ],
    },
    {
      title: 'Create a Desktop Version of an Angular App with Electron',
      date: 'Sep 28, 2018',
      description: `Build a desktop version of an Angular application with Electron. Desktop-
      specific features can be implemented securely with the Node API and window bridge.`,
      imageFilename: 'electronvid1.png',
      avatarFilename: 'electronlogo.png',
      link: 'https://www.youtube.com/watch?v=kGYTpFbkKMI',
    },
    {
      title: 'Add Drag-and-Drop with Angular Material CDK 6 Experimental',
      date: 'Sep 25, 2018',
      description: `How to add drag-and-drop to an Angular application with the experimental
      Material CDK 6 drag-drop library.`,
      imageFilename: 'dragdropvid1.png',
      avatarFilename: 'angular-logo.png',
      link: 'https://www.youtube.com/watch?v=KyNDZ55kbJM',
    },
    {
      title: 'Build APIs Declaratively with Loopback 3',
      date: 'Nov 10, 2017',
      description: `A quick-start guide creating a RESTful API with the Loopback 3 CLI
      and connecting it to the standard Angular Tour-of-Heroes demo app. Meetup talk.`,
      imageFilename: 'lbvid1.png',
      avatarFilename: 'loopback-logo.png',
      link: 'https://www.youtube.com/watch?v=rpiv8SV-7tk',
    },
  ];
}

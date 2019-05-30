import { Component } from '@angular/core';

interface Post {
  title: string;
  date: string;
  description: string;
  imageFilename?: string;
  avatarFilename: string;
  link: string;
  extraLinks?: { label: string, link: string }[];
}

@Component({
  selector: 'andev-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss']
})
export class SpeakingComponent {
  posts: Post[] = [
    {
      title: 'Machine Learning for Front End Features',
      date: 'Mar 13, 2019',
      description: `Ideas for front-end machine learning features with Angular and TensorFlow.js.
      Two demo Angular apps using tfjs MobileNets, the Universal Sentence Encoder, and k-nearest
      neighbors.`,
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
        { label: 'STL Dev Fest 2019', link: 'https://www.youtube.com/watch?v=JIqtgkKx7PE' },
      ],
    },
    {
      title: 'Build APIs Declaratively with Loopback 3',
      date: 'Nov 10, 2017',
      description: `A quick-start guide creating a RESTful API with the Loopback 3 CLI and
      connecting it to the standard Angular Tour-of-Heroes demo app.`,
      imageFilename: 'lbvid1.png',
      avatarFilename: 'loopback-logo.png',
      link: 'https://www.youtube.com/watch?v=rpiv8SV-7tk',
    },
    {
      title: 'Academic Talks',
      date: 'Dates Vary',
      description: `Talks at various academic conferences in graduate school, e.g. several IEEE ones
      and the Acoustical Society.`,
      avatarFilename: 'ieee-logo.png',
      link: 'https://scholar.google.com/citations?user=_N2X7KwAAAAJ',
    },
  ];
}

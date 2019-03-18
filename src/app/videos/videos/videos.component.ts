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
  selector: 'andev-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  posts: Post[] = [
    {
      title: 'Maching Learning for Front-End Features',
      date: 'Mar 13, 2019',
      description: 'Ideas for front-end machine learning features with Angular and TensorFlow.js.' +
        ' Two demo Angular apps using tfjs MobileNets, the Universal Sentence Encoder, and k-' +
        'nearest neighbors.',
      imageFilename: 'ml1.png',
      avatarFilename: 'tf-logo.png',
      link: 'https://www.youtube.com/watch?v=rGHF3D8YrD0',
    },
    {
      title: 'Add Drag-and-Drop with Angular Material CDK 7',
      date: 'Feb 5, 2019',
      description: 'How to add drag-and-drop capability to an Angular application with the ' +
      'Material CDK 7 drag-drop library. At WindyCity Dev Fest 2019.',
      imageFilename: 'dragdropwindycity.png',
      avatarFilename: 'angular-logo.png',
      link: 'https://www.youtube.com/watch?v=UBbI6-QTdec',
      extraLinks: [
        { label: 'STL Dev Fest', link: 'https://www.youtube.com/watch?v=JIqtgkKx7PE' },
      ],
    },
    {
      title: 'Create a Desktop Version of an Angular App with Electron',
      date: 'Sep 28, 2018',
      description: 'Build a desktop version of an Angular application with Electron. Desktop-' +
        'specific features can be implemented securely with the Node API and window bridge.',
      imageFilename: 'electronvid1.png',
      avatarFilename: 'electronlogo.png',
      link: 'https://www.youtube.com/watch?v=kGYTpFbkKMI',
    },
    {
      title: 'Add Drag-and-Drop with Angular Material CDK 6 Experimental',
      date: 'Sep 25, 2018',
      description: 'How to add drag-and-drop capability to an Angular application with the ' +
        'experimental Material CDK 6 drag-drop library.',
      imageFilename: 'dragdropvid1.png',
      avatarFilename: 'angular-logo.png',
      link: 'https://www.youtube.com/watch?v=KyNDZ55kbJM',
    },
    {
      title: 'Build APIs Declaratively with Loopback 3',
      date: 'Nov 10, 2017',
      description: 'A quick-start guide creating a RESTful API with the Loopback 3 CLI and ' +
        'connecting it to the standard Angular Tour-of-Heroes demo app.',
      imageFilename: 'lbvid1.png',
      avatarFilename: 'loopback-logo.png',
      link: 'https://www.youtube.com/watch?v=rpiv8SV-7tk',
    }
  ];
}

import { Component } from '@angular/core';

interface Post {
  title: string;
  date: string;
  description: string;
  avatarFilename: string;
  link: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  posts: Post[] = [
    {
      title: 'Why You Should Try Ubuntu as Your Daily Driver OS',
      date: 'Sep 15, 2019',
      description: `Ubuntu LTS offers an excellent JavaScript/TypeScript developer experience and a
      great on-ramp to Linux. This article is primarily about switching to Ubuntu from Windows 10.`,
      avatarFilename: 'ubuntu-logo.png',
      link: 'https://medium.com/@andywiens/why-you-should-try-ubuntu-again-5e8cb998c480'
    },
    {
      title: 'Build an API with Loopback 3, TypeScript, and Custom Connectors',
      date: 'Jan 5, 2018',
      description: `Recipes for converting a Loopback 3 CLI app to use TypeScript, and how to
      customize the framework with your own connectors.`,
      avatarFilename: 'loopback-logo.png',
      link: 'https://blog.oasisdigital.com/2018/loopback-3-typescript-custom-connectors/',
    },
    {
      title: 'Improve the Runtime Performance of Angular Apps',
      date: 'Sep 19, 2017',
      description: `Strategies for increasing the runtime performance of Angular applications. A
      blog post in whitepaper format.`,
      avatarFilename: 'angular-logo.png',
      link: 'https://blog.oasisdigital.com/2017/angular-runtime-performance-guide/',
    },
    {
      title: 'Noninvasive Systems And Methods For Monitoring Health Characteristics',
      date: '2017',
      description: `US patent application for measuring heart timing with accelerometers worn or
      held on the body, e.g. with smartwatches and phones.`,
      avatarFilename: 'uspto-logo.png',
      link: 'https://patents.google.com/patent/US20170238847A1/en',
    },
    {
      title: 'Wearable sensing of cardiac timing intervals from cardiogenic limb vibration signals',
      date: '2017',
      description: `The best way I found to measure heart timings from
      accelerometers on the body over three years of graduate research at Georgia Tech. This is the
      first time anyone had demonstrated that aortic valve closing could be detected with an
      accelerometer worn on the wrist, e.g. with a smartwatch. This paper is a refinement of my
      earlier system identification paper.`,
      avatarFilename: 'ieee-logo.png',
      link: 'https://ieeexplore.ieee.org/abstract/document/7795193/',
    },
    {
      title: `VibroCV: a computer vision-based vibroarthrography platform with possible application
      to juvenile idiopathic arthritis`,
      date: '2016',
      description: `A moonshot to see if we could measure anything useful with lab grade
      accelerometers on joints of children with arthritis. I built a computer vision system with USB
      cameras and OpenCV in VisualC++ to measure the joint angles during walking and exercise.`,
      avatarFilename: 'ieee-logo.png',
      link: 'https://ieeexplore.ieee.org/abstract/document/7591710/',
    },
    {
      title: `A novel system identification technique for improved wearable hemodynamics
      assessment`,
      date: '2015',
      description: `The best approach I found during the first year of
      my M.S. research on measuring cardiovascular timings with wearable accelerometers. I refined
      and published a slightly better method a bit later.`,
      avatarFilename: 'ieee-logo.png',
      link: 'https://ieeexplore.ieee.org/abstract/document/7001053/',
    },
    {
      title: 'Other Papers',
      date: 'Dates Vary',
      description: `Other papers I have published in academic journals and conferences.`,
      avatarFilename: 'ieee-logo.png',
      link: 'https://scholar.google.com/citations?user=_N2X7KwAAAAJ',
    },
  ];
}

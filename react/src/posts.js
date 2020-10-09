export const videos = [
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

export const articles = [
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

export const speaking = [
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
    title: 'Full Stack Angular with NestJS',
    date: 'Sep 28, 2019',
    description: `Lightning talk at St. Louis DevFest 2019. An intro to using NestJS and
    TypeScript to create amazing backends for Angular apps.`,
    imageFilename: 'fsngnest.png',
    avatarFilename: 'angular-logo.png',
    link: 'https://speakerdeck.com/adwiens/full-stack-angular-with-nestjs',
  },
  {
    title: 'Machine Learning for Front End Features',
    date: 'Mar 13, 2019',
    description: `Ideas for front-end machine learning features with Angular and TensorFlow.js.
    Two demo Angular apps using tfjs MobileNets, the Universal Sentence Encoder, and k-nearest
    neighbors. Talks given at St. Louis Angular Lunch and COMO DevFest 2019.`,
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

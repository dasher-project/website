---
date: 2020-01-01
title: "Announcing Dasher-v6"
linkTitle: "Announcing Dasher v6"
description: "Its a long road ahead - but we will get there"
author: Will Wade ([@willwade](https://twitter.com/willwade))	
resources:
- src: "**.{png,jpg}"
  title: "Image #:counter"
  params:
    byline: "Photo: Jesse Costa/WBUR"
---

{{< imgproc steve Fill "600x300" >}}
Steve Saling uses Dasher with a headmouse. 
{{< /imgproc >}}

## History

Dasher started life in the form of a prototype written in 1997 by David MacKay, who at the time was a lecturer in physics at the University of Cambridge. David had been discussing the then current generation of mobile devices with a colleague, and felt that the use of physical keyboards for text entry made them unnecessarily bulky. Dasher was inspired by 'arithmetic coding', an efficient file compression technique which was one of the subjects taught by David in his popular fourth year course for undergraduates.

Between 1998 and 2002, one of David MacKay’s PhD students, David Ward, developed Dasher into a fully featured open source application for Windows and Linux as part of his work towards his thesis. Over the years, many other people worked on Dasher, many of whom were in David’s research group, the Inference Group. The software was ported to a number of platforms, including Apple macOS and iOS as well as few which are now less relevant, such as Solaris and various pre-iPhone mobile devices. Dasher became part of the GNOME Desktop project in 2002, which resulted in the software being included in several Linux distributions.

Dasher was conceived as a flexible text entry system. As well as the core applications in AAC and mobile devices, it was designed to be portable and has been used on a number of more specialised hardware platforms, such as wearable computers. Dasher has also been used for text entry in languages with large alphabets, such as Chinese and Japanese.

Dasher was developed to work as a standalone tool, but was also integrated into assistive text entry frameworks on Linux and Windows, which allowed it to be used to enter text into other applications. Since early versions, Dasher has included speech synthesis software to allow it to function as a communication aid.

As well as conventional pointing devices such as mouses, Dasher has been evaluated with eye trackers, joysticks, and discrete buttons, all in various configurations. A number of research papers have been published comparing the effectiveness and efficiency of these input mechanisms.

The original Dasher project was largely dormant after version 4.11, which was released in March 2010. In 2016 the Dasher project was restarted, and version 5 was developed. In 2019 the current project to create version 6, which is a complete rebuild using a more modern technology base, was kicked off.

## So why start all over again?

A number of people have worked on Dasher's code base and going forward - with more features being added, or language model testing being carried out - or just to keep the application updated across the different operating systems - its not been easy. Its certainly not been the easiest codebase for anyone just to jump on board and help out on. 

But also - its 2020 and its time to build an architecture that last another 20 years. 


## What’s Next

There's a lot to do. Here is a quick rundown:
- Build an *awesome* language model that has an impact for dasher users - but hopefully - the entire AAC ecosystem. We hope to support as many languages as possible. 
- Create a modular architecture that allows for input (eg touch, switch, headmouse, eyegaze) and output methods (text in a display bar, speech, secondary display) to be accessed by a API/SDK. But also allow for configuration of the zooming interface by API - and make it accessible to the user themselves
- Providing an architecture to extend dasher more easily than before. Want to drive Dasher by speech? By Breath? We want to help future proof dasher and help the development pathway easier. 
- Develop a user experience for the app that allows new users to feel comfortable with dasher and learn - steadily - how to use it - and adapt to their changing needs. 
- Iterative user testing throughout creating a solution that is user led. 

## Getting Started

If you want to get started, have a look at the [issue queue](https://github.com/dasher-project/redash/issues) - and submit a Pull Request. 

## What do we need?

If you are a user of dasher - please get in touch with [Will](mailto:wwade@acecentre.org.uk). As you can see [here](/about/#who-uses-dasher-right-now-what-features-do-we-need-to-support) - we are trying to pull together as many current use cases to identify priorities - but also help with user testing

The team coding dasher is all working on this pro-bono. A massive, massive thanks to [them](/about/#who-is-involved). However we always need more coding support. If something in the issue queue doesnt look right - then please join the community or drop us a email and we'd love to point you in the right direction to get you helping out. We do need to pay for user testing and design work. If you can offer funds towards the project - please get in touch with [Will](mailto:wwade@acecentre.org.uk). If you are a UX/UI expert we particularly want to hear from you!



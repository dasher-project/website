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
Screenshot of first build of site
{{< /imgproc >}}

## History

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis ut velit eget egestas. Donec convallis facilisis velit, a congue magna elementum ut. Sed nec ex imperdiet, gravida justo eu, ullamcorper mi. In finibus ex sit amet auctor ultricies. Sed lorem velit, porttitor a interdum vitae, molestie eu nunc. Sed lobortis purus tortor, sed posuere massa blandit quis. Aenean imperdiet felis vel magna finibus aliquet. Sed hendrerit accumsan nisi, eget vestibulum lectus venenatis at. Pellentesque finibus sem vitae efficitur lobortis. Vestibulum sem eros, tempus nec massa nec, elementum vulputate nisl.

Maecenas tincidunt nunc sit amet dolor sollicitudin sodales. In ac erat tempor, suscipit diam a, auctor neque. Suspendisse potenti. Nullam viverra ex et diam porta blandit condimentum at metus. Maecenas at dui sagittis, aliquam ligula id, ultricies diam. Vestibulum dignissim egestas egestas. Quisque a orci ipsum. In eleifend ipsum non felis mattis, sit amet auctor turpis interdum. Nulla eget viverra diam. Curabitur lacinia felis vel maximus bibendum.

Nam tincidunt vehicula malesuada. Nam posuere dolor nunc, mattis egestas ante imperdiet quis. Nullam mattis, elit eget cursus lacinia, mauris sem porta nisl, in rutrum orci urna sed nisl. Quisque in justo non lorem dignissim eleifend. Quisque commodo neque a volutpat condimentum. Morbi dignissim convallis metus, non maximus nibh ornare a. Fusce mollis accumsan nulla, a finibus sapien interdum in. Pellentesque sollicitudin posuere tristique.

Curabitur eget urna eu orci mattis molestie. Nullam pellentesque cursus risus tincidunt molestie. Pellentesque neque dolor, tempus a arcu dapibus, hendrerit placerat velit. Quisque consectetur orci venenatis tellus ullamcorper, quis blandit ipsum tempor. Fusce eu feugiat erat. In hac habitasse platea dictumst. Vivamus egestas, odio at gravida ultricies, urna tellus malesuada erat, sit amet pellentesque dolor augue quis dui. Fusce laoreet sed elit id feugiat.

Proin in fermentum eros, at cursus diam. Sed vehicula lobortis libero eget sodales. Quisque laoreet mattis ultricies. Donec sed varius ante. Nunc interdum, est ac laoreet feugiat, lacus lorem feugiat turpis, at finibus elit neque sit amet est. Curabitur quis felis non nunc pretium placerat a et felis. Praesent nisi tortor, consectetur sed feugiat sit amet, tristique cursus metus. Etiam ac lacus ut purus bibendum rutrum vitae sed nisl. Morbi molestie ac nulla et rhoncus. Quisque cursus convallis semper. In et sapien sit amet sem tristique eleifend. Nam pretium dignissim ligula vel hendrerit. Maecenas tristique vel tellus quis imperdiet. Nunc cursus pharetra velit, vitae fermentum massa aliquet maximus.


## Features

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus diam, dictum in nisl vitae, vehicula ornare dui. Donec nec elit sed leo accumsan volutpat sit amet nec mi. Fusce accumsan elit quis aliquet pretium. Vestibulum ut nisl iaculis, fringilla sem sit amet, vulputate tortor. Integer quis quam venenatis, feugiat sapien nec, molestie erat. Nam tincidunt suscipit porttitor. Aenean mattis at dolor sit amet dapibus. Praesent id consectetur nisl. Aenean semper dui augue, in scelerisque nulla vestibulum ut. Fusce neque ante, lobortis in semper sed, malesuada et ligula. Praesent vestibulum vitae lectus eu faucibus. Mauris sagittis porta lacus, ut ornare sapien pulvinar id. Aenean dapibus at sapien scelerisque commodo. Pellentesque scelerisque nisl ac rhoncus vulputate. Aenean ac vulputate lectus, vitae vehicula neque.

Aenean in tempus nibh. Donec placerat, nisi eu tempor fermentum, dui ligula condimentum nisl, quis ornare lorem augue in justo. Sed eu augue risus. Etiam sollicitudin vel magna quis dictum. Ut nisi neque, malesuada ut ligula ac, pharetra ullamcorper metus. Cras consectetur nunc ligula, a molestie libero mollis vitae. Maecenas vulputate lacus et nibh tincidunt sollicitudin. Sed sed mi fermentum, consequat sapien in, facilisis ipsum. Etiam eu tincidunt est, eu hendrerit urna. Suspendisse potenti. Vivamus tempor faucibus ipsum vitae laoreet. Vivamus id orci vel nisi pellentesque elementum. Etiam lacinia purus id enim dictum, vitae mollis lectus iaculis. Proin eget ipsum a ante mattis finibus. Fusce sit amet mollis orci, vitae aliquet ex. Ut felis mauris, aliquam id sem ut, tempor ullamcorper sem.

*   Define single a `GameServer`, or large pre-spun game server `Fleets`, either through kubectl + yaml or via the 
    Kubernetes API.
*   Manage GameServer life cycles - including health checking and connection information through configuration and an
    integrated SDK.
*   Game server `Fleet` autoscaling capabilities that integrate with Kubernetes' native cluster autoscaling.
*   Game server specific metric exports and dashboards for operations teams.
*   Allocate `GameServers` out of a set for players to play on, even while scaling or updating backing Fleet
    configuration and rollout.
*   Optimisation patterns for both Cloud and On-Premises to ensure cost effective usage of your infrastructure.
*   Modular architecture that can be further customised to the needs of your game.
*   Local development tools for fast development interaction without the need of a full Kubernetes cluster.
*   … and even more!

## What’s Next

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus diam, dictum in nisl vitae, vehicula ornare dui. Donec nec elit sed leo accumsan volutpat sit amet nec mi. Fusce accumsan elit quis aliquet pretium. Vestibulum ut nisl iaculis, fringilla sem sit amet, vulputate tortor. Integer quis quam venenatis, feugiat sapien nec, molestie erat. Nam tincidunt suscipit porttitor. Aenean mattis at dolor sit amet dapibus. Praesent id consectetur nisl. Aenean semper dui augue, in scelerisque nulla vestibulum ut. Fusce neque ante, lobortis in semper sed, malesuada et ligula. Praesent vestibulum vitae lectus eu faucibus. Mauris sagittis porta lacus, ut ornare sapien pulvinar id. Aenean dapibus at sapien scelerisque commodo. Pellentesque scelerisque nisl ac rhoncus vulputate. Aenean ac vulputate lectus, vitae vehicula neque.



## Getting Started

If you want to get started, have a look at the ...

## Finally

A massive thanks to everyone in the  community - from our users, to people that have submitted bugs and feature
requests, to contributors, approvers and more. This has truly been a group effort, and it wouldn’t have been
possible without the time and effort that many people have put into this project.
# Micro Frontend Angular 11 Destroy Issue

## Overview
Micro-Frontend that are developed using Angular-Elements can be either of the two types below.

 1. Single Page or widget Micro-Frontend (Microapp-A)
 2. Multi Page Micro-Frontend (Microapp-B)

## How to run the Project

To see the issue clearly, Go to `driver-app` folder and execute the below commands
```
npm i
ng serve
```
----
To Modify and test Microapp-A changes, go to `micro-app-a` folder and execute the below command

```
npm i
npm run build:micro-app-a:externals
```

Copy `micro-app-a` folder under `dist` folder and replace the existing `micro-app-a` folder under `driver-app/src/assets`. 

---- 

To Modify and test Microapp-B changes, go to `micro-app-b` folder and execute the below command

```
npm i
npm run build:micro-app-b:externals
```

Copy `micro-app-b` folder under `dist` folder and replace the existing `micro-app-b` folder under `driver-app/src/assets`. 
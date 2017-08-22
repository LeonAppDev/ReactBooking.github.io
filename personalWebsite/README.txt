Created by Leon Ren
leon-ren.com | @liangren64@gmail.com
Free for personal and commercial use under the GPL 3.0

Main Technology Stack:
MVVM Design
React
dotnet.core
dotnetify
SignalR
material-ui
nginx

See a live demo on leon-ren.com or 128.199.152.91

Function:
Accept Length, Breadth, Height and Weight and output delivery cost if fit in.

Pre-Request
This project is build with Visual Studio 2017, with a 3rd party library dotnetfiy which required SignalR.

To run the Front-end Project
1 npm install
2 webpack-dev-server
3 Left log in dispatchState to see state sent to View Model backend.


To run the entire project
1 webpack --config

2 ASP.NET Core:
PM> Install-Package DotNetify.Core -pre
PM> Install-Package DotNetify.SignalR -pre

3 Run Debug with VS2017

To Publish to Linux server
1 Defect exists when publishing with FTP using VS2017, no folder upload, need use vs2015
2 Need to modify Program.cs to stop running from IIS,


Improve
1 Could add Promise to dotnetify
2 Use Redux to manage state
3 Test with Ava
4 Set rule with ESLint
5 Connect with DB(MongoDB on linux)

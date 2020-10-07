# notification-panel
notification panel for any app

## `Created by: SurajB (chougulesurajb@gmail.com)`
## `Last Updated: 07 10 2019`

Stacks used: 
1. React
2. Node 
3. Css/Scss
4. Html

### Run App instructions:

1. Extract notification-panel.zip in folder
2. Open command prompt/terminal in this folder
3. Run `yarn install` or `npm install` to install dependencies for project
4. Run `yarn dev` or `npm dev` to run the project. If 3000 port is available then this project will run on `http://localhost:3000/ `
5. If 3000 port is occupied then allow to run this on 3001 port `http://localhost:3001/`

### Production build run:

To run this project in server side follow below instructions:
1. Open command prompt/terminal in this folder
2. Run `yarn install` or `npm install` to install dependencies for project. If you have already installed this then skip this step.
3. Run `yarn build` or `npm run build` to create production build.
4. finally run `serve -s build` to run this project on `http://localhost:5000/`

### Data Model:
```
                            ---------------------------------------------------
                            |   NotificationApp                                 |
                            ---------------------------------------------------
                            |panelActive- bool- Panel status                    |
                            |settingActive- bool- Settings status               |
                            |notifications- array- All notifications array data |
                            |count- number- total number of notifucation        |
                            |theme- object- app theme handling object           |
                            ---------------------------------------------------
                                                    |
                        |---------------------------------------------------------------|
  ---------------------------------------------------   --------------------------------------------------
|   Panel                                           |   |   Button                                          |
 ---------------------------------------------------     ---------------------------------------------------
|markAll- func- handler for read mark all           |   |panelActive- bool- button status with panel status | 
|clickRead- func- handler for mark a notification   |   |label- string- button label                        |
|notifications- array- All notifications array data |   ---------------------------------------------------
 ---------------------------------------------------
                        |
 ---------------------------------------------------
|   Notification                                    | 
 ---------------------------------------------------
|id- string- Unique Id for each notification        |
|title- string- Title of the notification           |
|info- string- more info for notification           |
|read- bool- read/unread status for notification    |
|click- func- handler to manage read status         |
|url- string- redirect url for notification         |     
 ---------------------------------------------------
```

### Rest API definitions to interact with the backend:

1. GET  | get all the notifications when application loads
2. POST | mark notification as read an update
3. POST | mark all notification as read
4. GET  | get application theme settings
5. POST | update theme settings when changed


### How this app can be used
There are couple of ways to plug this app in any application
1. notiApp folder can be copied to different application and use <NotificationApp /> component with required props.
2. make npm package of this and import the component <NotificationApp /> with required props.

### Example hosted
https://notification-panel-suraj.herokuapp.com/

Thank you !

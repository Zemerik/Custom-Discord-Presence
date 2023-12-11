# Custom-Discord-Presence

## About:

This project allows to have your own custom discord presence, which is fully customizable. The standard presence comes with 2 images (1 small & 1 big), Timezone, Name, State, Details, and 2 buttons. Note that this is 100% Customisable to your choice!

## How to use:

### Mobile Users:
> Unfortunetly this code is unnable to function for mobile users. 

### Cloning:
1. First clone this repository in your local machine by running the folowing GIT Command (preferebly in your Code Editors Terminal):

```git
git clone https://github.com/Zemerik/Custom-Discord Presence
```

> Note that you don't have to use GIT, you can simple copy paste the code.

### Installing:

1. Now head over to your projects terminal and initialize a node.js project by entering the following:

```js
npm innit
```

> Follow the steps and remember to make `index.js` the valid entry point of your project. 

2. Now install some important modules by using the following commands in the terminal:

```
npm install discord.js-selfbot-v13
```

```
npm install ascii-table
```

### Token
1. Head over to the `config.js` file and add **YOUR ACCOUNT TOKEN** on line 4. 
> For Assistance, you can watch this video: https://youtu.be/LnBnm_tZlyU 

### Customizing:
1. You can now edit your presence as you like in the `config.js` file, however remember the following:
> The image links must be `CDN` images. To solve this, simple send your image on discord, open the image in a browser and copy the link. 

### Running:
1. Now run your project, and you should be able to see your custom presence!

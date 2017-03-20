import { MailBox } from './mail-box';

export const mailBoxes: MailBox[] = [
    {name: 'income', letters: [
        {from: 'test@mail.com', to: 'me@mail.com', theme: 'Theme', message: 'tmp text',
        important: true, time: new Date(1995, 11, 17, 3, 24, 0), selected: false},
        {from: 'test@mail.com', to: 'me@mail.com', theme: 'Theme', message: 'tmp text',
        important: true, time: new Date(1995, 11, 17, 3, 24, 0), selected: false},
        {from: 'test@mail.com', to: 'me@mail.com', theme: 'Theme', message: 'tmp text',
        important: true, time: new Date(1995, 11, 17, 3, 24, 0), selected: false},
        {from: 'test@mail.com', to: 'me@mail.com', theme: 'Theme', message: 'tmp text',
        important: true, time: new Date(1995, 11, 17, 3, 24, 0), selected: false},
        {from: 'test@mail.com', to: 'me@mail.com', theme: 'Theme', message: 'tmp text',
        important: true, time: new Date(1995, 11, 17, 3, 24, 0), selected: false},
        {from: 'test@mail.com', to: 'me@mail.com', theme: 'Theme', message: 'tmp text',
        important: true, time: new Date(1995, 11, 17, 3, 24, 0), selected: false},
        {from: 'test@mail.com', to: 'me@mail.com', theme: 'Theme', message: 'tmp text',
        important: true, time: new Date(1995, 11, 17, 3, 24, 0), selected: false},
        {from: 'test@mail.com', to: 'me@mail.com', theme: 'Theme', message: 'tmp text',
        important: true, time: new Date(1995, 11, 17, 3, 24, 0), selected: false}
    ], owner: 'admin'},
    {name: 'income', letters: [
        {from: 'test1@mail.com', to: 'user@mail.com', theme: 'Theme', message: 'Random text',
        important: false, time: new Date(2017, 3, 18, 3, 24, 0), selected: false},
        {from: 'test2@mail.com', to: 'user@mail.com', theme: 'Theme', message: 'Random text',
        important: true, time: new Date(2017, 3, 17, 3, 24, 0), selected: false},
        {from: 'test3@mail.com', to: 'user@mail.com', theme: 'Theme', message: 'Random text',
        important: false, time: new Date(2017, 3, 19, 3, 24, 0), selected: false}
    ], owner: 'user'},
    {name: 'sent', letters: [], owner: 'user'},
    {name: 'spam', letters: [], owner: 'user'}
];

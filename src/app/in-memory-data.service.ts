import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const guitarists = [
      {
        id: 1,
        name: 'Ritchie Blackmoregit',
        groups: ['Rainbow', 'Deep Purple', 'Heinz']
      }, {
        id: 2,
        name: 'Eric Clapton',
        groups: ['The Yardbirds', 'The Dirty Mac']
      }, {
        id: 3,
        name: 'Angus Young',
        groups: ['AC/DC', 'Kentuckee']
      }, {
        id: 4,
        name: 'Jimi Hendrix',
        groups: [
          'Jimmy James and Blue Flames',
          'Band of Gypsys',
          'The Jimi Hendrix Experience'
        ]
      }, {
        id: 5,
        name: 'Jimmy Page',
        groups: ['Led Zeppelin', 'The Who', ' The Kinks']
      }
    ];
    return { guitarists };
  }
}

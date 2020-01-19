import {RequestHelperService} from '../../shared/services';
import {anything, deepEqual, instance, mock, verify} from 'ts-mockito';
import {GamesService} from './games.service';

const requestHelperMock = mock(RequestHelperService);

describe('GamesService', () => {
  let gamesService: GamesService;

  beforeEach(() => {
    gamesService = new GamesService(instance(requestHelperMock));
  });

  it('should dispatch the load games request', () => {
    // when
    gamesService.loadGames();

    // then
    verify(requestHelperMock.request(anything(), anything(), deepEqual({})))
      .once();
  });
});

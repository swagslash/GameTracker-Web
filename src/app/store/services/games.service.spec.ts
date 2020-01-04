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
    // given
    const userId = 'ID';

    // when
    gamesService.loadGames(userId);

    // then
    verify(requestHelperMock.request(anything(), anything(), deepEqual({ userId }))).once();
  });
});

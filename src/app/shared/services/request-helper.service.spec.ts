import {RequestHelperService} from './request-helper.service';
import {instance, mock, when} from 'ts-mockito';
import {HttpClient} from '@angular/common/http';
import {HttpMethod} from '../http-method';
import {of} from 'rxjs';
import {take} from 'rxjs/operators';

const httpClient = mock(HttpClient);

describe('RequestHelperService', () => {
  let requestHelperService: RequestHelperService;

  beforeEach(() => {
    requestHelperService = new RequestHelperService(instance(httpClient));
  });

  it('should do a get request', (done) => {
    // given
    const method = HttpMethod.GET;
    const url = 'https://test.com/api/login?test=test';
    const successMessage = 'success';
    when(httpClient.get(url)).thenReturn(of(successMessage));

    // when
    const result$ = requestHelperService.request(method, url);

    // then
    result$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data).toBe(successMessage);
        done();
      });
  });

  it('should do a post', (done) => {
    // given
    const method = HttpMethod.POST;
    const url = 'https://test.com/api/login';
    const payload = {
      test: 'test',
    };
    const successMessage = 'success';
    when(httpClient.post(url, payload)).thenReturn(of(successMessage));

    // when
    const result$ = requestHelperService.request(method, url, payload);

    // then
    result$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data).toBe(successMessage);
        done();
      });
  });

  it('should give an error for an unsupported HttpMethod', (done) => {
    // given
    const method = HttpMethod.DELETE;
    const url = 'https://test.com';

    // when
    const result$ = requestHelperService.request(method, url);

    // then
    result$
      .pipe(take(1))
      .subscribe({
        error: () => {
          done();
        },
      });
  });
});

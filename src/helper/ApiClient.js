/**
 * Created by songzhongkun on 17/4/14.
 */
import fetch from 'isomorphic-fetch';
const methods = ['post', 'get'];
let result = {};

export default class ApiClient {

  constructor() {

    methods.forEach(method => {

      this[method] = (path, {data, params} = {}) => {

        console.log('params', params);

        return new Promise((resolve, reject) => {

          if (path.indexOf('add') > 0) {
            result.response.hobbies.push(data.text);
            resolve(result);
          } else {
            /*fetch('/static/config/hobby.json')
              .then(response => response.json())
              .then(json => {
                result = json;
                resolve(json);
              })
              .catch(err => reject(err));*/

            resolve({
              'code': 0,
              'status': 'OK',
              'response': {
                'hobbies': [
                  '听音乐',
                  '打篮球',
                  '唱歌',
                ],
              },
            });
          }

        });

      };

    });

  }

}
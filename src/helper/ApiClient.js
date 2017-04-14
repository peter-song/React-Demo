/**
 * Created by songzhongkun on 17/4/14.
 */
const methods = ['post', 'get'];
let hobbies = ['听音乐', '打篮球'];

export default class ApiClient {
    constructor() {
        methods.forEach(method => {
            this[method] = (path, {data, params} = {}) => {
                return new Promise((resolve, reject) => {
                    if (1 == 1) {
                        if (path.indexOf('add') > 0) {
                            hobbies.push(data.text);
                        }
                        let result = {
                            code: 0,
                            status: 'OK',
                            response: {
                                hobbies: hobbies
                            }
                        };
                        resolve(result)
                    } else {
                        let result = {
                            code: 0,
                            status: 'FAIL',
                            response: 'error'
                        };
                        reject(result);
                    }
                })
            }
        })
    }
}
// import axios from 'redaxios';

// // インターセプターの型定義
// type RequestInterceptor = (config: any) => any;
// type ResponseInterceptor = (response: any) => any;
// type ErrorInterceptor = (error: any) => any;

// // インターセプターを管理するクラス
// class AxiosInterceptorManager {
//   private requestInterceptors: RequestInterceptor[] = [];
//   private responseInterceptors: ResponseInterceptor[] = [];
//   private errorInterceptors: ErrorInterceptor[] = [];

//   // リクエストインターセプターを追加
//   addRequestInterceptor(interceptor: RequestInterceptor) {
//     this.requestInterceptors.push(interceptor);
//     return this.requestInterceptors.length - 1;
//   }

//   // レスポンスインターセプターを追加
//   addResponseInterceptor(interceptor: ResponseInterceptor) {
//     this.responseInterceptors.push(interceptor);
//     return this.responseInterceptors.length - 1;
//   }

//   // エラーインターセプターを追加
//   addErrorInterceptor(interceptor: ErrorInterceptor) {
//     this.errorInterceptors.push(interceptor);
//     return this.errorInterceptors.length - 1;
//   }

//   // インターセプターを削除
//   ejectRequestInterceptor(id: number) {
//     if (id >= 0) {
//       this.requestInterceptors.splice(id, 1);
//     }
//   }

//   ejectResponseInterceptor(id: number) {
//     if (id >= 0) {
//       this.responseInterceptors.splice(id, 1);
//     }
//   }

//   ejectErrorInterceptor(id: number) {
//     if (id >= 0) {
//       this.errorInterceptors.splice(id, 1);
//     }
//   }

//   // インターセプターを実行
//   async runRequestInterceptors(config: any) {
//     for (const interceptor of this.requestInterceptors) {
//       config = await interceptor(config);
//     }
//     return config;
//   }

//   async runResponseInterceptors(response: any) {
//     for (const interceptor of this.responseInterceptors) {
//       response = await interceptor(response);
//     }
//     return response;
//   }

//   async runErrorInterceptors(error: any) {
//     for (const interceptor of this.errorInterceptors) {
//       error = await interceptor(error);
//     }
//     return error;
//   }
// }

// // カスタムAxiosインスタンスを作成
// const createCustomAxios = () => {
//   const interceptorManager = new AxiosInterceptorManager();
//   const customAxios = axios.create();

//   // オリジナルのrequestメソッドをラップ
//   const originalRequest = customAxios.request;
//   customAxios.request = async function (...args: any[]) {
//     try {
//       // リクエストインターセプターを実行
//       let config = args[0];
//       config = await interceptorManager.runRequestInterceptors(config);
//       args[0] = config;

//       // リクエストを実行
//       const response = await originalRequest.apply(this, args);

//       // レスポンスインターセプターを実行
//       return await interceptorManager.runResponseInterceptors(response);
//     } catch (error) {
//       // エラーインターセプターを実行
//       const processedError = await interceptorManager.runErrorInterceptors(error);
//       throw processedError;
//     }
//   };

//   // インターセプターを追加するためのメソッドを公開
//   return {
//     ...customAxios,
//     interceptors: {
//       request: {
//         use: (interceptor: RequestInterceptor) =>
//           interceptorManager.addRequestInterceptor(interceptor),
//         eject: (id: number) =>
//           interceptorManager.ejectRequestInterceptor(id)
//       },
//       response: {
//         use: (interceptor: ResponseInterceptor) =>
//           interceptorManager.addResponseInterceptor(interceptor),
//         eject: (id: number) =>
//           interceptorManager.ejectResponseInterceptor(id)
//       },
//       error: {
//         use: (interceptor: ErrorInterceptor) =>
//           interceptorManager.addErrorInterceptor(interceptor),
//         eject: (id: number) =>
//           interceptorManager.ejectErrorInterceptor(id)
//       }
//     }
//   };
// };

// // 使用例
// export const api = createCustomAxios();

// // インターセプターの使用例
// api.interceptors.request.use((config) => {
//   // リクエスト前の処理
//   config.headers = {
//     ...config.headers,
//     'Authorization': `Bearer ${localStorage.getItem('token')}`
//   };
//   return config;
// });

// api.interceptors.response.use((response) => {
//   // レスポンス後の処理
//   return response.data;
// });

// api.interceptors.error.use((error) => {
//   // エラー処理
//   console.error('API Error:', error);
//   throw error;
// });

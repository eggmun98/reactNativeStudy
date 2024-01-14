/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// index.js 파일은 리액트 네이티브 애플리케이션의 진입점(entry point)이다.
// 이곳에서 앱의 루트 컴포넌트를 등록할 수 있다.

// AppRegistry는 리액트 네이티브 애플리케이션을 시작할 때, 앱의 루트 컴포넌트를 등록할 때 사용한다.
// APP은 APP.tsx에서 export된 앱의 컴포넌트이다.
// appName은 app.json에서 애플리케이션의 이름을 가져온다. => 앱을 등록할 때 사용한다.
// registerComponent함수는 앱의 시작 시 실행할 컴포넌트를 등록한다. =>  첫번째 인자로 앱의 이름, 두번째 인자로 반환할 컴포넌트를 받는다.

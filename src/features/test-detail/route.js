import { TestDetailPage } from './';
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html


export default {
  path: 'test-detail',
  name: 'Test detail',
  childRoutes: [
    { path: '/test-detail', name: 'Test detail page', component: TestDetailPage },
  ],
};
